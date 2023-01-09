const data = require("./data.json");

describe("checking data", () => {
  test("having rating key ", () => {
    expect(data.data.products[0].rating).toBeGreaterThan(3.43);
  });
  test("checking value for iPhone 9 exist ", () => {
    expect(data.data.products[0].title).toBe("iPhone 9");
  });
});
