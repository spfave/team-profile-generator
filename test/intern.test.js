const Intern = require("../lib/intern");
const utilFuncs = require("../lib/utilfuncs");

// Tests
describe("Intern class", () => {
  describe("Initialization", () => {
    it("should create an Intern object with 'name' string, 'id' number, 'email' string, and 'school' string", () => {
      const myIntern = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
        school: "Virginia Tech",
      };
      const intern = new Intern(myIntern);

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("John Doe");
      expect(intern.id).toEqual(101);
      expect(intern.email).toEqual("johndoe@email.com");
      expect(intern.school).toEqual("Virginia Tech");
    });
  });

  describe("getSchool", () => {
    it("should return the intern school name", () => {
      const myIntern = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
        school: "Virginia Tech",
      };
      const intern = new Intern(myIntern);

      expect(intern.getSchool()).toEqual(intern.school);
    });
  });

  describe("getRole", () => {
    it("should return the intern role", () => {
      const myIntern = {
        name: "John Doe",
        id: 101,
        email: "johndoe@email.com",
        school: "Virginia Tech",
      };
      const intern = new Intern(myIntern);

      expect(intern.getRole()).toEqual("Intern");
    });
  });

  describe("questions", () => {
    it("should return Intern questions", () => {
      expect(Intern.questions).toEqual([
        {
          type: "input",
          message: `What is the intern's name?`,
          validate: utilFuncs.validateStringContent,
          filter: utilFuncs.stringTrim,
          name: `name`,
        },
        {
          type: "input",
          message: `What is the intern's ID?`,
          validate: utilFuncs.validateID,
          filter: utilFuncs.stringTrim,
          name: "id",
        },
        {
          type: "input",
          message: `What is the intern's email?`,
          validate: utilFuncs.validateEmail,
          filter: utilFuncs.stringTrim,
          name: "email",
        },
        {
          type: "input",
          message: "What is the intern's school name?",
          validate: utilFuncs.validateStringContent,
          filter: utilFuncs.stringTrim,
          name: "school",
        },
      ]);
    });
  });
});
