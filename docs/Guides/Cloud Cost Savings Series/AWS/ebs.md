# Amazon EBS

#### Hey there Oraculists!🚀 

In this installment we will be saving on: `Elastic Block Store (EBS)` !

Get rid of that low hanging fruit! Make sure your EBS volumes are in-use or else, give them the cut ✂️
Head over to the `Komiser` dashboard in the `Storage` section. Be sure you know if you have any unattached 
EBS volumes so you can make and informed decision and what to do about it.


### How to delete unattached volumes:
#### AWS CLI:  
```
aws ec2 delete-volume --region $REGION --volume-id $VOLUME_NAME
```
#### Through the console: 
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-volume.html

### Automate EBS snapshot creation with AWS Data Lifecycle Manager:
https://aws.amazon.com/blogs/storage/automating-amazon-ebs-snapshots-management-using-data-lifecycle-manager/

#### I breakdown the articles in the video below: 📹
<div style={{
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop:'30px',
    height:0,
    overflow:'hidden',
  }}>
  <iframe
    src='https://www.youtube.com/embed/3qFk_zfihCM'
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