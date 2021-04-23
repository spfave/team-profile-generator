const Team = require("../lib/team");
const Engineer = require("../lib/engineer");
const utilFuncs = require("../lib/utilfuncs");

// Tests
describe("Team class", () => {
  describe("Initialization", () => {
    it("should create an Team object ", () => {
      const team = new Team("Cobras!");

      expect(team).toBeInstanceOf(Team);
      expect(team).toEqual({ name: "Cobras!", members: [] });
    });
  });

  describe("addMember", () => {
    it("should add a team member of type [Manager, Engineer, or Intern]", () => {
      const team = new Team("team1");
      const engineer = new Engineer("John Doe", 102, "johndoe@email.com");

      team.addMember(engineer);

      expect(team.members.length).toEqual(1);
      expect(team.members[0]).toBeInstanceOf(Engineer);
      expect(team.members[0]).toEqual(engineer);
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
