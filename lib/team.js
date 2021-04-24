// Node.js packages
const inquirer = require("inquirer");

// Library modules
const utilFuncs = require("./utilfuncs");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// Variables
// const roles = { Manager: Manager, Engineer: Engineer, Intern: Intern };
const addTeamMember = [
  {
    type: "list",
    message: "Select additional team member to add",
    choices: ["Engineer", "Intern", "Finished adding team members"],
    default: "Finished adding team members",
    name: "response",
  },
];

// Team is responsible for storing team name and team member data
class Team {
  constructor({ name = "", members = [] } = {}) {
    this.name = name;
    this.members = members;
  }

  addMember(member) {
    this.members.push(member);
  }

  async collectTeamProps() {
    await this.promptTeamName();
    await this.promptTeamRole(Manager);
    await this.promptTeamMembers();
    return this.props;
    // return new Promise((res, rej) => {
    //   res(this.props), rej(err);
    // });
  }

  async promptTeamName() {
    const teamInput = await inquirer.prompt(Team.questions);
    this.name = teamInput.teamName;
  }

  async promptTeamRole(role) {
    const roleInput = await inquirer.prompt(role.questions);
    this.addMember(new role(roleInput));
  }

  async promptTeamMembers() {
    const addMember = await inquirer.prompt(addTeamMember);
    switch (addMember.response) {
      case "Engineer":
        await this.promptTeamRole(Engineer);
        break;

      case "Intern":
        await this.promptTeamRole(Intern);
        break;

      default:
        // Finished adding team members
        console.log("Team members collected");
        return;
    }

    await this.promptTeamMembers();
  }

  get props() {
    return { name: this.name, members: this.members };
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
