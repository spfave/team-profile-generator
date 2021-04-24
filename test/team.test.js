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
    it("should create a Team object with default prop values with no constructor inputs", () => {
      const team = new Team();

      expect(team).toBeInstanceOf(Team);
      expect(team.name).toEqual("");
      expect(team.members).toEqual([]);
    });

    it("should create a Team object with submitted prop values with constructor inputs", () => {
      const myTeam = {
        name: "Team 1",
        members: ["manager1", "engineer1", "intern1"],
      };
      const team = new Team(myTeam);

      expect(team).toBeInstanceOf(Team);
      expect(team.name).toEqual(myTeam.name);
      expect(team.members).toEqual(myTeam.members);
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

      inquirer.prompt.mockResolvedValue(inputEngineer);

      await team.promptTeamRole(Engineer);
      expect(inquirer.prompt).lastCalledWith(Engineer.questions);
      expect(team.members.length).toEqual(1);
      expect(team.members[0]).toBeInstanceOf(Engineer);
      expect(team.members[0]).toEqual(new Engineer(inputEngineer));
      expect(team.members[0].name).toEqual(inputEngineer.name);
    });
  });

  describe("promptTeamMembers", () => {
    it("should prompt for a team member to add", async () => {
      const team = new Team();
      const addTeamMember = [
        {
          type: "list",
          message: "Select additional team member to add",
          choices: ["Engineer", "Intern", "Finished adding team members"],
          default: "Finished adding team members",
          name: "response",
        },
      ];

      inquirer.prompt.mockReturnValue(
        new Promise((resolve) => {
          resolve({ response: "response" });
        })
      );

      await team.promptTeamMembers();
      expect(inquirer.prompt).lastCalledWith(addTeamMember);
    });

    it("should console log 'Team members collected' if default selected", async () => {
      const team = new Team();
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      inquirer.prompt.mockReturnValue(
        new Promise((resolve) => {
          resolve({ response: "Finished adding team members" });
        })
      );

      await team.promptTeamMembers();
      expect(mock).toBeCalledWith("Team members collected");

      mock.mockRestore();
    });

    it("should call promptTeamRole if Engineer or Intern selected", async () => {
      const team = new Team();
      const inputEngineer = {
        name: "Jane Doe",
        id: 101,
        email: "janedoe@email.com",
        github: "janeDoe",
      };
      const mockPromptTeamRole = jest
        .spyOn(team, "promptTeamRole")
        .mockImplementation(() => {
          team.members.push(inputEngineer);
        });

      inquirer.prompt
        .mockResolvedValueOnce({ response: "Engineer" })
        .mockResolvedValueOnce({ response: "Finished adding team members" });

      await team.promptTeamMembers();
      expect(mockPromptTeamRole).toHaveBeenCalledTimes(1);
      expect(mockPromptTeamRole).toHaveBeenCalledWith(Engineer);

      mockPromptTeamRole.mockRestore();
    });
  });

  describe("props", () => {
    it("should return Team properties as object of team name and members", () => {
      const myTeam = {
        name: "Team 1",
        members: ["manager1", "engineer1", "intern1"],
      };
      const team = new Team(myTeam);

      expect(team.props).toEqual(myTeam);
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
