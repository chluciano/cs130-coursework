const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;


const CourseSchema = new Schema({
  name: { type: String, default: '' },
  type: { type: String, default: '' },
  teachers: [{ type: ObjectId, ref: 'User' }],
  students: [{ type: ObjectId, ref: 'User' }],
});

CourseSchema.method({

});


CourseSchema.static({
});

mongoose.model('Course', CourseSchema);
