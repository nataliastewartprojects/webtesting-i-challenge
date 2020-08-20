const { success, fail, repair } = require("./enhancer.js");
// test away!

// Items:
// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.

//----- repair() test
describe("repair()", () => {
  it("returns a new item with the durability restored to 100", () => {
    expect(repair(50, 50)).toBe(100);
  });
});

// When enhancement succeeds:
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.

//------success()
describe("success()", () => {
  it("returns a new item enhancement that increases by 1", () => {
    expect(success(10, 2)).toBe(20);
  });

  it("The durability of the item is not changed.", () => {
    expect(success(100, 1)).toStrictEqual(100);
  });
});

// When enhancement fails
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

//------fail()
describe("fail()", () => {
  it("enhancement is 15 or more, the durability of the item is decreased by 10", () => {
    const item = {
      durability: 50,
      enhancement: 16,
    };
    const newItem = fail(item);

    expect(newItem.durability).toBe(40);
    expect(newItem.enhancement).toBe(16);
  });

  it("If the item's enhancement is less than 15, the durability of the item is decreased by 5.", () => {
    const item = {
      durability: 50,
      enhancement: 14,
    };
    const newItem = fail(item);

    expect(newItem.durability).toBe(45);
    expect(newItem.enhancement).toBe(14);
  });

  it("the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).", () => {
    const item = { enhancement: 17 };
    const newItem = fail(item);

    expect(newItem.enhancement).toBe(16);
  });
});
