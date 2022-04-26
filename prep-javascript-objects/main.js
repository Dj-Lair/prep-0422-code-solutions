const person = {
  firstname: 'DJ',
  lastname: 'Lair',
  hobby: 'Music',
  job: 'recieving',
  previousjob: 'pizza boy'
};

var firstname = person.firstname;
console.log('firstname', firstname);
var lastname = person.lastname;
console.log('lastname', lastname);
var hobby = person.hobby;
console.log('hobby', hobby);
var fullname = person.firstname + lastname;
console.log('The persons full name is', fullname);
var job = person.job;
console.log('the persons current job is', job);
var previousjob = person.previousjob;
console.log('the persons previous job was', previousjob);
var completeperson = person;
console.log('the complete person is', completeperson);
