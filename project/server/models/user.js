const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;


// User Schema
// first_name: String, input: any
// last_name: String, input: any
// status: String, input: Active/Probation/Deactivated
// student_id: Integer, input: 10 digit, import from Excel
// instrument: String, input: choices of instrument

const UserSchema = new Schema({
  first_name: { type: String, default: '' },
  last_name: { type: String, default: '' },
  instrument: { type: String, default: '' },
  role: { type: String, default: '' },
  classes: [{ type: ObjectId, ref: 'Course' }],
});

UserSchema.method({

});


UserSchema.static({
});

mongoose.model('User', UserSchema);
