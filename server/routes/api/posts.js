const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Link to mongoose model
var Posts = require("../../models/posts.js");

// API 

// GET
router.get('/', async (req, res) => {
    await Posts.find(function(err, Posts) {
        if(err) {
            res.send(err);
        }
        res.json(Posts);
    });
});

// GET by ID
router.get('/:id', async (req, res) => {

  var getId = req.params.id;
  var result = "No result. Request by MongoDB ID.";

  // Search by ID
  await Posts.findOne({
    _id: getId
  }, function(err, Posts) {
    if(err) {
      res.send(err);
    } 

    if (Posts==null){
      Posts=result;
      res.send(Posts);
    }

    // If not error or null, return post
    else {
    res.json(Posts);
    }
  });
});



//Add post
router.post("/", async (req, res) => {
    // New instance of posts schema
    var post = new Posts();
  
    // Create new object
    post.text = req.body.text;
    post.createdAt = new Date();
  
    // Save post to database
    await post.save(function(err) {
        if(err) {
            // post codes are set to be unique inside the database
            res.send(err.errmsg);
        }
        else {
        res.status(201).send();
        }
    });
  });


// DELETE BY ID
router.delete('/:id', async (req, res) => {
    await Posts.deleteOne({
        _id: req.params.id
    })
    res.status(200).send();
});

// DELETE ALL
router.delete('/', async (req, res) => {
  await Posts.deleteMany({})
  res.status(200).send();
});


// UPDATE
router.patch('/:id', async (req, res) => {
    await Posts.findOneAndUpdate(
        {  _id: req.params.id }, 
        { $set:  
            req.body
          })
    res.status(200).send();
});


// Connect to database
//  mongoose.connect('mongodb://localhost:27017/nipa1902_project', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

mongoose.connect('mongodb+srv://dbUser:dbPassword@cluster0-0cgsv.mongodb.net/postDb?retryWrites=true&w=majority', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });




module.exports = router;
