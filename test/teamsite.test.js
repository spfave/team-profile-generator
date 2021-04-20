// Import Node.js packages
const inquirer = require("inquirer");

// Import library packages
const TeamSite = require("../lib/teamsite");
const Team = require("../lib/team");

jest.mock("inquirer");

describe("TeamSite class", () => {
  describe("Initialization", () => {
    it("should create an TeamSite object ", () => {
      const teamSite = new TeamSite();
      expect(teamSite).toBeInstanceOf(TeamSite);
    });
  });

  describe("promptTeamName", () => {
    it("Should retrieve a team name from user input", async () => {
      const teamSite = new TeamSite();
      const inputTeamName = "Cobras!";

      inquirer.prompt.mockReturnValue(
        new Promise((resolve) => {
          resolve({ teamName: inputTeamName });
        })
      );

      await teamSite.promptTeamName();
      expect(inquirer.prompt).lastCalledWith(Team.questions);
      expect(teamSite.team).toBeInstanceOf(Team);
      expect(teamSite.team.name).toEqual(inputTeamName);
    });
  });
});
