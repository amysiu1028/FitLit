// //Average fluid ounces consumed per day

// const getDailyOunces = (userId, date, dataSet) => {
//     const userHydrationData = dataSet.hydrationData.filter(userObj => userObj.userID === userId);
//     const userHydrationDataByDate = userHydrationData.find(userObj => userObj.date === date);
//     return userHydrationDataByDate.numOunces;
//     }
    







// //Average daily fluid ounces consumed for all time

// const getAvgDailyOunces = (id, dataList) => {
//     // Filter the user's hydration data for the given id
//     const userHydrationData = dataList.hydrationData.filter(userObj => userObj.userID === id);
  
//     // Calculate the sum of daily ounces
//     const totalOunces = userHydrationData.reduce((accum, userObj) => {
//       return accum + userObj.numOunces;
//     }, 0);
  
//     // Calculate the average and round to the nearest integer
//     const average = Math.round(totalOunces / userHydrationData.length);
  
//     return average;
//   };