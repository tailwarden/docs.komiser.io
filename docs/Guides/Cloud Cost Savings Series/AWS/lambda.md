# AWS Lambda 

#### Hey there Wardens!🚀 

In this installment we will be saving on: `Lambda functions`⚡

We will be looking at two articles 📖 that walk us through making Lambda a more cost-efficient enterprise.

#### [Article #1](https://theburningmonk.com/2022/07/the-best-ways-to-save-money-on-lambda/): The Breakdown of Lambda costs by [Yan Cui](https://theburningmonk.com/)
`TL:DR`
- Avoid premature optimization ❌
- The trick is in identifying that ⚠️ critical 3% of cases where we should optimize our Lambda function.
- You should always optimize the memory setting for functions that use provisioned concurrency.
- Use the aws-lambda-power-tuning tool https://github.com/alexcasalboni/aws-lambda-power-tuning

#### [Article #2](https://blog.labouardy.com/how-we-reduced-lambda-functions-costs-by-thousands-of-dollars/): The use-case by OG Warden [Mohamed Labouardy](https://blog.labouardy.com/)

`TL:DR`
- Over 90% cost reduction
- Monitoring is your best friend 📊