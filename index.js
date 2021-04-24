// Import library modules
const Team = require("./lib/team");

// Script Execution
const team = new Team();
team
  .collectTeamData()
  .then((team) => console.log(team))
  .catch((err) => console.log(err));
