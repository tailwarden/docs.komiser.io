---
slug: /overview/introduction/getting-started
title: Installation
sidebar_label: Installation
---
# Installation

## Getting started

You can install the CLI with a `curl` utility script or by downloading the binary from the releases page. Once installed you'll get the `komiser` command.

### Linux

```
wget https://cli.komiser.io/2.9.0/linux/komiser
```

### Windows

```
wget https://cli.komiser.io/2.9.0/windows/komiser -OutFile komiser.exe
```

### Mac OS X

```
wget https://cli.komiser.io/2.9.0/osx/komiser
```

!!! Note
    Make sure to add the execution permission to Komiser `chmod +x komiser`.


### Homebrew installation

```
brew tap HelloOraculi/komiser
brew install komiser
```

## How to use

### Komiser CLI

<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/1QeHTTZNF4o'
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

#### AWS

* Create an IAM user with the following IAM [policy](https://raw.githubusercontent.com/mlabouardy/komiser/master/policy.json):

```
wget https://raw.githubusercontent.com/mlabouardy/komiser/master/policy.json
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

You can also use Redis as a caching server:

```
komiser start --port 3000 --redis localhost:6379 --duration 30
```

* Point your browser to http://localhost:3000


#### Multiple AWS Account support for local testing
Komiser supports multiple AWS accounts through named profiles that are stored in the `config` and `credentials files`. You can configure additional profiles by using `aws configure` with the `--profile` option, or by adding entries to the `config` and `credentials` files.

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

To enable Multiple AWS Account Support for a Komiser deployment in an EKS cluster, check the video below. 

### Docker image 

Komiser is also available as a Docker image:

[https://hub.docker.com/r/mlabouardy/komiser/tags/](https://hub.docker.com/r/mlabouardy/komiser/tags/)

There is no "latest" tag, so find the version of the CLI you want to use from the tags page on the Docker Hub. These correspond to the release from GitHub.

```
docker run -d -p 3000:3000 --name komiser mlabouardy/komiser:2.9.0
```

### Docker installation
Link to [README](https://github.com/mlabouardy/komiser#docker) file with step by step instructions.

<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/t6lNdQx9eNg'
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

### Kubernetes (Helm chart) installation
Link to [README](https://github.com/HelloOraculi/helm/blob/master/README.md#configuration-single-aws-account) file with step by step instructions.

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

### Multiple account EKS (Helm chart) installation
Link to [README](https://github.com/HelloOraculi/helm/blob/master/README.md#configuration-multiple-aws-accounts) file with step by step instructions.

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