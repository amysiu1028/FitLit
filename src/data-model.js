//Functions Here:

export function getRandomUser(userData) {
  if (userData.length === 0) {
    return undefined;
  }

  const currentUserIndex = Math.floor(Math.random() * userData.length);
  return currentUserIndex;
}
  
  export function getUserData(userObj, indexPosition) {
      let currentUser = userObj.find((user) => {
          return user.id === (indexPosition + 1);
      });
      const first = currentUser.name.split(' ');
      currentUser.firstName = first[0];
      return currentUser;
    };
  
  export function getAverageStepGoal(userSample) {
      const total = userSample.reduce((acc,user) => {
          return acc += user.dailyStepGoal;
      }, 0)
      let average = (total / userSample.length).toFixed(0);
      console.log(average)
      return average; 
  };
  
