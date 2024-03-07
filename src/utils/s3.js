import AWS from 'aws-sdk';

AWS.config.update({
    apiVersion: "2006-03-01",
    accessKeyId: 'AKIAX3JEHBTFNT4QHK6Q',
    secretAccessKey: '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',
    region: 'us-east-1',
})

const s3 = new AWS.S3();


export default s3;

