const mongoose = require('mongoose')


const form1Schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    profession: String,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    profileid:String,
    profile:String
});
const form2Schema = new mongoose.Schema({
        institutename: String,
        course: String,
        country: String,
        institutestate: String,
        institutestart: Date,
        institutefinish: Date,
        profileid:String

});
const form3Schema = new mongoose.Schema({
    employer: String,
    company: String,
    employeraddress: String,
    role: String,
    experiencestart: Date,
    experiencefinish: Date,
    experiencenote: String,
    profileid:String


});
const form4Schema = new mongoose.Schema({
        emailaddress: String,
        phone:Number,
        linkedin: String,
        twitter: String,
        intro: String,
        github: String,
        profileid:String,
        skills:String,
        languages:String
     
});
const form5Schema = new mongoose.Schema({
    organization: String,
    awardtitle: String,
    awarddate: String,
    awardnote:String,
    profileid:String

});

const Form1Data = mongoose.model("Form1", form1Schema);
const Form2Data = mongoose.model("Form2", form2Schema);
const Form3Data = mongoose.model("Form3", form3Schema);
const Form4Data = mongoose.model("Form4", form4Schema);
const Form5Data = mongoose.model("Form5", form5Schema);


module.exports = {Form1Data,Form2Data,Form3Data,Form4Data,Form5Data};