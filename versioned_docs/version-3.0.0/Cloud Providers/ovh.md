# OVHcloud

## Local Komiser CLI (Single Account)

### Data persistence
Choose between these two methods of persisting your OVH account data.
#### Postgres
**Add to config.toml file**
```
[postgres]
uri="postgres://postgres:komiser@localhost:5432/komiser?sslmode=disable"
```
Note: For Postgres, Komiser anticipates the existence of a role `postgres` and a database `komiser` on the local Postgres server.

#### SQLite

```
[sqlite]
  file = "komiser.db"
```

### Create and API
* Create an API application from [here](https://eu.api.ovh.com/createToken/). 

### Configure correct enviroment variables
* This CLI will first look for direct instanciation parameters then `OVH_ENDPOINT`, `OVH_APPLICATION_KEY`, `OVH_APPLICATION_SECRET` and `OVH_CONSUMER_KEY` environment variables. If either of these parameter is not provided, it will look for a configuration file of the form:

```
[default]
; general configuration: default endpoint
endpoint=ovh-eu

[ovh-eu]
; configuration specific to 'ovh-eu' endpoint
application_key=my_app_key
application_secret=my_application_secret
consumer_key=my_consumer_key
```

* The CLI will successively attempt to locate this configuration file in

    * Current working directory: `./ovh.conf`
    * Current user's home directory `~/.ovh.conf`
    * System wide configuration `/etc/ovh.conf`


### Run it!
* That should be it. Try out the following command from your command prompt to start the server:

```
komiser start --port 3000
```

* If you point your browser to http://localhost:3000, you should be able to see your projects:

<p align="center">
    <img src="https://cdn.komiser.io/images/dashboard-ovh.png"/>
</p>