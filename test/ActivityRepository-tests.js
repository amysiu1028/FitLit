import { expect } from "chai";

import {
  getUserData,
  getMilesPerDay,
  getMinutesPerDay,
  getStepGoal,
} from "../src/data-model.js";

import userSample from "../src/data/sampleData";

describe("ActivityTest", () => {
  let currentUser;
  let currentActivityData;

  beforeEach(() => {
    currentUser = {
      id: 1,
      strideLength: 2.5,
      dailyStepGoal: 10000,
    };
    currentActivityData = [
      {
        userID: 1,
        date: "2022/01/01",
        steps: 10000,
      },
      {
        userID: 1,
        date: "2022/01/02",
        steps: 5000,
      },
    ];
  });

  it("should return miles per day for a given date", () => {
    const dateToTest = "2022/01/01";
    const expectedMiles = "5";
    const result = getMilesPerDay(currentUser, currentActivityData, dateToTest);

    expect(result).to.equal(expectedMiles);
  });

  it("should return 0 miles for a date with no activity data", () => {
    const dateToTest = "2022/01/03";
    const result = getMilesPerDay(currentUser, currentActivityData, dateToTest);

    expect(result).to.equal("0");
  });
});

  it("should return active minutes for a given day", () => {
    const dateToTest = "2023/03/24";
    const expectedMinutes = 261;
    const result = getMinutesPerDay(userSample.activity, { date: dateToTest });

    expect(result).to.equal(expectedMinutes);
  });

  it("should handle missing date in getMinutesPerDay", () => {
    const currentActivityData = [
      {
        userID: 1,
        date: "2022/01/01",
        minutesActive: 120,
      },
      {
        userID: 1,
        date: "2022/01/02",
        minutesActive: 90,
      }
    ];
    const dateToTest = "2022/01/03";
    const result = getMinutesPerDay(currentActivityData, { date: dateToTest });

    expect(result).to.equal(0);
  });

describe("getStepGoal", () => {
  let currentUser;

  beforeEach(() => {
    currentUser = {
      id: 1,
      strideLength: 4.0,
      dailyStepGoal: 10000,
    };
  });

  it("should return steps left to reach the goal for a given day", () => {
    const dateToTest = "2023/03/24";
    const expectedStepsLeft = 2638;
    const result = getStepGoal(currentUser, userSample.activity, { date: dateToTest });
    
    expect(result.stepsLeft).to.equal(expectedStepsLeft);
  });
});
