const Intern = require("../lib/intern");

describe("Intern class", () => {
  describe("Initialization", () => {
    it("should create an Intern object with 'name' string, 'id' number, 'email' string, and 'school' string", () => {
      const intern = new Intern(
        "John Doe",
        101,
        "johndoe@email.com",
        "Virginia Tech"
      );

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("John Doe");
      expect(intern.id).toEqual(101);
      expect(intern.email).toEqual("johndoe@email.com");
      expect(intern.school).toEqual("Virginia Tech");
    });
  });

  describe("getSchool", () => {
    it("should return the intern school name", () => {
      const intern = new Intern(
        "John Doe",
        101,
        "johndoe@email.com",
        "Virginia Tech"
      );

      expect(intern.getSchool()).toEqual(intern.school);
    });
  });

  describe("getRole", () => {
    it("should return the intern role", () => {
      const intern = new Intern(
        "John Doe",
        101,
        "johndoe@email.com",
        "Virginia Tech"
      );

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
