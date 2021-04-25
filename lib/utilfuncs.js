// Inquirer Validation Functions
function validateStringContent(input) {
  if (input.trim() === "") return console.log("\nEntry can not be blank");
  return true;
}

function validateID(id) {
  if (!id.trim()) return console.log("\nID can not be left blank");
  if (/\D/.test(id)) return console.log("\nID entry can only include numbers");
  return true;
}

function validateEmail(email) {
  /**
   * Basis of validateEmail function taken from 'email-validator' package
   * npm email-validator: https://www.npmjs.com/package/email-validator
   * Modified to return string message instead of boolean false if invalid email
   */
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

// Inquirer Filter Functions
function stringTrim(string) {
  return string.trim();
}

module.exports = {
  validateStringContent,
  validateID,
  validateEmail,
  stringTrim,
};
