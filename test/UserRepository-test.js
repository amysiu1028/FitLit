import { expect } from "chai";

import { getRandomUser, getUserData, getAverageStepGoal } from "../src/data-model.js";

import userSample from "../src/data/sampleData";

describe("getRandomUser", () => {
  let users = userSample.sampleUsers;

  beforeEach(() => {
    users = userSample.sampleUsers;
  });

  it("should return a random user index", () => {
    const randomIndex = getRandomUser(users);
    expect(randomIndex).to.be.a("number");
    expect(randomIndex).to.be.at.least(0);
    expect(randomIndex).to.be.at.most(users.length - 1);
  });

  it("should return different indices on subsequent calls", () => {
    const indices = new Set();
    const numCalls = 100;
    for (let i = 0; i < numCalls; i++) {
      const randomIndex = getRandomUser(users);
      indices.add(randomIndex);
    }
    expect(indices.size).to.be.above(1);
  });

  it("should handle an empty user data array", () => {
    const emptyUserData = [];
    const randomIndex = getRandomUser(emptyUserData);
    expect(randomIndex).to.be.undefined; // Assuming you handle this case by returning undefined
  });

});

describe('getUserData', () => {
  it('should return user data based on index position', () => {
    const indexPosition = 1; 
    const userData = getUserData(userSample.sampleUsers, indexPosition);
    const expectedUserData = {
      id: 2,
      name: 'Tyreek VonRueden',
      address: '623 Koelpin Skyway, Lake Luigichester MN 77576-1678',
      email: 'Nicolette_Halvorson43@yahoo.com',
      strideLength: 4.5,
      dailyStepGoal: 9000,
      friends: [13, 19, 3],
      firstName: 'Tyreek',
    };
    expect(userData).to.deep.equal(expectedUserData);
  });
});

describe('getAverageStepGoal', () => {
  it('should calculate the average step goal correctly', () => {
    const average = getAverageStepGoal(userSample.sampleUsers);
    const expectedAverage = ((7000 + 9000 + 3000) / 3).toFixed(0); 

    expect(average).to.equal(expectedAverage);
  });
});