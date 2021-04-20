// Validation Functions
function validateStringContent(input) {
  if (input.trim() === "") return console.log("\nEntry can not be blank");
  return true;
}

function validateID(id) {
  if (/\D/.test(id)) return console.log("\nID entry can only include numbers");
  return true;
}

/**
 * Basis of validateEmail function taken from 'email-validator' package
 * npm email-validator: https://www.npmjs.com/package/email-validator
 * Modified to return string message instead of boolean false if invalid email
 */
function validateEmail(email) {
  const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  const errMsg = () => console.log("\nEnter a valid email");

  // Check string content
  if (!email) return errMsg();
  if (email.length > 254) return errMsg();
  if (!tester.test(email)) return errMsg();

  // Checking conditions regex can't handle
  const parts = email.split("@");
  if (parts[0].length > 64) return errMsg();
  if (parts[1].split(".").some((part) => part.length > 63)) return errMsg();

  return true;
}

// Filter Functions
function stringTrim(string) {
  return string.trim();
}

// Questions
const questionTeamName = [
  {
    type: "input",
    message: "What is the team name?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "teamName",
  },
];

const questionMangerInfo = [
  {
    type: "input",
    message: "What is the team manager's name?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team manager's ID?",
    validate: validateID,
    filter: stringTrim,
    name: "managerID",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    validate: validateEmail,
    filter: stringTrim,
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "managerOffice",
  },
];

const questionEngineerInfo = [
  {
    type: "input",
    message: "What is the engineer's name?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer's ID?",
    validate: validateID,
    filter: stringTrim,
    name: "engineerID",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    validate: validateEmail,
    filter: stringTrim,
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "engineerGitHub",
  },
];

const questionInternInfo = [
  {
    type: "input",
    message: "What is the interns name?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "internName",
  },
  {
    type: "input",
    message: "What is the intern's ID?",
    validate: validateID,
    filter: stringTrim,
    name: "internID",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    validate: validateEmail,
    filter: stringTrim,
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is the intern's school name?",
    validate: validateStringContent,
    filter: stringTrim,
    name: "internSchool",
  },
];

module.exports = {
  questionTeamName,
  questionMangerInfo,
  questionEngineerInfo,
  questionInternInfo,
};
