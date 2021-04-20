// Import Node.js packages
const inquirer = require("inquirer");

// Import library packages
const Team = require("./team");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// TeamSite is responsible for getting the team information and generating the team html page
class TeamSite {
  constructor() {}

  async collectTeamData() {
    await this.promptTeamName();
  }

  async promptTeamName() {
    const teamInput = await inquirer.prompt(Team.questions);
    this.team = new Team(teamInput.teamName);
  }

  async promptTeamManager() {}

  async promptTeamMembers() {}

  async generateTeamSite() {}
}

module.exports = TeamSite;
