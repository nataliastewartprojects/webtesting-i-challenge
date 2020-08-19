const { success, fail, repair } = require("./enhancer.js");
// test away!

//----- repair() test
describe("repair()", () => {
  it("returns a new item with the durability restored to 100", () => {
    expect(repair(50, 50)).toBe(100);
  });
});
