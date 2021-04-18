const Team = require("../lib/team");
const Employee = require("../lib/employee");

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
      const team = new Team();
      const employee = new Employee("John Doe", 102, "johndoe@email.com");

      team.addMember(employee);

      expect(team.members.length).toEqual(1);
      expect(team.members[0]).toBeInstanceOf(Employee);
      expect(team.members[0]).toEqual(employee);
    });
  });
});
