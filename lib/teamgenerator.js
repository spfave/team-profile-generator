// Import Node.js packages
const inquirer = require("inquirer");

// Import library packages
const Team = require("./team");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// TeamGenerator is responsible for getting the team information and generating the team html page
class TeamGenerator {
  constructor() {}

  async collectTeamData() {
    await this.promptTeamName();
    await this.promptTeamManager();
  }

  async promptTeamName() {
    const teamInput = await inquirer.prompt(Team.questions);
    this.team = new Team(teamInput.teamName);
  }

  async promptTeamManager() {
    const managerInput = await inquirer.prompt(Manager.questions);
    this.team.addMember(
      new Manager(
        managerInput.name,
        managerInput.id,
        managerInput.email,
        managerInput.office
      )
    );

    console.log(this.team.members);
  }

  async promptTeamMembers() {}

  async generateTeamSite() {}
}

module.exports = TeamGenerator;
