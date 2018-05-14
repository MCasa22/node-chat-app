const moment = require('moment');

let someTimeStamp = moment().valueOf();
console.log('SOMETIMESTAMP', someTimeStamp);

let createdAt = 1234;
let date = moment(createdAt);
//date.add(100, 'year').subtract(9, 'months');
console.log('DATE', date.format('h:mm a'));
