const utilFuncs = require("../lib/utilfuncs");

describe("Utility Functions", () => {
  describe("validateStringContent", () => {
    it("Should print message to console if invalid string", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      utilFuncs.validateStringContent("");
      expect(mock).toBeCalledWith("\nEntry can not be blank");

      utilFuncs.validateStringContent(" ");
      expect(mock).toBeCalledWith("\nEntry can not be blank");

      mock.mockRestore();
    });

    it("Should return true if valid string", () => {
      expect(utilFuncs.validateStringContent("myString")).toBeTruthy();
      expect(utilFuncs.validateStringContent("my String")).toBeTruthy();
      expect(utilFuncs.validateStringContent(" my String ")).toBeTruthy();
    });
  });

  describe("validateID", () => {
    it("Should print message to console if invalid ID", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      utilFuncs.validateID("");
      expect(mock).toBeCalledWith("\nID can not be left blank");

      utilFuncs.validateID("101a");
      expect(mock).toBeCalledWith("\nID entry can only include numbers");

      mock.mockRestore();
    });

    it("Should return true if valid ID", () => {
      expect(utilFuncs.validateID("123")).toBeTruthy();
    });
  });

  describe("validateEmail", () => {
    it("Should print message to console if invalid email", () => {
      const mock = jest.spyOn(console, "log");
      mock.mockImplementation(() => {});

      utilFuncs.validateEmail("");
      expect(mock).toBeCalledWith("\nEnter a valid email");

      utilFuncs.validateEmail("johndoe@email");
      expect(mock).toBeCalledWith("\nEnter a valid email");

      mock.mockRestore();
    });

    it("Should return true if valid email", () => {
      expect(utilFuncs.validateEmail("johndoe@email.com")).toBeTruthy();
    });
  });

  describe("stringTrim", () => {
    it("Should trim leading & trailing white space", () => {
      expect(utilFuncs.stringTrim("  myString  ")).toEqual("myString");
    });
  });
});
