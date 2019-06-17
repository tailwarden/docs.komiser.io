## Installation

You can install the CLI with a `curl` utility script or by downloading the binary from the releases page. Once installed you'll get the `komiser` command.

### Linux:

```
wget https://s3.us-east-1.amazonaws.com/komiser/2.3.0/linux/komiser
```

### Windows:

```
wget https://s3.us-east-1.amazonaws.com/komiser/2.3.0/windows/komiser
```

### Mac OS X:

```
wget https://s3.us-east-1.amazonaws.com/komiser/2.3.0/osx/komiser
```

!!! Note
    Make sure to add the execution permission to Komiser `chmod +x komiser`.

### Docker image

Komiser is also available as a Docker image:

[https://hub.docker.com/r/mlabouardy/komiser/tags/](https://hub.docker.com/r/mlabouardy/komiser/tags/)

There is no "latest" tag, so find the version of the CLI you want to use from the tags page on the Docker Hub. These correspond to the release from GitHub.

```
docker run -d -p 3000:3000 --name komiser mlabouardy/komiser:2.3.0
```

### Build from source

The [contributing guide](https://docs.komiser.io/contributing) has instructions for building from source and for configuring a Golang development environment.