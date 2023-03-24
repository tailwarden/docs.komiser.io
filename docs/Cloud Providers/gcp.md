---
slug: /cloud-providers/google-cloud-platform
title: Google Cloud Platform
sidebar_label: Google Cloud Platform (GCP)
---

# Google Cloud Platform

## Supported resources

- Cloud Storage Buckets
- Compute Engine VM Instances


## Local Komiser CLI (Single account)

Komiser now supports multiple cloud accounts by default. Account configuration is done through the `config.toml` file, just pass in your account credentials as shown below.

We've also added 2 methods of persisting your account data.
### Postgres
#### Add to config.toml file
```
[postgres]
  uri="postgres://postgres:komiser@localhost:5432/komiser?sslmode=disable"
```
### SQLite

```
[sqlite]
  file = "komiser.db"
```

### Configuring Credentials

To enable Komiser collecting your GCP resources, you need to have a [Service Account](https://cloud.google.com/iam/docs/service-account-overview) setup with at least the following permissions:

- `storage.buckets.list` to list Buckets
- `compute.instances.list` to list VM instances
- `monitoring.timeSeries.list` to allow for cost estimation of your Buckets

Create and download the Service Account as JSON from the GCP console and store it on your machine. Add the following configuration to your `config.toml`:

```toml
[[gcp]]
  name="Sandbox"
  serviceAccountKeyPath="/path/to/serviceAccount/serviceAccount.json"

[sqlite]
  file="komiser.db
```

The `name` can be anything you want. You can use different names in the case you want to connect more than one GCP account. 

Find your `organizationId` by pressing on the gear icon next to your Organization name.

### Run it!
* That should be it. Try out the following from your command prompt to start the server:

```
komiser start 
```

* Point your browser to `http://localhost:3000`

## Local Komiser CLI (Multiple accounts)
Simply add more authentication blocks to the configuration file

```
[[gcp]]
  name="AccountOne"
  serviceAccountKeyPath="/path/to/serviceAccount/serviceAccount1.json"

[[gcp]]
  name="AccountTwo"
  serviceAccountKeyPath="/path/to/serviceAccount/serviceAccount2.json"

[sqlite]
  file="komiser.db

```
