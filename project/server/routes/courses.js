const express = require('express');
const mongoose = require('mongoose');
const { handleSuccess, ErrorHandler } = require('../utils');

const router = express.Router();
const Course = mongoose.model('Course');
const User = mongoose.model('User');

/* GET Fetch all courses */
router.get('/', (req, res, next) => {
  Course.find({ ...req.query }, (err, courses) => {
    if (err) {
      next(new ErrorHandler(400, 'Internal server error'));
    } else {
      handleSuccess(200, courses, res);
    }
  });
});


/* GET Fetch course by ID */
router.get('/:classid', (req, res, next) => {
  const { classid } = req.params;
  try {
    const classId = mongoose.Types.ObjectId(classid);
    Course.findById(classId, (err, course) => {
      if (err) {
        throw new ErrorHandler(400, 'Internal server error');
      } else {
        handleSuccess(200, course, res);
      }
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});


/* POST Create new course(s)
*/
router.post('/', (req, res, next) => {
  Course.insertMany(req.body).then((course) => {
    handleSuccess(200, course, res);
  }).catch((err) => {
    next(err);
  });
});

/* PUT Update course by ID */
router.put('/:classid', (req, res, next) => {
  const { classid } = req.params;
  try {
    const classId = mongoose.Types.ObjectId(classid);
    Course.findByIdAndUpdate(classId, { ...req.body }, { new: true }, (err, course) => {
      if (err) {
        next(new ErrorHandler(400, 'Internal server error'));
      } else {
        handleSuccess(201, course, res);
      }
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});

/* DELETE Delete course by ID */

router.delete('/id', (req, res, next) => {
  const { id } = req.params;
  try {
    const classId = mongoose.Types.ObjectId(id);
    Course.findByIdAndDelete(classId, (err, user) => {
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

/* GET Get all students in a class with ID */
router.get('/:classid/roster', (req, res, next) => {
  const { classid } = req.params;
  try {
    const classId = mongoose.Types.ObjectId(classid);
    Course.findById(classId, (err, course) => {
      Course.populate(course, { path: 'students teachers', select: 'first_name last_name instrument role' }, (err, students) => {
        if (err) {
          next(new ErrorHandler(400, 'Internal server error'));
        } else {
          handleSuccess(200, students, res);
        }
      });
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});

/* POST Insert users into class by ID */
router.post('/:classid/roster/', (req, res, next) => {
  const { classid } = req.params;
  const { role, users } = req.body;
  try {
    const classId = mongoose.Types.ObjectId(classid);
    users.forEach((user) => {
      User.findByIdAndUpdate(user, { $push: { classes: classId } }, (err, user) => {
        if (err) {
          next(err);
        }
      });
    });
    Course.findByIdAndUpdate(classId, { $push: { [role]: { $each: users } } }, { new: true }, (err, course) => {
      if (err) {
        next(err);
      } else if (course == null) {
        next(new ErrorHandler(404, 'Course ID not found'));
      } else {
        handleSuccess(200, course, res);
      }
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});

/*
  DELETE Delete student from class by ID
*/
router.delete('/:classid/roster', (req, res, next) => {
  const { classid } = req.params;
  const { role, users } = req.body;
  try {
    const classId = mongoose.Types.ObjectId(classid);
    Course.findByIdAndUpdate(classId, { $pull: { [role]: { $in: users } } }, { new: true }, (err, course) => {
      if (err) {
        next(err);
      } else if (course == null) {
        next(new ErrorHandler(404, 'Course ID not found'));
      } else {
        handleSuccess(200, course, res);
      }
    });
  } catch (err) {
    next(new ErrorHandler(400, 'Invalid ID'));
  }
});


module.exports = router;
