// Import Node.js packages
const fs = require("fs");
jest.mock("fs");

// Import library modules
const TeamSite = require("../lib/teamsite");

// Tests
describe("TeamSite class", () => {
  describe("Initialization", () => {
    it("should create an TeamSite object ", () => {
      const teamSite = new TeamSite();
      expect(teamSite).toBeInstanceOf(TeamSite);
    });
  });
});
