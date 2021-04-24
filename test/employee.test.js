const Employee = require("../lib/employee");
const utilFuncs = require("../lib/utilfuncs");

// Tests
describe("Employee class", () => {
  describe("Initialization", () => {
    it("should create an Employee object with 'name' string, 'id' number, and 'email' string", () => {
      const myEmployee = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("John Doe");
      expect(employee.id).toEqual(101);
      expect(employee.email).toEqual("johndoe@email.com");
    });
  });

  describe("getName", () => {
    it("should return the employee name", () => {
      const myEmployee = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee.getName()).toEqual(myEmployee.name);
    });
  });

  describe("getID", () => {
    it("should return the employee ID", () => {
      const myEmployee = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee.getID()).toEqual(myEmployee.id);
    });
  });

  describe("getEmail", () => {
    it("should return the employee email", () => {
      const myEmployee = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
      };
      const employee = new Employee(myEmployee);

      expect(employee.getEmail()).toEqual(myEmployee.email);
    });
  });

  describe("getRole", () => {
    it("should return the employee role", () => {
      const myEmployee = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
      };
      const employee = new Employee(myEmployee);

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
