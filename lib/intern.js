const Employee = require("./employee");
const utilFuncs = require("../lib/utilfuncs");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  static get questions() {
    return [
      ...super.questions("intern"),
      {
        type: "input",
        message: "What is the intern's school name?",
        validate: utilFuncs.validateStringContent,
        filter: utilFuncs.stringTrim,
        name: "school",
      },
    ];
  }
}

module.exports = Intern;
