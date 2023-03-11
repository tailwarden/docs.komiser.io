---
slug: /introduction/getting-started
title: Installation
sidebar_label: Installation
---
# Installation

## Getting started

You can install the CLI with a `curl` utility script or by downloading the binary from the releases page. Once installed you'll get the `komiser` command.

### Linux

```
wget https://cli.komiser.io/3.0.5/linux/komiser
```

### Windows

```
wget https://cli.komiser.io/3.0.5/windows/komiser -O komiser.exe
```

### Mac OS X

For ARM architecture (M1 & M2 Chip)

```
wget https://cli.komiser.io/3.0.5/osx/arm/komiser
```

For AMD architecture (Intel Chip)

```
wget https://cli.komiser.io/3.0.5/osx/amd/komiser
```

> Note
    Make sure to add the execution permission to Komiser `chmod +x komiser`.


### Homebrew installation

```
brew update
brew tap tailwarden/komiser
brew install komiser
```

## Postgres URI

Install and run the PostgreSQL. To check it running, type `systemctl status postgresql`.

Here are the steps to install PostgreSQL:

1. Open a terminal window on your operating system.

2. Install PostgreSQL using your operating system's package manager. Here are some examples for popular operating systems:

    - For Ubuntu or Debian: `sudo apt-get install postgresql`
    - For Red Hat or CentOS: `sudo yum install postgresql-server`
    - For macOS with Homebrew: `brew install postgresql`

3. Once PostgreSQL is installed, start the PostgreSQL server by running the following command:

    - For Ubuntu or Debian: `sudo systemctl start postgresql`
    - For Red Hat or CentOS: `sudo systemctl start postgresql`
    - For macOS with Homebrew: `brew services start postgresql`

4. Optionally, you can configure PostgreSQL to start automatically when your computer starts:

    - For Ubuntu or Debian: `sudo systemctl enable postgresql`
    - For Red Hat or CentOS: `sudo systemctl enable postgresql`
    - For macOS with Homebrew: `brew services start postgresql`
    
5. You can now connect to the PostgreSQL server using the psql command-line tool. To connect to the default PostgreSQL database, run the following command:
    
    `psql postgres`

After the PostgreSQL installation, type the following credentials in the `config.toml` file.

    # PostgreSQL configuration
    [postgres]
    host = "localhost"
    port = 5432
    database = "mydb"
    username = "myuser"
    password = "mypassword"

Or you can type this 

    [postgres]
    uri = "postgres://postgres:komiser@localhost:5432/komiser-3sslmode=disable"

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

### Docker

Komiser is also available as a Docker image:

[https://hub.docker.com/r/tailwarden/komiser/tags/](https://hub.docker.com/r/tailwarden/komiser/tags)

Check Docker Hub of the Komiser changelog to find the latest version of Komiser. 

> Note: From Komiser v3 onwards, we natively support multiple cloud account authentication through the `config.toml` file, you will need to mount this fill along with a credentials file (not needed is using ENVIRONMENT_VARIABLES as the auth source) to the Docker container using the `-v` flags as seen in the `Docker run` command below. 

```
docker run -v /local/path/to/config.toml:/etc/config/config.toml  -v /local/path/to/credentials.yaml:/etc/config/credentials.yaml -d -p 3000:3000 --name komiser  tailwarden/komiser:3.0.5 komiser start --config /etc/config/config.toml
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
    src='https://www.youtube.com/embed/8IJMoH4PKe8'
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

## Slack integration (Alerts)

To integrate Komiser with Slack you will have to generate a webhook and add it to the `config.toml` file.
Find the steps to generate the slack webhook in the official slack documentation [here](https://api.slack.com/messaging/webhooks).

### Steps to integrate Komiser with Slack: 
- Create a Slack app (if you don't have one already) 
- Enable Incoming Webhooks 
- Create an Incoming Webhook
- Pick a channel that the app will post to, and then click to `Authorize your app`
- You'll be sent back to your app settings, and you should now see a new entry under the Webhook URLs for Your Workspace section, with a Webhook URL that'll look something like this

```
https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```
Then simply add the `[slack]` block to your `config.toml` file

```
[slack]
webhook="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
```

## Self-hosted

Head over to your cloud provider of choice to learn how to connect your Komiser CLI to your cloud account and to deploy a self hosted version of the tool. 

* [AWS](/docs/cloud-providers/aws)
* [Azure](/docs/cloud-providers/azure)
* [Civo](/docs/cloud-providers/civo)
* [DigitalOcean](/docs/cloud-providers/digital-ocean)
* [Kubernetes](/docs/cloud-providers/kubernetes)
* [OCI](/docs/cloud-providers/oci)
* [Linode](/docs/cloud-providers/linode)
* [Tencent](/docs/cloud-providers/tencent)
* [Scaleway](/docs/cloud-providers/scaleway)