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

## SQLite file

First install the SQLite. Here are the steps to install SQLite on Linux, Windows, and macOS:

### Linux

- Open a terminal window.

- Use your operating system's package manager to install SQLite. Here are some examples for popular Linux distributions:

    - For Ubuntu or Debian: sudo apt-get install sqlite3
    - For Red Hat or CentOS: sudo yum install sqlite
    - Verify the installation by running the following command:
        
        `sqlite3 --version`

- You should see the version number of SQLite displayed.

### Windows

1. Go to the SQLite download page at https://sqlite.org/download.html.

2. Scroll down to the "Precompiled Binaries for Windows" section.

3. Download the appropriate precompiled binary for your system. For example, if you have a 64-bit Windows system, download the file named sqlite-dll-win64-x64-xxxxxx.zip and the file named sqlite-tools-win32-x86-xxxxxx.zip.

4. Extract the contents of the downloaded ZIP files to a folder on your computer.

5. Add the folder containing the sqlite3.exe executable to your system's PATH environment variable so that you can access the sqlite3 command from anywhere in the command prompt.

6. Verify the installation by running the following command in the command prompt:

    `sqlite3 --version`

## macOS

1. Open a terminal window.

2. Install SQLite using Homebrew by running the following command:

    `brew install sqlite`

3. Verify the installation by running the following command:

    `sqlite3 --version`

In the `config.toml` file, you need to specify the SQLite database details. First write `sqlite3 komiser.db` in the command line interface.

Here's an example of data that will be present in a file `config.toml` file:

    [sqlite]
    file = "komiser.db"

After entering the details, save the file and type `./komiser start config`

Once Komiser is running, you can access the web-based user interface by opening a web browser and navigating to `http://localhost:3000`. From here, you can explore the various cost optimization and security features that Komiser offers for SQLite databases.

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