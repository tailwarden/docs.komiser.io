# OVH

* Create an API application from [here](https://eu.api.ovh.com/createToken/). 

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

* If you point your browser to http://localhost:3000, you should be able to see your projects:

<p align="center">
    <img src="https://s3.eu-west-3.amazonaws.com/komiser-assets/images/dashboard-ovh.png"/>
</p>