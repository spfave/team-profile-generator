// Import Node.js packages
const inquirer = require("inquirer");

// Import library modules
const TeamGenerator = require("../lib/teamgenerator");
const Team = require("../lib/team");
const Manager = require("../lib/manager");

jest.mock("inquirer");

// Tests
describe("TeamSite class", () => {
  describe("Initialization", () => {
    it("should create an TeamSite object ", () => {
      const teamGen = new TeamGenerator();
      expect(teamGen).toBeInstanceOf(TeamGenerator);
    });
  });

  describe("promptTeamName", () => {
    it("Should retrieve a team name from user input", async () => {
      const teamGen = new TeamGenerator();
      const inputTeamName = "Cobras!";

      inquirer.prompt.mockReturnValue(
        new Promise((resolve) => {
          resolve({ teamName: inputTeamName });
        })
      );

      await teamGen.promptTeamName();
      expect(inquirer.prompt).lastCalledWith(Team.questions);
      expect(teamGen.team).toBeInstanceOf(Team);
      expect(teamGen.team.name).toEqual(inputTeamName);
    });
  });

  describe("promptTeamManager", () => {
    it("Should retrieve manager input from user input", async () => {
      const teamGen = new TeamGenerator();
      teamGen.team = new Team("team1");

      const inputManager = {
        name: "John Doe",
        id: 123,
        email: "johndoe@email.com",
        office: "201A",
      };
      const myManager = new Manager(
        inputManager.name,
        inputManager.id,
        inputManager.email,
        inputManager.office
      );

      inquirer.prompt.mockReturnValue(
        new Promise((resolve) => {
          resolve(inputManager);
        })
      );

      await teamGen.promptManager();
      expect(inquirer.prompt).lastCalledWith(Manager.questions);
      expect(teamGen.team.members.length).toEqual(1);
      expect(teamGen.team.members[0]).toBeInstanceOf(Manager);
      expect(teamGen.team.members[0]).toEqual(myManager);
    });
  });
});
