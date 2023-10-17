import { getRandomUser, getUserData, filterUserData } from './data-model';
//idk why getAverageStep is already declared if I add this onto this area.

import { displayUserInfo } from './domUpdates.js';
import { getAvgDailyOunces, getOuncesPerDay, getOuncesPerWeek } from './hydrationFunctions.js'
import   sampleData   from './data/sampleData';
import hydration from './data/hydration.js';

import './styles.css';

//QuerySelectors Here:
const userName = document.querySelector('#username');
const location = document.querySelector('#location');
const hello = document.querySelector('#progressRightSide');

//Variables Here:
let allHydrationData = hydration.hydrationData
let userData = sampleData.sampleUsers;
let welcome;

//Event Listeners Here:
window.addEventListener("load", function () {
  let randomIndex = getRandomUser(userData);
  let currentUser = getUserData(userData, randomIndex);
  // console.log(filterUserData(allHydrationData, currentUser))
  const averageSteps = getAverageStepGoal(userData);
  // displayUserInfo(currentUser, averageSteps);
  // getAverageStepGoal(userData);
  let waterPerSpecificDay = getOuncesPerDay(currentUser,allHydrationData,'2023/03/24')
  let hydrationFilteredData = filterUserData(allHydrationData, currentUser)
  let waterPerDayPerWeek = getOuncesPerWeek(hydrationFilteredData,'2023/03/24');
  console.log(waterPerDayPerWeek,"waterPerDayPerWeek")
  displayUserInfo(currentUser,averageSteps,waterPerSpecificDay,waterPerDayPerWeek);
});


function getAverageStepGoal(userSample) {
    const total = userSample.reduce((accum,user) => {
        return accum += user.dailyStepGoal;
    }, 0)
    let average = (total / userSample.length).toFixed(0);
    console.log(average)
    return average; 
};

 
