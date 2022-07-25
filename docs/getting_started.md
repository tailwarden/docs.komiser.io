## Installation

You can install the CLI with a `curl` utility script or by downloading the binary from the releases page. Once installed you'll get the `komiser` command.

### Linux:

```
wget https://s3.us-east-1.amazonaws.com/komiser/2.5.0/linux/komiser
```

### Windows:

```
wget https://s3.us-east-1.amazonaws.com/komiser/2.5.0/windows/komiser
```

### Mac OS X:

```
wget https://s3.us-east-1.amazonaws.com/komiser/2.5.0/osx/komiser
```

!!! Note
    Make sure to add the execution permission to Komiser `chmod +x komiser`.

#### Install Komiser CLI locally:

<a href="https://www.loom.com/share/27d586a54cef49f3b394085afb119afa">
    <p>Komiser CLI: Installation tutorial  - Watch Video</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/27d586a54cef49f3b394085afb119afa-1658241069897-with-play.gif">
  </a>

### Docker image

Komiser is also available as a Docker image:

[https://hub.docker.com/r/mlabouardy/komiser/tags/](https://hub.docker.com/r/mlabouardy/komiser/tags/)

There is no "latest" tag, so find the version of the CLI you want to use from the tags page on the Docker Hub. These correspond to the release from GitHub.

```
docker run -d -p 3000:3000 --name komiser mlabouardy/komiser:2.5.0
```

#### Docker installation video tutorial:

<a href="https://www.loom.com/share/5ce75af3a4a34dffb923f126019b0f7b">
    <p>Komiser: Docker deployment 📦 - Watch Video</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/5ce75af3a4a34dffb923f126019b0f7b-1658315486250-with-play.gif">
  </a>

#### Kubernetes (Helm chart) installation video tutorial:

<a href="https://www.loom.com/share/da9871ac41f94f59bc48a62da8fd1df9">
    <p>Komiser: Kubernetes deployment (Helm) - Watch Video</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/da9871ac41f94f59bc48a62da8fd1df9-with-play.gif">
  </a>


### Build from source

The [contributing guide](https://docs.komiser.io/contributing) has instructions for building from source and for configuring a Golang development environment.