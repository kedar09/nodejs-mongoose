var express = require('express');
var router = express.Router();
var userValidator = require('../app/UserComponent/user.validator');

// get all user
router.get('/getAllUser', userValidator.getAllUser);

// get user by id - (params: [userInfoId]) - (userInfoId is required)
router.get('/getUserById/:userInfoId', userValidator.getUserById);

// add new user - (body: [name,address,dateOfBirth,mobileNumber]) - (name,address is required)
router.post('/addUser', userValidator.addUser);

// update user - (body: [userInfoId,name,address,dateOfBirth,mobileNumber]) - (userInfoId is required)
router.put('/updateUser', userValidator.updateUser);

// delete user by id - (params: [userInfoId]) - (userInfoId is required)
router.delete('/deleteUserById/:userInfoId', userValidator.deleteUserById);

module.exports = router;
