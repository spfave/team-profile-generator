const utilFuncs = require("./utilfuncs");

// Employee is a parent class used to extend employee type subclasses
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  static questions(role = "employee") {
    return [
      {
        type: "input",
        message: `What is the ${role}'s name?`,
        validate: utilFuncs.validateStringContent,
        filter: utilFuncs.stringTrim,
        name: "name",
      },
      {
        type: "input",
        message: `What is the ${role}'s ID?`,
        validate: utilFuncs.validateID,
        filter: utilFuncs.stringTrim,
        name: "id",
      },
      {
        type: "input",
        message: `What is the ${role}'s email?`,
        validate: utilFuncs.validateEmail,
        filter: utilFuncs.stringTrim,
        name: "email",
      },
    ];
  }
}

module.exports = Employee;
