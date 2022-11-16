# Amazon API Gateway

#### Hey there Wardens!🚀 

In this installment we will be saving on: `Amazon API Gateway` 🌉!

We found two great articles from [StormIT](https://www.stormit.cloud/) and [GameAnalytics](https://gameanalytics.com/), the former giving us great API Gateway (API GW) cost savings tips and the latter a very educational use-case on how to reduce Data Transfer out (DTO) costs.


**Tips article:** ℹ️ https://www.stormit.cloud/blog/amazon-api-gateway-pricing/ 

**Use case article:** 📚 https://gameanalytics.com/engineering/reduce-costs-https-api-aws/

### TL:DR

- Unless you have an **excellent reason** for using the REST API, always try to use **HTTP API**.
- Leverage the **API GW integration** feature that many services natively have (Kinesis, DynamoDB...)
- Use **Cognito** for auth if you can.
- As you scale, consider swapping API GW for an **ALB** (it can trigger Lambda functions)
- Reduce **Data transfer out** at all costs, be it with AWS CloudFront or by reducing the payload of your HTTP packets.

#### I breakdown the articles in the video below: 📹
<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/yK2AIHe-NSg'
    allowFullScreen
    webkitallowfullscreen="true"
    frameBorder="0"
    style={{
      position: 'absolute',
      top:0,
      left:0,
      width:'100%',
      height:'100%',
    }}
  >
  </iframe>
</div>