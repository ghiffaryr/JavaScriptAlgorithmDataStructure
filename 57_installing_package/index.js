// npm version
// npm install -g nodemon <- for auto restart application when file changes detected
// npm install -g mocha <- asynchronous testing framework
// npm init
// npm install lodash <- array, object, string utility
// npm install jest --save-dev <- for testing framework for development
// ^ (caret) versioning is the version and up
// ~ (tilde) versioning is for the similar or equal only, minor patch
// import variableName from 'package-name';
// npm run start
// npm uninstall lodash <- to uninstall lodash package
// npm uninstall jest --save-dev  <- to uninstall jest dev package
// npm uninstall -h <- for uninstallation support

// typical array summation example 
// const myArray = [1, 2, 3, 4];
// let sum = 0;
 
// for(let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }
 
// console.log(sum);
 
/* output
10
*/

// reduce array summation method
 
// const myArray = [1, 2, 3, 4];
// let sum = myArray.reduce((prev, curr) => {
//     return prev + curr;
// });
 
// console.log(sum);
 
/* output
10
*/

import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);
 
/* output
10
*/


