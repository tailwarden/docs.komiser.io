# Google Cloud Provider

## Local Komiser CLI (Single Account)

### Configuring Credentials

When using the CLI with GCP, Komiser checks to see if the environment variable `GOOGLE_APPLICATION_CREDENTIALS` is set. If not an error occurs.

### Create a Service Account
* Create a service account with *Viewer* permission, see [Creating and managing service accounts](https://cloud.google.com/iam/docs/creating-managing-service-accounts) docs.

### Enable APIs to access your GCP project
* Enable the below APIs for your project through GCP Console, `gcloud` or using the Service Usage API. You can find out more about these options in [Enabling an API in your GCP project](https://cloud.google.com/endpoints/docs/openapi/enable-api) docs.
    * appengine.googleapis.com
    * bigquery-json.googleapis.com 
    * compute.googleapis.com 
    * cloudfunctions.googleapis.com
    * container.googleapis.com
    * cloudresourcemanager.googleapis.com
    * cloudkms.googleapis.com
    * dns.googleapis.com
    * dataflow.googleapis.com
    * dataproc.googleapis.com
    * iam.googleapis.com
    * monitoring.googleapis.com
    * pubsub.googleapis.com
    * redis.googleapis.com
    * serviceusage.googleapis.com
    * storage-api.googleapis.com
    * sqladmin.googleapis.com 

### Export `Daily cost` to BigQuery
* To analyze and optimize the infrastructure cost, you need to export your daily cost to BigQuery, see [Export Billing to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery) docs.

### Set environment variables locally
* Provide authentication credentials to your application code by setting the environment variable *GOOGLE_APPLICATION_CREDENTIALS*:

``` 
export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
```

### Run it!
* That should be it. Try out the following command from your command prompt to start the server:

```
komiser start --port 3000 --dataset project-id.dataset-name.table-name
```

* Point your browser to http://localhost:3000

<p align="center">
    <img src="https://cdn.komiser.io/images/dashboard-gcp.png"/>
</p>

## Options

```
komiser start [OPTIONS]
```

```
   --port value, -p value      Server port (default: 3000)
   --duration value, -d value  Cache expiration time (default: 30 minutes)
   --redis value, -r value     Redis server (localhost:6379)
   --dataset value, -ds value  BigQuery dataset name (project-id.dataset-name.table-name)
```