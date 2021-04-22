const Manager = require("../lib/manager");
const utilFuncs = require("../lib/utilfuncs");

// Tests
describe("Manager class", () => {
  describe("Initialization", () => {
    it("should create an Manager object with 'name' string, 'id' number, 'email' string, and 'officeNumber' string", () => {
      const manager = new Manager("Jane Doe", 101, "janedoe@email.com", "207A");

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("Jane Doe");
      expect(manager.id).toEqual(101);
      expect(manager.email).toEqual("janedoe@email.com");
      expect(manager.office).toEqual("207A");
    });
  });

  describe("getRole", () => {
    it("should return the manager role", () => {
      const manager = new Manager("Jane Doe", 101, "janedoe@email.com", "207A");

      expect(manager.getRole()).toEqual("Manager");
    });
  });

  describe("questions", () => {
    it("should return Manager questions", () => {
      expect(Manager.questions).toEqual([
        {
          type: "input",
          message: `What is the manager's name?`,
          validate: utilFuncs.validateStringContent,
          filter: utilFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the manager's ID?`,
          validate: utilFuncs.validateID,
          filter: utilFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the manager's email?`,
          validate: utilFuncs.validateEmail,
          filter: utilFuncs.stringTrim,
          name: "email",
        },
        {
          type: "input",
          message: "What is the manager's office number?",
          validate: utilFuncs.validateStringContent,
          filter: utilFuncs.stringTrim,
          name: "office",
        },
      ]);
    });
  });
});
