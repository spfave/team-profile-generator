// Import Node.js modules
const fs = require("fs");
const util = require("util");
const path = require("path");

// Import library modules
const { arrayFilter } = require("./utilfuncs");
const teamSiteHTML = require("./teamsitehtml");

// Functions
const writeFileAsync = util.promisify(fs.writeFile);

// TeamSite is responsible for generating the team site HTML page
class TeamSite {
  // Place employee type HTML table row generation methods in a map so as to be callable by a key
  employeeRowFuncs = new Map([
    ["Employee", this.generateEmployeeRow],
    ["Manager", this.generateManagerRow],
    ["Engineer", this.generateEngineerRow],
    ["Intern", this.generateInternRow],
  ]);

  constructor(teamProps) {
    this.teamProps = teamProps;
  }

  async generateTeamSite() {
    // Generate array of asynchronous method calls to this.generateEmployeeRows for all employee types
    const employeePromiseRows = [];
    [...this.employeeRowFuncs.keys()].map((employeeRole) =>
      employeePromiseRows.push(this.generateEmployeeRows(employeeRole))
    );

    // Await all promises to resolve from asynchronous method calls
    let employeeRows;
    try {
      employeeRows = await Promise.all(employeePromiseRows);
    } catch (error) {
      console.log(error);
    }

    // Parse arrays of employee role HTML rows to single strings before passing to write file call
    employeeRows.forEach((employeeRoleRows, i) => {
      this.teamProps[
        `${[...this.employeeRowFuncs.keys()][i].toLowerCase()}Rows` //lowercase()+Rows
      ] = employeeRoleRows.join("").trim();
    });

    writeFileAsync(
      path.join(
        "dist",
        `team-site-${this.teamProps.name.replace(" ", "-")}.html`
      ),
      teamSiteHTML(this.teamProps)
    );
  }

  async generateEmployeeRows(employeeRole) {
    const roleEmployees = this.teamProps.members.filter(
      (employee) => employee.getRole() === employeeRole
    );

    if (!roleEmployees.length) return [];

    return roleEmployees.map((employee) =>
      // Have to bind 'this' since function is passed as argument (higher order function)
      this.employeeRowFuncs.get(employee.getRole()).bind(this)(employee)
    );
  }

  generateEmployeeRow(employee) {
    return `
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td><a href="mailto:${employee.email}">${employee.email}</a></td>
    `.trim();
  }

  generateManagerRow(manager) {
    return `
      ${this.generateEmployeeRow(manager)}
      <td>${manager.office}</td>
    `.trim();
  }

  generateEngineerRow(engineer) {
    return `
      ${this.generateEmployeeRow(engineer)}
      <td><a href="https://github.com/${engineer.github}">${
      engineer.github
    }</a></td>
    `.trim();
  }

  generateInternRow(intern) {
    return `
      ${this.generateEmployeeRow(intern)}
      <td>${intern.school}</td>
    `.trim();
  }
}

module.exports = TeamSite;
