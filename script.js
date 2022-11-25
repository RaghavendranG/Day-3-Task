//Task 1 For Loops.
var person = [{
  "Name" : "Raghavendran",
  "Age" : "24",
  "Gender" : "Male"
},
{
  "Name" : "Raghavi",
  "Age" : "24",
  "Gender" : "Female"
}]
// for loop
for(let i =0; i < person.length; i++){
console.log("for loop");
console.log(person[i]);  
}
// for-in loop
for(let i in person){
  console.log("for-in loop");
  console.log(person[i]);
}
//for-of loop
for(let j of person){
  console.log("for-of loop");
  console.log(j);
}
//for-each loop
Object.keys(person).forEach(key => {
  console.log("for-each loop");
  console.log(key, person[key]);
});
//------------------------------------------------------------------------------------------------//
//Task 2 Resume Task.
var resume = {
  "Full_Name" : "Raghavendran G",
  "Age" : "24",
  "Gender" : "Male",
  "Contact" : "+91 XXXXXXXXXX",
  "Country" : "India",
  "State" : "Tamil Nadu",
  "City" : "Chennai",
  "Zip_Code" : "12345",
  "Education" : [
    {"SSLC" :{
      "School_Name" : "GKSHV",
      "Qualification" : "SSLC",
      "Percentage" : "90%",
  }},
  {"HSC" : {
  "School_Name" : "GKSHV",
  "Qualification" : "HSC",
  "Percentage" : "90%",
  }},
  {"Undergraduate" : {
    "Collehe_Name" : "RIT",
    "Degree" : "B.tech",  
    "Major" : "Information Technology",
    "CGPA" : "7.5"
  }}],
  "Experience_1" : "Comapny ABC",
  "Experience_2" : "Company DEF",
  "Technical_Skills" : ["HTML","CSS","JavaScript","Node","MongoDB"],
  "Soft_Skills" : ["Decision Making","Leadership","Communication","Problem Solving"]
}

console.log(resume);
//---------------------------------------------------------------------------------------------//