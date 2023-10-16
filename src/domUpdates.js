const { userSample } = ("./data/sampleData");
const { getRandomUser, getUserData, getAverageStepGoal } = ("./data-model.js");

const userName = document.querySelector("#username");
const location = document.querySelector("#location");
const hello = document.querySelector("#progressRightSide");
const welcomeBack = document.querySelector("#welcomeBack");
const steps = document.querySelector("#totalSteps");
const usersAvgSteps = document.querySelector("#averageUsersSteps");

export function displayUserInfo(currentUser, averageSteps) {
  userName.innerText = `${currentUser.name}`;
  location.innerText = `${currentUser.address}`;
  welcomeBack.innerText = `Welcome Back, ${currentUser.firstName}!`;
  steps.innerText = `Step Goal: ${currentUser.dailyStepGoal}`;
  usersAvgSteps.innerText = `The average users step goal: ${averageSteps}`;
}
