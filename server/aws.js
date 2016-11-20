var express = require('express');
var awsRouter = express.Router();
var dotEnv = require('dotenv').load();
var Resource = require('./models/resource_model');
var Teacher = require('./models/teacher_model');

var fs = require('fs'),
    S3FS = require('s3fs'),
    s3fsImpl = new S3FS('teach.in123454321', {
        accessKeyId: dotEnv.process.AWSAccessKeyId,
        secretAccessKey: dotEnv.process.AWSSecretKey
    });
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

// Create our bucket if it doesn't exist
s3fsImpl.create();



  awsRouter.use(multipartyMiddleware);

  awsRouter.post('/s3', function (req, res) {
      var file = req.files.file;
      var stream = fs.createReadStream(file.path);
      return s3fsImpl.writeFile(file.originalFilename, stream).then(function (response) {
          var replaced =  "https://s3.amazonaws.com/teach.in123454321/" + file.originalFilename.replace(/\s/g, '+');
          fs.unlink(file.path, function (err) {
              if (err) {
                  console.error(err);
                  res.send(err);
              }
              else {
                if(req.body.type === "teacher"){
                  Teacher.findOne({
                    where: {
                      email: req.body.email
                    }
                  })
                  .then(function(foundInstance){
                    foundInstance.update({
                      picture: replaced
                    })
                  .then(function(teacherUpdate){
                    console.log(teacherUpdate, "<-------- teacher update");
                    res.send(teacherUpdate);
                  });
                  });
                }
                else {
                  var newResource = Resource.build({
                  name: file.originalFilename,
                  url: replaced,
                  classId: req.body.classId
                });
                newResource.save().then(function(){
                  res.send("saved to db");
                });
                }
              }
          });
        })
          
      });

  module.exports = awsRouter;







// var multer = require('multer'), //for handling multipart/form-data
// fs = require('fs'),
// S3FS = require('s3fs'), //abstraction over Amazon S3's SDK
// s3fsImpl = new S3FS('teach.in', {
//        accessKeyId: process.env.AWSAccessKeyId,
//        secretAccessKey: process.env.AWSSecretKey
//     });
// console.log(process.env.AWSAccessKeyId)

// // POST a new Path 
// awsRouter.route('/').all(multer).post(function(req, res) {
//   var file = req.files.file;
//   console.log(file);

//  Output:
// { 
//   fieldname: 'file',
//   originalname: 'ice-boxes.jpg',
//   name: '2658a8f666e33ab1ec39dc8b7b20970b.jpg',
//   encoding: '7bit',
//   mimetype: 'image/jpeg',
//   path: 'public/uploads/2658a8f666e33ab1ec39dc8b7b20970b.jpg',
//   extension: 'jpg',
//   size: 88076,
//   truncated: false,
//   buffer: null 
//  }


//   //Create a file stream
//    var stream = fs.createReadStream(file.path); 

//    //writeFile calls putObject behind the scenes
//    s3fsImpl.writeFile(file.name, stream).then(function () { 
//         fs.unlink(file.path, function (err) {
//             if (err) {
//                 console.error(err);
//             }
//         });
//         res.status(200).end();
//     });

// });


// module.exports = awsRouter;