# Azure

* Set the following environment variables:
  
| Variable              | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| AZURE_TENANT_ID       | The Azure Active Directory tenant(directory) ID.                 |
| AZURE_CLIENT_ID       | The client(application) ID of an App Registration in the tenant. |
| AZURE_CLIENT_SECRET   | A client secret that was generated for the App Registration.     |
| AZURE_SUBSCRIPTION_ID | Azure subscription ID                                            |

* That should be it. Try out the following from your command prompt to start the server:

```
komiser start --port 3000
```

* Point your browser to http://localhost:3000