// Import library modules
const Team = require("./lib/team");
const TeamSite = require("./lib/teamsite");

// Script Execution
const team = new Team();
team
  .collectTeamProps()
  .then((team) => {
    const teamSite = new TeamSite(team);
    teamSite.generateTeamSite();
  })
  .then(() =>
    console.log("Team site HTML page created and available in 'dist' folder")
  )
  .catch((err) => console.log(err));
