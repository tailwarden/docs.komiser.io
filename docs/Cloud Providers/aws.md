# Amazon Web Services

## Configuring Credentials

When using the CLI you'll generally need your AWS credentials to authenticate with AWS services. Komiser supports multiple methods of supporting these credentials. By default the CLI will source credentials automatically from its default credential chain.

* Environment Credentials - Set of environment variables that are useful when sub processes are created for specific roles.

* Shared Credentials file (~/.aws/credentials) - This file stores your credentials based on a profile name and is useful for local development.

* EC2 Instance Role Credentials - Use EC2 Instance Role to assign credentials to application running on an EC2 instance. This removes the need to manage credential files in production.

## Local Komiser CLI (Single Account)
---

### Create an IAM user
* Create an IAM user with the following IAM [policy](https://raw.githubusercontent.com/mlabouardy/komiser/master/policy.json):

```
wget https://komiser.s3.amazonaws.com/policy.json
```
### Add user credentials locally
* Add your **Access Key ID** and **Secret Access Key** to *~/.aws/credentials* using this format

``` 
[default]
aws_access_key_id = <access key id>
aws_secret_access_key = <secret access key>
region = <AWS region>
```
### Run Komiser CLI
* That should be it. Try out the following from your command prompt to start the server:

```
komiser start --port 3000
```

## Komiser CLI (Restricted regions)
---
There might be times when you would like to specifically restrict the scope of Komisers reach to a specific cloud region or a subset of them. This can be useful for organizations with tight SCPs in place. 
Add the `--regions` flag to the `Komiser start` command and seperate the regions with commas. 
```
komiser start --regions eu-central-1,us-east-1,ap-southeast-1	

``` 

## Komiser CLI (Multiple accounts)
---
Komiser support multiple AWS accounts through named profiles that are stored in the `config` and `credentials files`. You can configure additional profiles by using `aws configure` with the `--profile` option, or by adding entries to the `config` and `credentials` files.

The following example shows a credentials file with 3 profiles (production, staging & sandbox accounts):

```
[Production]
aws_access_key_id=<AWS_ACCESS_KEY_ID>
aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>

[Staging]
aws_access_key_id=<AWS_ACCESS_KEY_ID>
aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>

[Sandbox]
aws_access_key_id=<AWS_ACCESS_KEY_ID>
aws_secret_access_key=<AWS_SECRET_ACCESS_KEY>
```

To enable multiple AWS accounts feature, add the `--multiple` option to Komiser start command:

```
komiser start --port 3000 --redis localhost:6379 --duration 30 --multiple
```

* If you point your browser to http://localhost:3000, you should be able to see your accounts


## EKS installation (single account)
---
Link to [repository](https://github.com/tailwarden/helm/blob/master/README.md#configuration-single-aws-account)

We will be using the official Komiser [Helm Chart](https://github.com/tailwarden/helm#configuration-multiple-aws-accounts) to deploy Komiser to our EKS cluster. 

### Prerequisite

* [Helm](https://helm.sh/docs/intro/install/) installed locally 

### Create and IAM OIDC provider for your cluster

1. Open the Amazon [EKS](https://console.aws.amazon.com/eks/home#/clusters)\.

1. Select the name of your cluster\.

1. In the **Details** section on the **Overview** tab, note the value of the **OpenID Connect provider URL**\.

1. Open the IAM console at [https://console\.aws\.amazon\.com/iam/](https://console.aws.amazon.com/iam/)\.

1. In the left navigation pane, choose **Identity Providers** under **Access management**\. If a **Provider** is listed that matches the URL for your cluster, then you already have a provider for your cluster\. If a provider isn't listed that matches the URL for your cluster, then you must create one\.

1. To create a provider, choose **Add Provider**\.

1. For **Provider Type**, choose **OpenID Connect**\.

1. For **Provider URL**, paste the OIDC issuer URL for your cluster, and then choose **Get thumbprint**\.

1. For **Audience**, enter `sts.amazonaws.com` and choose **Add provider**\.

### Create IAM role and attach a Komiser IAM policy

1. Open the IAM console at [https://console\.aws\.amazon\.com/iam/](https://console.aws.amazon.com/iam/)\.

1. In the left navigation pane, choose **Policies** and then choose **Create policy**\. 

1. Choose the **JSON** tab\.

1. In the **Policy Document** field, paste the Komiser recommended [policy](https://github.com/mlabouardy/komiser/blob/master/policy.json).

1. Choose **Review policy**\.

1. Enter a name and description for your policy and then choose **Create policy**\.

1. Record the Amazon Resource Name \(ARN\) of the policy to use later when you create your role\.

### Create an IAM role for a service account

<a name="create-service-account-iam-role"></a>

1. Let's generate the `trust relationship` policy. Copy the following code block to your computer.

   ```
   read -r -d '' TRUST_RELATIONSHIP <<EOF
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": {
           "Federated": "arn:aws:iam::${ACCOUNT_ID}:oidc-provider/${OIDC_PROVIDER}"
         },
         "Action": "sts:AssumeRoleWithWebIdentity",
         "Condition": {
           "StringEquals": {
             "${OIDC_PROVIDER}:aud": "sts.amazonaws.com",
             "${OIDC_PROVIDER}:sub": "system:serviceaccount:${NAMESPACE}:komiser"
           }
         }
       }
     ]
   }
   EOF
   echo "${TRUST_RELATIONSHIP}" > trust.json
   ```

`NOTE: Make sure to substitute ${NAMESPACE} for the namespace you will deploy the helm chart in. If deployed in any other namespace, you will see sts:AssumeRoleWithWebIdentity failure messages in the pod logs.`

1. Run the modified code block from the previous step to create a file named *`trust.json`*\.

1. Run the following AWS CLI command to create the role\. Replace `my-iam-role` with a name for your IAM role, and `my-role-description` with a description for your role\.

   ```
   aws iam create-role --role-name my-iam-role --assume-role-policy-document file://trust.json --description "my-role-description"
   ```

1. Run the following command to attach an IAM policy to your role\. Replace `my-iam-role` with the name of your IAM role, `111122223333` with your account ID \(or with **aws**, if you're attaching an AWS managed policy\), and `my-iam-policy` with the name of an existing policy that you created or an IAM AWS managed policy\.

   ```
   aws iam attach-role-policy --role-name my-iam-role --policy-arn=arn:aws:iam::111122223333:policy/my-iam-policy
   ```

### Update ServiceAccount

Update [templates/service-account.yaml](https://github.com/tailwarden/helm/blob/master/templates/service-account.yaml) with the IAM role you've created previously
```
apiVersion: v1
kind: ServiceAccount
metadata:
  name: komiser
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME
```
### Installing the chart
To install the chart:

```bash
$ helm install -f values.yaml komiser .
```

The above command deploys Komiser on the Kubernetes cluster in the default configuration.

### Watch tutorial

<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/3J0t-fWHDbs'
    allowFullScreen
    webkitallowfullscreen="true"
    frameBorder="0"
    style={{
      position: 'absolute',
      top:0,
      left:0,
      width:'100%',
      height:'100%',
    }}
  >
  </iframe>
</div>

## Multiple account EKS (Helm chart) installation
---
Link to [README](https://github.com/tailwarden/helm/blob/master/README.md#configuration-multiple-aws-accounts) file with step by step instructions.

Steps for a container to access the resources in multiple AWS accounts.
We are working with two example clusters, ADMIN and DEV cluster.

Solution diagram:
![solutions-diagram](../../static/img/multi-account-graph.png)

### Create and IAM OIDC provider for your cluster

1. Open the Amazon EKS console at [https://console\.aws\.amazon\.com/eks/home\#/clusters](https://console.aws.amazon.com/eks/home#/clusters)\.

1. Select the name of your cluster\.

1. In the **Details** section on the **Overview** tab, note the value of the **OpenID Connect provider URL**\.

1. Open the IAM console at [https://console\.aws\.amazon\.com/iam/](https://console.aws.amazon.com/iam/)\.

1. In the left navigation pane, choose **Identity Providers** under **Access management**\. If a **Provider** is listed that matches the URL for your cluster, then you already have a provider for your cluster\. If a provider isn't listed that matches the URL for your cluster, then you must create one\.

1. To create a provider, choose **Add Provider**\.

1. For **Provider Type**, choose **OpenID Connect**\.

1. For **Provider URL**, paste the OIDC issuer URL for your cluster, and then choose **Get thumbprint**\.

1. For **Audience**, enter `sts.amazonaws.com` and choose **Add provider**\.

### Register the `ADMIN` OIDC provider in the `DEV` cluster

1. Grab the **OpenID Connect provider URL** from the **ADMIN** account.

2. Open the IAM console at [https://console\.aws\.amazon\.com/iam/](https://console.aws.amazon.com/iam/)\.

1. In the left navigation pane, choose **Identity Providers** under **Access management**\.

1. To create a provider, choose **Add Provider**\.

1. For **Provider Type**, choose **OpenID Connect**\.

1. For **Provider URL**, paste the ADMIN OIDC issuer URL, and then choose **Get thumbprint**\.

1. For **Audience**, enter `sts.amazonaws.com` and choose **Add provider**\.

### Create A `DEV IAM role`
* Add the recommended [Komiser policy](https://github.com/tailwarden/komiser/blob/master/policy.json)
* Create a Trust Relathionship with the `ADMIN` role (once it's created)
```
 {
     "Version": "2012-10-17",
     "Statement": [
         {
             "Effect": "Allow",
             "Principal": {
                 "AWS": "arn:aws:iam::${ADMIN_ACCOUNT_ID}:role/${ROLE_NAME}"
             },
             "Action": "sts:AssumeRole",
             "Condition": {}
         }
     ]
 }
```

### Create an `ADMIN IAM role`
* Create a [role](#create-iam-role-and-attach-a-komiser-iam-policy) with the same configuration as above. 
* Additionally attach the policy to assume the `DEV` role
```
 {
     "Version": "2012-10-17",
     "Statement": [
         {
             "Effect": "Allow",
             "Action": "sts:AssumeRole",
             "Resource": "arn:aws:iam::${DEV_ACCOUNT_ID}:role/${ROLE_NAME}"
         }
     ]
 }
```

### Add the `ADMIN` role to the ServiceAccount
Add your values for `ACCOUNT_ID` and `ROLE_Name`

```
apiVersion: v1
kind: ServiceAccount
metadata:
  name: komiser
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME
```

### Add a ConfigMap to the `/templates` folder

1. Add the configmap.yaml file the the `/templates` folder in the root of the repository.

   ```
    apiVersion: v1
    kind: ConfigMap
    data:
    credentials: |-
        [ADMIN-account]
        region = ${REGION}
        role_arn = arn:aws:iam::${ADMIN_AWS_ACCOUNT_ID}:role/${ROLE_NAME}
        web_identity_token_file = /var/run/secrets/eks.amazonaws.com/serviceaccount/token

        [DEV-account]
        region = ${REGION}
        role_arn = arn:aws:iam::${DEV_AWS_ACCOUNT_ID}:role/${ROLE_NAME}
        source_profile = ADMIN-account
        role_session_name = komiser_session
    metadata:
    annotations:
        meta.helm.sh/release-name: ${RELEASE_NAME}
        meta.helm.sh/release-namespace: ${NAMESPACE}
    labels:
        app.kubernetes.io/managed-by: Helm
    name: aws-configmap
    namespace: ${NAMESPACE}
   ```

### Mount the ConfigMap to the Deployment manifest

1. Make sure not to change the mount path or internal volume path, paths should match the example below.
2. Add the `command: ["--multiple"]` to the container to allow a multi account setup

   ```
    apiVersion: apps/v1 
    kind: Deployment 
    metadata: 
    name: komiser
    spec:
    selector: 
        matchLabels: 
        app: komiser
    template: 
        metadata: 
        name: komiser
        labels: 
            app: komiser
        spec:
        serviceAccountName: komiser
        containers: 
            - name: {{ .Chart.Name }}
            image: "{{ .Values.image.repository }}:{{ .Values.image.tag }}"
            imagePullPolicy: {{ .Values.image.pullPolicy }}
            command: ["--multiple"]
            env:
                - name: AWS_DEFAULT_REGION
                value: "{{ .Values.aws.region }}"
                - name: AWS_CONFIG_FILE
                value: /root/.aws/credentials
            volumeMounts:
            - name: test-volume
                mountPath: /root/.aws/
        volumes:
        - name: test-volume
            configMap:
            name: aws-configmap

### Watch tutorial
<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/pYfjHKM1gzw'
    allowFullScreen
    webkitallowfullscreen="true"
    frameBorder="0"
    style={{
      position: 'absolute',
      top:0,
      left:0,
      width:'100%',
      height:'100%',
    }}
  >
  </iframe>
</div>