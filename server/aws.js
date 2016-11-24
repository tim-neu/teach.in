var express = require('express');
var awsRouter = express.Router();
var dotEnv = require('dotenv').load();
var Resource = require('./models/resource_model');
var Teacher = require('./models/teacher_model');
var Student = require('./models/student_model');

var fs = require('fs'),
    S3FS = require('s3fs'),
    s3fsImpl = new S3FS('teach.in123454321', {
        accessKeyId: process.env.AWSAccessKeyId,
        secretAccessKey: process.env.AWSSecretKey
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
                else if(req.body.type === "student"){
                  console.log("inside student aws")
                  console.log("email", req.body.email)
                  Student.findOne({
                    where: {
                      email: req.body.email
                    }
                  })
                  .then(function(foundInstance){
                    foundInstance.update({
                      picture_url: replaced
                    })
                  .then(function(studentUpdate){
                    console.log(studentUpdate, "<-------- teacher update");
                    res.send(studentUpdate);
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