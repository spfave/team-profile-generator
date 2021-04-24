// Import Node.js packages
const inquirer = require("inquirer");
jest.mock("inquirer");

// Import library modules
const Team = require("../lib/team");
const Engineer = require("../lib/engineer");
const utilFuncs = require("../lib/utilfuncs");

// Tests
describe("Team class", () => {
  describe("Initialization", () => {
    it("should create an Team object ", () => {
      const team = new Team();

      expect(team).toBeInstanceOf(Team);
      expect(team).toEqual({ name: "", members: [] });
    });
  });

  describe("addMember", () => {
    it("should add a team member of type [Manager, Engineer, or Intern]", () => {
      const myEngineer = {
        name: "Jane Doe",
        id: 101,
        email: "janedoe@email.com",
        github: "JDoeGH",
      };
      const engineer = new Engineer(myEngineer);

      const team = new Team();
      team.addMember(engineer);

      expect(team.members.length).toEqual(1);
      expect(team.members[0]).toBeInstanceOf(Engineer);
      expect(team.members[0]).toEqual(engineer);
      expect(team.members[0].name).toEqual(myEngineer.name);
    });
  });

  describe("promptTeamName", () => {
    it("should prompt for and retrieve a team name from user input", async () => {
      const team = new Team();
      const inputTeamName = "Cobras!";

      inquirer.prompt.mockReturnValue(
        new Promise((resolve) => {
          resolve({ teamName: inputTeamName });
        })
      );

      await team.promptTeamName();
      expect(inquirer.prompt).lastCalledWith(Team.questions);
      expect(team.name).toEqual(inputTeamName);
    });
  });

  describe("promptTeamRole", () => {
    it("should prompt for and retrieve a team member from user input", async () => {
      const team = new Team();
      const inputEngineer = {
        name: "Jane Doe",
        id: 101,
        email: "janedoe@email.com",
        github: "janeDoe",
      };

      inquirer.prompt.mockReturnValue(
        new Promise((resolve) => {
          resolve(inputEngineer);
        })
      );

      await team.promptTeamRole(Engineer);
      expect(inquirer.prompt).lastCalledWith(Engineer.questions);
      expect(team.members.length).toEqual(1);
      expect(team.members[0]).toBeInstanceOf(Engineer);
      expect(team.members[0]).toEqual(new Engineer(inputEngineer));
      expect(team.members[0].name).toEqual(inputEngineer.name);
    });
  });

  describe("questions", () => {
    it("should return Team questions", () => {
      expect(Team.questions).toEqual([
        {
          type: "input",
          message: "What is the team name?",
          validate: utilFuncs.validateStringContent,
          filter: utilFuncs.stringTrim,
          name: "teamName",
        },
      ]);
    });
  });
});
