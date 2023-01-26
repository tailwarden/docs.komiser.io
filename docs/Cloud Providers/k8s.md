# Kubernetes

## Local Komiser CLI integration with Kubernetes

Komiser now supports multiple cloud accounts and Kubernetes clusters by default. Account configuration is done through the `config.toml` file. 

Pass in the path to your cluster's `config` file. Which you can find in your local `./kube` folder.

### Data persistence
Choose between these two methods of persisting your Kubernetes cluster data.

#### Postgres
**Add to config.toml file**
```
[postgres]
uri="postgres://postgres:komiser@localhost:5432/komiser?sslmode=disable"
```
#### SQLite

```
[sqlite]
  file = "komiser.db"
```

### Configuring Credentials

Firstly locate your Kubernetes `config` file. 

```
➜ ~ cd .kube
➜ .kube pwd
➜ /Users/user-name/.kube/config
```

### Add the path to .kube/config in the configuration file.

```
[[k8s]]
name="demo-account"
path="path/to/.kube/config"

[sqlite]
file="komiser.db
```
                                        
### Run it!
* That should be it. Try out the following command from your command prompt to start the server:

```
komiser start 
```

* Point your browser to `http://localhost:3000`

### You should see something like this!
> In komiser v3.0.1 only `pods` and `services` are supported. More Kubernetes resources will be added shortly. 

![Kubernetes-dashboard](/img/kubernetes-image-docs.png)