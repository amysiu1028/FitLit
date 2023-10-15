//NOTE: Your DOM manipulation will occur in this file
const { userSample } = require('./data/sampleData');
const { getRandomUser } = require('./scripts');

export const userName = document.querySelector('#username');
export const location = document.querySelector('#location');

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
// const exampleFunction1 = (person) => {
//   console.log(`oh hi there ${person}`)
// }

// const exampleFunction2 = (person) => {
//   console.log(`bye now ${person}`)
// }


// export {
//   exampleFunction1,
//   exampleFunction2,
// }

// window.addEventListener('load', function() {
//   getRandomUser(userSample);
//   displayUserInfo(currentUser);
//   //As a user, I should be able to view an info card with all of my info on the page
//   //As a user, I should be able to see my first name somewhere prominently on the page to welcome me
//   //As a user, I should be able to see how my step goal compares to the average step goal amongst all users (this display should not be hard-coded)
// });

export function displayUserInfo(currentUser) {
  userName.innerText = `${currentUser.name}`
  location.innerText = `${currentUser.location}`
}

