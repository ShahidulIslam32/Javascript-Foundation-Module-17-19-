var personOne = {
    id:20,
    profile : 'shahidul islam',
    department : 'Computer',
    Session : 2022,
    team : 'programming Hero'
}
var personTwo = {
    id: 20,
    profile: 'shahidul shovon',
    department: 'Computer',
    Session: 2022,
    team: 'Python Bohubrihi'
}
var course = {
    start: 'december',
    end : 'July',
    mentor : 'Jhankar Mahbub',
    Address : 'USA',

}

course.Address = 'bangladesh';
course["Address"] = 'Dhaka';
console.log(course)

var getTheProperty = 'profile name:' + ' ' + personOne.profile + ' ' + 'and Department:' + ' ' + personOne.department;
console.log(getTheProperty)
console.log('profile name:' + ' ' + personTwo.profile + ' ' + 'and Team:' + ' ' + personTwo.team);


var newValue = 'team';
personTwo[newValue] = 'MERN Stack';
console.log(personTwo)