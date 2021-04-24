// Import Node.js modules
const fs = require("fs");
const util = require("util");

// Functions
const writeFileAsync = util.promisify(fs.writeFile);

// TeamSite is responsible for generating the team site HTML page
class TeamSite {
  constructor() {}

  generateEmployeeRow(employee) {
    return `
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td><a href="mailto:${employee.email}">${employee.email}</a></td>
    `.trim();
  }

  async generateTeamSite() {}
}

module.exports = TeamSite;
