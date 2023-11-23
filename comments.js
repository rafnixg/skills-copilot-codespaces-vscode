// Create web server

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Comment = require('../models/Comments.js');

/* GET /comments listing. */
router.get('/', function(req, res, next) {
  Comment.find(function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

/* POST /comments */
router.post('/', function(req, res, next) {
  Comment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /comments/id */
router.get('/:id', function(req, res, next) {
  Comment.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /comments/:id */
router.put('/:id', function(req, res, next) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /comments/:id */
router.delete('/:id', function(req, res, next) {
  Comment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /comments/author/:author */
router.get('/author/:author', function(req, res, next) {
  Comment.find({author: req.params.author}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /comments/author/:author */
router.get('/author/:author', function(req, res, next) {
  Comment.find({author: req.params.author}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /comments/author/:author */
router.get('/post/:post', function(req, res, next) {
  Comment.find({post: req.params.post}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;