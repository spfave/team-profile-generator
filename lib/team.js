const utilFuncs = require("./utilfuncs");

// Team is responsible for storing team name and team member data
class Team {
  constructor(name) {
    this.name = name;
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  static get questions() {
    return [
      {
        type: "input",
        message: "What is the team name?",
        validate: utilFuncs.validateStringContent,
        filter: utilFuncs.stringTrim,
        name: "teamName",
      },
    ];
  }
}

module.exports = Team;
