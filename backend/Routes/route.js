var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());
var User = require('../models/User');
var Courses = require('../models/Courses');

router.get('/getUserDetails', function (req, res, next) {
    User.find({}).then(user => {
            if (user) {
                res.json(user);
            }
            else {
                res.send('User does not exist')
            }
        }).catch(err => {
            res.send('error: ' + err)
        })
});

router.get('/:id', function (req, res, next) {
    User.findById({id: req.params.id}).then(user =>{
        if (user) {
            res.json(user);
        }
        else {
            res.send('User does not exist')
        }
    }).catch(err => {
        res.send('error: ' + err)
    })
    /*User.findById({req.params.id}).then(user => {
        if (user) {
            res.json(user);
        }
        else {
            res.send('User does not exist')
        }
    }).catch(err => {
        res.send('error: ' + err)
    })*/
    /*User.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });*/
});

router.post('/register', function (req, res, next) {
    const today = new Date()
    const userData = {
        id: '1',
        firstName: 'bhavya',
        lastName: 's',
        email: 'bhavya@gmail.com',
        password: '1234',
        updated_date:today
    }
    console.log('in api ')
    User.create(userData, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/*
router.put('/:id', function(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})
router.delete('/:id', function(req, res, next){
    User.findByIdAndDelete(req.params.id, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})

router.get('/', function (req, res, next) {
    Courses.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/:id', function (req, res, next) {
    Courses.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/', function (req, res, next) {
    Courses.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next){
    Courses.findByIdAndUpdate(req.params.id, req.body, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})
router.delete('/:id', function(req, res, next){
    Courses.findByIdAndDelete(req.params.id, function (err,post){
        if (err) return next(err);
        res.json(post);
    })
})
*/

module.exports = router;
