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
wget https://cli.komiser.io/3.0.0/linux/komiser
```

### Windows

```
wget https://cli.komiser.io/3.0.0/windows/komiser -OutFile komiser.exe
```

### Mac OS X

For ARM architecture (M1 Chip)

```
wget https://cli.komiser.io/3.0.0/osx/arm/komiser
```

For AMD architecture (Intel Chip)

```
wget https://cli.komiser.io/3.0.0/osx/amd/komiser
```

!!! Note
    Make sure to add the execution permission to Komiser `chmod +x komiser`.


### Homebrew installation

```
brew upgrade
brew tap tailwarden/komiser
brew install komiser
```

## How to use

### Komiser CLI installation

<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/-jDXVO6NjVk'
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

### Options

```
Usage:
  komiser start [command]
```

```
Available Commands:
  config      Create configuration file
  help        Help about any command
  start       Run Komiser server
  version     Show tool version

Flags:
  -h, --help   help for komiser
```

### Docker image 

Komiser is also available as a Docker image:

[https://hub.docker.com/r/mlabouardy/komiser/tags/](https://hub.docker.com/r/mlabouardy/komiser/tags/)

There is no "latest" tag, so find the version of the CLI you want to use from the tags page on the Docker Hub. These correspond to the release from GitHub.

```
docker run -d -p 3000:3000 --name komiser tailwarden/komiser:3.0.0
```

### Docker installation tutorial
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

## Self-hosted

Head over to your cloud provider of choice to learn how to connect your Komiser CLI to your cloud account and to deploy a self hosted version of the tool. 

* [AWS](/docs/Cloud%20Providers/aws.md)
* [GCP](/docs/Cloud%20Providers/gcp.md)
* [OVH](/docs/Cloud%20Providers/ovh.md)
* [DigitalOcean](/docs/Cloud%20Providers/digital-ocean.md)
* [Azure](/docs/Cloud%20Providers/azure.md)