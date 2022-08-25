# Digital Ocean

## Local Komiser CLI (Single Account)

### Generate personal access token
* Log in to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/).

* Click the **API** link in the main navigation, In the **Personal access tokens** section, click the **Generate New Token** button.

* Create a *ready-only* scope token. When you click **Generate Token**, your token will be generated.

### Set `DIGITALOCEAN_ACCESS_TOKEN` environment variable locally
* Set *DIGITALOCEAN_ACCESS_TOKEN* environment variable:

```
export DIGITALOCEAN_ACCESS_TOKEN=<TOKEN>
```

### Run it!
* That should be it. Try out the following from your command prompt to start the server:

```
komiser start --port 3000
```
* If you point your browser to http://localhost:3000, you should be able to see your projects:

<p align="center">
    <img src="https://cdn.komiser.io/images/dashboard-digitalocean.png"/>
</p>