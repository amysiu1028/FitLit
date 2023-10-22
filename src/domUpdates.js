const userName = document.querySelector('#username');
const location = document.querySelector('.location');
const welcomeBack = document.querySelector('#welcomeBack');
const steps = document.querySelector('#totalSteps');
let usersAvgSteps = document.querySelector('#averageUsersSteps');
let waterConsumedToday = document.querySelector('#waterConsumedToday');
let waterConsumedPerWeek = document.querySelector('#waterEachDayOfWeek');
const averageSleepOverall = document.querySelector('#averageSleepOverall');
const sleepSpecificDay = document.querySelector('#sleepSpecificDay');
const sleepPerWeek = document.querySelector('#sleepPerDayPerWeek');
const stepsMadePerDay = document.querySelector('#stepsMadePerDay');
const minutesActivePerDay = document.querySelector('#minutesActivePerDay');
const milesWalkedPerDay = document.querySelector('#milesWalkedPerDay');
const weekStepCount = document.querySelector('#weekStepCount');

export function displayUserInfo(currentUser, averageSteps, waterPerDayPerWeek, averageSleep, aveSleepQuality, sleepPerDayPerWeek, todaysHydrationDate, sleepToday, milesPerDay, minutesPerDay, stepGoal, activityPerDayPerWeek, activityToday) {
  //random current User info:
  userName.innerText = `${currentUser.name}`;
  location.innerText = `${currentUser.address}`;
  welcomeBack.innerText = `Welcome Back, ${currentUser.firstName}!`;

  //steps info:
  steps.innerText = `Step Goal: ${stepGoal}`;
  usersAvgSteps.innerText = `The average users step goal: ${averageSteps}`;

  //water info:
  waterConsumedToday.innerText = `Water Consumed Today (${todaysHydrationDate.date}): ${todaysHydrationDate.numOunces}oz`
  waterPerDayPerWeek.forEach((data) => {
    waterConsumedPerWeek.innerHTML += `<p> Water Consumed on ${data.date} : ${data.numOunces}oz`
  });
  
  //sleep info:
  //should be able to see my all-time average sleep quality and all-time average number of hours slept:
  averageSleepOverall.innerText = `Average Overall Sleep: ${averageSleep} and Average Sleep Quality: ${aveSleepQuality}`;

  // As a user, I should be able to see my sleep data over the course of the latest week (hours slept and quality of sleep)
  sleepPerDayPerWeek.forEach((data) => {
    console.log("Data", data)
    sleepPerWeek.innerHTML += `<p> On ${data.date}, user slept for ${data.hoursSlept} hours with sleep quality of ${data.sleepQuality}`;
  });
  sleepSpecificDay.innerHTML += `<p> Today (${sleepToday.date}), user slept for ${sleepToday.hoursSlept} hours with sleep quality of ${sleepToday.sleepQuality}`;


  //activity info:
  //As a user, I should be able to see my number of steps I’ve made for the latest day:
  stepsMadePerDay.innerText = `On ${activityToday.date}, total user's steps is: ${activityToday.numSteps}`;

  //As a user, I should be able to view the number minutes I’ve been active for the latest day
  minutesActivePerDay.innerText = `On ${activityToday.date}, total active minutes: ${minutesPerDay}`;

// As a user, I should also see the distance I have walked (in miles) for the latest day based on my step count
  milesWalkedPerDay.innerText = `On ${activityToday.date}, user has walked ${milesPerDay}`


// As a user, I should be able to view a weekly view of my step count and if I have reached my step count goal for each day
  activityPerDayPerWeek.forEach((data) => {
    weekStepCount.innerHTML += `<p> On ${data.date}, user's step count is ${data.numSteps}`;
});
};

