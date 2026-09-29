

describe("Self Assessment", () => {
  describe("countGreaterThanFour()", () => {
    it('should return 0 if input is not an array', () => {
      expect(countGreaterThanFour("not an array")).to.equal(0);
    });

    it('should return the number of strings in the array that have length greater than 4', () => {
      expect(countGreaterThanFour(["hello", "world", "we", "are", "strings"])).to.equal(3);
    });
  });

})
