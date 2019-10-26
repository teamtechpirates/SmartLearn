var mongoose = require('mongoose');

var CoursesSchema = new mongoose.Schema({
    id: String,
    email: String,
    courseList: [],
    updated_date: {type: Date, default: Date.now},
});
const Course = mongoose.model('CourseCollection',CoursesSchema);
module.exports = Course ;
