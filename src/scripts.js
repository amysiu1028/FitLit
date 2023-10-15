// const { userSample } = require('./data/sampleData');
// import { userSample } from './data/sampleData';
import './domUpdates'; 
import { users } from './data/users';
import './css/styles';


function getRandomUser(userData) {
    const currentUserIndex = Math.floor(Math.random() * userData.length);
    return currentUserIndex;
  };
function getUserData(userObj, indexPosition) {
    currentUser = userObj.find((user) => {
        return user.id === indexPosition
    });
    return currentUser;
}
console.log(getRandomUser(users));
// console.log(getUserData(userSample,1))
function getAverageStepGoal(userSample) {
    const total = userSample.reduce((accum,user) => {
        return accum += user.dailyStepGoal
    },0)
    return (total / userSample.length).toFixed(0)
}

window.addEventListener('load', function() {
    getRandomUser(users);
    console.log('page loaded')
    console.log(currentUser);
    console.log(getRandomUser(userSample))
    console.log(displayUserInfo(currentUser));
    displayUserInfo(currentUser);
    //As a user, I should be able to view an info card with all of my info on the page
    //As a user, I should be able to see my first name somewhere prominently on the page to welcome me
    //As a user, I should be able to see how my step goal compares to the average step goal amongst all users (this display should not be hard-coded)
  });
// console.log(getAverageStepGoal(userSample))
  console.log(getRandomUser(userSample)); //returns one object from sample data





5:02
//NOTE: Your DOM manipulation will occur in this file
// const { userSample } = require('./data/sampleData');
// const { getRandomUser, currentUser } = require('./scripts');
import { userSample } from './data/sampleData';
import { getRandomUser, currentUser } from './scripts';
//QuerySelectors here:
const userName = document.querySelector('#username');
const location = document.querySelector('#location');
function displayUserInfo(currentUser) {
  userName.innerHTML = `${currentUser.name}`
  location.innerText = `${currentUser.location}`
}
export {
  displayUserInfo
}