const Manager = require("../lib/manager");

describe("Manager class", () => {
  describe("Initialization", () => {
    it("should create an Manager object with 'name' string, 'id' number, 'email' string, and 'officeNumber' string", () => {
      const manager = new Manager("Jane Doe", 101, "janedoe@email.com", "207A");

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("Jane Doe");
      expect(manager.id).toEqual(101);
      expect(manager.email).toEqual("janedoe@email.com");
      expect(manager.officeNumber).toEqual("207A");
    });
  });

  describe("getRole", () => {
    it("should return the manager role", () => {
      const manager = new Manager("Jane Doe", 101, "janedoe@email.com", "207A");

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
