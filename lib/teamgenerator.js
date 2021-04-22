// Import Node.js packages
const inquirer = require("inquirer");

// Import library packages
const Team = require("./team");
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
    name: "member",
  },
];

// TeamGenerator is responsible for getting the team information and generating the team html page
class TeamGenerator {
  constructor() {}

  async collectTeamData() {
    await this.promptTeamName();
    await this.promptManager();
    this.promptTeamMember();
  }

  async promptTeamName() {
    const teamInput = await inquirer.prompt(Team.questions);
    this.team = new Team(teamInput.teamName);
  }

  async promptManager() {
    const managerInput = await inquirer.prompt(Manager.questions);
    this.team.addMember(
      new Manager(
        managerInput.name,
        managerInput.id,
        managerInput.email,
        managerInput.office
      )
    );
  }

  async promptEngineer() {
    const engineerInput = await inquirer.prompt(Engineer.questions);
    this.team.addMember(
      new Engineer(
        engineerInput.name,
        engineerInput.id,
        engineerInput.email,
        engineerInput.github
      )
    );
  }

  async promptIntern() {
    const internInput = await inquirer.prompt(Intern.questions);
    this.team.addMember(
      new Intern(
        internInput.name,
        internInput.id,
        internInput.email,
        internInput.school
      )
    );
  }

  async promptTeamMember() {
    const addMember = await inquirer.prompt(addTeamMember);
    switch (addMember.member) {
      case "Engineer":
        await this.promptEngineer();
        this.promptTeamMember();
        break;

      case "Intern":
        await this.promptIntern();
        this.promptTeamMember();
        break;

      default:
        // Finished adding team members
        break;
    }
  }

  async generateTeamSite() {}
}

module.exports = TeamGenerator;
