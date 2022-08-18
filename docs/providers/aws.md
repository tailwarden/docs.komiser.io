# AWS

## Usage 

* Create an IAM user with the following IAM [policy](https://raw.githubusercontent.com/mlabouardy/komiser/master/policy.json):

```
wget https://komiser.s3.amazonaws.com/policy.json
```

* Add your **Access Key ID** and **Secret Access Key** to *~/.aws/credentials* using this format

``` 
[default]
aws_access_key_id = <access key id>
aws_secret_access_key = <secret access key>
region = <AWS region>
```

* That should be it. Try out the following from your command prompt to start the server:

```
komiser start --port 3000
```

## Multiple AWS Accounts Support

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

To enable multiple AWS accounts feature, add the --multiple option to Komiser:

```
komiser start --port 3000 --redis localhost:6379 --duration 30 --multiple
```

* If you point your browser to http://localhost:3000, you should be able to see your accounts:

<p align="center">
    <img src="https://s3.eu-west-3.amazonaws.com/komiser-assets/images/dashboard-aws-multiple.png"/>
</p>

## Configuring Credentials

When using the CLI you'll generally need your AWS credentials to authenticate with AWS services. Komiser supports multiple methods of supporting these credentials. By default the CLI will source credentials automatically from its default credential chain.

* Environment Credentials - Set of environment variables that are useful when sub processes are created for specific roles.

* Shared Credentials file (~/.aws/credentials) - This file stores your credentials based on a profile name and is useful for local development.

* EC2 Instance Role Credentials - Use EC2 Instance Role to assign credentials to application running on an EC2 instance. This removes the need to manage credential files in production.