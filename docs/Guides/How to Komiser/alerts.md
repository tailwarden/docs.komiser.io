---
slug: /guides/how-to-komiser/alerts
title: Alerts 🔔
sidebar_label: Alerts
---

Komiser supports webhooks at the views level to incentivize developers on cost and cloud usage and bring accountability to cloud spending. Users can set up personalized notifications to proactively monitor their multi-cloud resources, ensuring timely awareness of important events and potential issues. These alerts can be configured based on various criteria such as custom views, resource costs, and resource usage.

Developers can create custom views and set up alerts to monitor resource costs and usage without spending all day monitoring the views. With Komiser, users can set up alerts via [Slack](#slack-integration) or provide [Custom Webhooks](#custom-webhook-integration) to trigger certain actions such as 
- Creating a ticket on Jira/Linear to be tackled by the infrastructure team.
- Triggering an alert on an incident & response platform like PagerDuty.
- Running a custom script to resize the infrastructure.

Note: The above actions are just a few examples of the endless possibilities that can be set by the user on the webhook receiving end. Komiser sends the required data in a [pre-defined format](#request-details). Alerts are triggered every hour in Komiser.

### Steps to add an Alert
1. Head over to the view you want to set an alert for.
2. Click on `Alerts` on the top right of the screen.
3. Click on `Add an Alert`.
4. Choose the alert method: Slack/Custom Webhook. If you want to add Slack and it is disabled, refer to the [Slack Integration section](#slack-integration) below.
5. Fill in the details accordingly.
6. Save the alert.
7. Congratulations! You should now see the alert when you click on the alerts tab again.

## Slack integration
To integrate Komiser with Slack you will have to generate a webhook and add it to the `config.toml` file.
Find the steps to generate the slack webhook in the official slack documentation [here](https://api.slack.com/messaging/webhooks).

### Steps to integrate Komiser with Slack: 
1. Create a Slack app (if you don't have one already).
2. Enable Incoming Webhooks.
3. Create an Incoming Webhook.
4. Pick a channel that the app will post to, and then click to `Authorize your app`.
5. You'll be sent back to your app settings, and you should now see a new entry under the Webhook URLs for Your Workspace section, with a Webhook URL that'll look something like this:
```
https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```
6. Then simply add the `[slack]` block to your `config.toml` file:
```
[slack]
webhook="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
```

## Custom Webhook integration
To integrate a custom webhook, you need a URL that listens to the data posted to it when it is triggered. You don't need to edit the `config.toml` file for this integration.

### Request Details
- Komiser makes a **POST** request to the endpoint.
- The data is sent in the following format in the request body:
    ```json
    {
        "komiser": "<komiser-version>", // [string]
        "view": "<view-name>", // [string]
        "message": "Usage/Cost alert", // [string]
        "data": 32, // [float64] the threshold set for the alert
        "timestamp": 1685793973 // [int64] number of seconds since January 1, 1970 UTC
    }
    ```
- You can add an optional **Secret** field. It is a secret value that is added as a request header: `authorization: <secret>`.
- It is recommended to **test the endpoint** before submitting the alert and verify the data you receive is the same as:
    ```json
    {
        "komiser": "komiser version that will send the webhook",
        "view": "testing the connection",
        "message": "test alert",
        "data": 0,
        "timestamp": 1685794020 // number of seconds since January 1, 1970 UTC when you test the endpoint hence will be different for you
    }
    ```
