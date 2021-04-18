const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  describe("Initialization", () => {
    it("should create an Engineer object with 'name' string, 'id' number, 'email' string, and 'github' string", () => {
      const engineer = new Engineer(
        "Jane Doe",
        101,
        "janedoe@email.com",
        "JDoeGH"
      );

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("Jane Doe");
      expect(engineer.id).toEqual(101);
      expect(engineer.email).toEqual("janedoe@email.com");
      expect(engineer.github).toEqual("JDoeGH");
    });
  });

  describe("getGitHub", () => {
    it("should return the engineer Github username", () => {
      const engineer = new Engineer(
        "Jane Doe",
        101,
        "janedoe@email.com",
        "JDoeGH"
      );

      expect(engineer.getGitHub()).toEqual(engineer.github);
    });
  });

  describe("getRole", () => {
    it("should return the engineer role", () => {
      const engineer = new Engineer(
        "Jane Doe",
        101,
        "janedoe@email.com",
        "JDoeGH"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
