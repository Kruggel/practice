console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('Michael'));

var filteredArray = _.uniq(['Michael', 1, 'Michael', 1, 2, 3, 4])
console.log(filteredArray);

// var res = notes.addNote();
// console.log('Result', notes.add(9, -2));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! you are ${notes.age}.`);
