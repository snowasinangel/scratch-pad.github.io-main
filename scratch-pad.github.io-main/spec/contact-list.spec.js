describe('#contact-list', function () {
  describe('makeContact()', function () {
    it("should expose a Function called makeContact that returns an Object with structure: {id: '1', nameFirst: 'Max', nameLast: 'Gaudin'}", function () {
      expect(makeContact('1', 'Max', 'Gaudin')).to.eql({
        id: '1',
        nameFirst: 'Max',
        nameLast: 'Gaudin',
      });
      expect(makeContact('2', 'John', 'Fraboni')).to.eql({
        id: '2',
        nameFirst: 'John',
        nameLast: 'Fraboni',
      });
    });
  });

  describe('findContact()', () => {
    it('should return the contact object in the array if found', () => {
      const result = findContact(contacts, 'John Fraboni');
      assert.deepEqual(result, {
        id: 2,
        nameFirst: 'John',
        nameLast: 'Fraboni',
      });
    });
    it('should return undefined if the matching contact is not found', () => {
      const result = findContact(contacts, 'Alex Aaron');
      assert.deepEqual(result, undefined);
    });
  });

  describe('removeContact()', () => {
    const testArray = [
      {
        id: 1,
        nameFirst: 'Max',
        nameLast: 'Gaudin',
      },
      {
        id: 2,
        nameFirst: 'John',
        nameLast: 'Fraboni',
      },
    ];
    it('should remove a contact from the array', () => {
      removeContact(testArray, {
        id: 2,
        nameFirst: 'John',
        nameLast: 'Fraboni',
      });
      assert.equal(findContact(testArray, 'John Fabroni'), undefined);
      assert.equal(testArray.length, 1);
    });
  });

  describe('getNamesThatBeginWithLetter', () => {
    it('should return an array', () => {
      const result = getNamesThatBeginWithLetter(contacts, 'A');
      assert.equal(Array.isArray(result), true);
    });
    it('should return an array of contact objects whose names begin with input letter', () => {
      const result = getNamesThatBeginWithLetter(contacts, 'A');
      const correct = [
        {
          id: 3,
          nameFirst: 'Alon',
          nameLast: 'Robinson',
        },
        {
          id: 5,
          nameFirst: 'Alice',
          nameLast: 'Green',
        },
      ];
      assert.deepEqual(result, correct);
    });
  });

  describe('getAllContactNames()', () => {
    const testArray = [
      {
        id: 1,
        nameFirst: 'Max',
        nameLast: 'Gaudin',
      },
      {
        id: 2,
        nameFirst: 'John',
        nameLast: 'Fraboni',
      },
    ];
    it('should return a string', () => {
      const result = getAllContactNames(testArray);
      assert.equal(typeof result, 'string');
    });
    it('should return a string of full names separated by a linebreak character', () => {
      const result = getAllContactNames(testArray);
      assert.equal(result, 'Max Gaudin\nJohn Fraboni');
    });
  });
});
