# AWS CloudWatch

#### Hey there Wardens!🚀 

In this installment we will be saving on: `AWS CloudWatch` 📊!

How ironcic is it that a service designed to help us keep tabs on what is going on in our account
can, if mismanged, become a **leading driver** of our monthly `AWS bill`. Unfortunately we need to keep 
a close eye on [AWS CloudWatch](https://aws.amazon.com/cloudwatch/pricing/), especially once we break out of the **Free tier**. Hopefully the tips 
and video below might help you keep more of your money where it should be, in `your` pocket. 

### TL:DR
- Once you are out of the `Free Tier` the **billing details section** is your best friend 🗒️
- Only index logs from services that **incur costs** and are **adjustable** 📈
- Make sure you don't have **redundant** Cloudwatch Alerts 📟
- Do you really need the retention period to be **Expire never**? ⛔
- Be careful with the number of **custom metrics** that are sent to Cloudwatch (it adds up quickly)

#### I breakdown the articles in the video below: 📹
<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/rNZCR5OMZ0s'
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

#### Extra info on the topics around custom metrics: [right here ➕](https://aws.amazon.com/about-aws/whats-new/2022/08/amazon-cloudwatch-metrics-increases-throughput/?ck_subscriber_id=1717207518)
