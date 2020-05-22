const express = require('express');
const mongoose = require('mongoose');
const { handleSuccess, ErrorHandler } = require('../utils');

const router = express.Router();
const User = mongoose.model('User');

/* GET Fetch all users */
router.get('/', (req, res, next) => {
  User.find({ ...req.query }, (err, users) => {
    if (err) {
      next(new ErrorHandler(400, 'Internal server error'));
    } else {
      handleSuccess(200, users, res);
    }
  });
});


/* GET Fetch user by ID */
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    const userId = mongoose.Types.ObjectId(id);
    User.findById(userId, (err, user) => {
      if (err) {
        next(new ErrorHandler(400, 'Internal server error'));
      } else {
        handleSuccess(200, user, res);
      }
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});


/*
POST Create new user(s)
*/
router.post('/', (req, res, next) => {
  User.insertMany(req.body).then((user) => {
    handleSuccess(200, user, res);
  }).catch((err) => {
    next(err);
  });
});

/* PUT Update user by ID */
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    const userId = mongoose.Types.ObjectId(id);
    User.findByIdAndUpdate(userId, { ...req.body }, { new: true }, (err, user) => {
      if (err) {
        next(new ErrorHandler(400, 'Internal server error'));
      } else {
        handleSuccess(201, user, res);
      }
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});

/*
  DELETE Delete user by ID
*/
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    const userId = mongoose.Types.ObjectId(id);
    User.findByIdAndDelete(userId, (err, user) => {
      if (err) {
        next(new ErrorHandler(400, 'Internal server error'));
      } else {
        handleSuccess(200, user);
      }
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});

/*
  GET All courses relevant to user
*/
router.get('/:id/courses', (req, res, next) => {
  const { id } = req.params;
  try {
    const userId = mongoose.Types.ObjectId(id);
    User.findById(userId, (err, user) => {
      User.populate(user, { path: 'classes', select: 'name' }, (error, course) => {
        if (error) {
          next(new ErrorHandler(400, 'Internal server error'));
        } else {
          handleSuccess(200, course, res);
        }
      });
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});


module.exports = router;
