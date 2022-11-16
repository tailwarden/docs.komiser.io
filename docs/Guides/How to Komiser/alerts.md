---
slug: /docs/how-to-komiser/alerts
title: community
sidebar_label: Alerts
---
# Daily Budget Alert

Head over to [Your Apps](https://api.slack.com/slack-apps-preview) and click the green “**Create New App**” button. A dialog like this will pop up:

![Tailwarden](../../../static/img/slack-app-1.png)

## Generate OAuth Token:

![Tailwarden](../../../static/img/slack-token-2.png)

## Add permissions:
Add the below permissions scopes and reinstall the app in the target workspace:

![Tailwarden](../../../static/img/slack-scope-3.png)

On [Komiser EE Dashboard](https://cloud.komiser.io), navigate to "**Dashboard**" section:


![Tailwarden](../../../static/img/komiser-btn-4.png)

## Create alert:
Click on "**Create Alert**" button:

![Tailwarden](../../../static/img/komiser-popup-5.png)

Fill out the form and click on create:

![Tailwarden](../../../static/img/komiser-config-6.png)

That's it, you will receive everyday (9am GMT) a slack notification with the current monthly cost of each cloud account configured on your Komiser EE account:

![Tailwarden](../../../static/img/slack-7.png)