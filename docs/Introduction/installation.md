---
slug: /introduction/getting-started
title: Installation
sidebar_label: Installation
---
# Installation

## Prerequisites

- Make sure that you have PostgresSQL or SQLite installed on your computer.

- Make sure to create a directory where you want to install Komiser.

- Create a TOML configuration file called `config.toml` in the directory where you installed Komiser. The data will be inserted in it later on in this guide.

### What is Toml

TOML (Tom's Obvious, Minimal Language) is a configuration file format that is designed to be easy to read and write for both humans and machines. It was created by Tom Preston-Werner, co-founder of GitHub.

It has a simple structure, consisting of key-value pairs organized into tables, with the use of indentation to indicate nesting. It also supports various data types such as strings, integers, floats, booleans, arrays, and tables.

Here is an example of a simple TOML configuration file:

# This is a TOML document.

    title = "Example Config File"

    [database]
    server = "localhost"
    port = 3306
    username = "admin"
    password = "password123"

    [server]
    ip = "127.0.0.1"
    port = 8080
    debug = true

In this example, there are two tables: **database** and **server**. The t**database** table contains information about the database server, such as the server name, port number, username, and password. The **server** table contains information about the application server, such as the IP address, port number, and a boolean flag to enable debugging.

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

> **Note: Make sure to add the execution permission to Komiser `chmod +x komiser`.**

### Homebrew installation

You can install Komiser using Homebrew on macOS by following these steps:

1. Open Terminal on your Mac.

2. Install Homebrew if you haven't already by running the following command:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

3. Once Homebrew is installed, run the following command to add the Komiser tap:

`brew tap komiserio/komiser`

4. Finally, install Komiser by running the following command:

`brew install komiser`

5. After the installation is complete, you can verify that Komiser is installed by running the following command:

`komiser --version`

This should display the current version of Komiser installed on your system.

```
brew update
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