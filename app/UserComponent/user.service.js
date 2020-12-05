const User = require("../../models/user.model");

exports.getAllUser = function (req, result) {
  User.find(function (error, resultOfQuery) {
    if (error) {
      console.log(error);
      result(error, null);
    } else {
      result(null, resultOfQuery);
    }
  });
};

exports.getUserById = function (req, result) {
  let userInfoId = req.params.userInfoId;
  User.findById(userInfoId, function (error, resultOfQuery) {
    if (error) {
      result(error, null);
    } else {
      result(null, resultOfQuery);
    }
  });
};

exports.addUser = function (req, result) {
  User.create(req.body, function (error, records) {
    if (error) {
      result(error, null);
    } else {
      let resultAddUser = { message: "UserInfo Inserted Successfully" };
      result(null, resultAddUser);
    }
  });
};

exports.updateUser = function (req, result) {
  let userInfoId = req.body.userInfoId;
  delete req.body.userInfoId;
  User.findByIdAndUpdate(userInfoId, req.body, function (error, records) {
    if (error) {
      console.log(error);
      result(error, null);
    } else {
      let resultUpdateUser = { message: "UserInfo Updated Successfully" };
      result(null, resultUpdateUser);
    }
  });
};

exports.deleteUserById = function (req, result) {
  let userInfoId = req.params.userInfoId;

  User.remove( {_id : userInfoId }, function (error, records) {
    if (error) {
        result(error, null);
    } else {
        let resultDeleteUserById = { message: 'UserInfo Deleted Successfully' };
        result(null, resultDeleteUserById);
    }
});
};
