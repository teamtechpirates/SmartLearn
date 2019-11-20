var mongoose = require('mongoose');
var SyllabusSchema = new mongoose.Schema({
    Syllabus :[],
    userId: String,

});

const Syllabus = mongoose.model('SyllabusCollection',SyllabusSchema);

module.exports = Syllabus ;
