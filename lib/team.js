// Node.js packages
const inquirer = require("inquirer");

// Library modules
const utilFuncs = require("./utilfuncs");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// Variables
const roles = { Manager: Manager, Engineer: Engineer, Intern: Intern };
const addTeamMember = [
  {
    type: "list",
    message: "Select additional team member to add",
    choices: ["Engineer", "Intern", "Finished adding team members"],
    default: "Finished adding team members",
    name: "member",
  },
];

// Team is responsible for storing team name and team member data
class Team {
  constructor() {
    this.name = "";
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  async collectTeamData() {
    await this.promptTeamName();
    await this.promptTeamRole(Manager);
    // await this.promptManager();
    // await this.promptTeamMember();
  }

  async promptTeamName() {
    const teamInput = await inquirer.prompt(Team.questions);
    this.name = teamInput.teamName;
  }

  async promptTeamRole(role) {
    const roleInput = await inquirer.prompt(role.questions);
    this.addMember(new role(roleInput));
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
