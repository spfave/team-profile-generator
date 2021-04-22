const Employee = require("../lib/employee");
const utilFuncs = require("../lib/utilfuncs");

// Tests
describe("Employee class", () => {
  describe("Initialization", () => {
    it("should create an Employee object with 'name' string, 'id' number, and 'email' string", () => {
      const employee = new Employee("John Doe", 101, "johndoe@email.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("John Doe");
      expect(employee.id).toEqual(101);
      expect(employee.email).toEqual("johndoe@email.com");
    });
  });

  describe("getName", () => {
    it("should return the employee name", () => {
      const employee = new Employee("John Doe", 101, "johndoe@email.com");

      expect(employee.getName()).toEqual(employee.name);
    });
  });

  describe("getID", () => {
    it("should return the employee ID", () => {
      const employee = new Employee("John Doe", 101, "johndoe@email.com");

      expect(employee.getID()).toEqual(employee.id);
    });
  });

  describe("getEmail", () => {
    it("should return the employee email", () => {
      const employee = new Employee("John Doe", 101, "johndoe@email.com");

      expect(employee.getEmail()).toEqual(employee.email);
    });
  });

  describe("getRole", () => {
    it("should return the employee role", () => {
      const employee = new Employee("John Doe", 101, "johndoe@email.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });

  describe("questions", () => {
    it("should return Employee questions", () => {
      expect(Employee.questions()).toEqual([
        {
          type: "input",
          message: `What is the employee's name?`,
          validate: utilFuncs.validateStringContent,
          filter: utilFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the employee's ID?`,
          validate: utilFuncs.validateID,
          filter: utilFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the employee's email?`,
          validate: utilFuncs.validateEmail,
          filter: utilFuncs.stringTrim,
          name: "email",
        },
      ]);

      expect(Employee.questions("person")).toEqual([
        {
          type: "input",
          message: `What is the person's name?`,
          validate: utilFuncs.validateStringContent,
          filter: utilFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the person's ID?`,
          validate: utilFuncs.validateID,
          filter: utilFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the person's email?`,
          validate: utilFuncs.validateEmail,
          filter: utilFuncs.stringTrim,
          name: "email",
        },
      ]);
    });
  });
});
