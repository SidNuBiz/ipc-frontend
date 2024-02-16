import AWS from 'aws-sdk';

AWS.config.update({
    apiVersion: "2006-03-01",
    
    region: 'us-east-1',
})

const s3 = new AWS.S3();


export default s3;

