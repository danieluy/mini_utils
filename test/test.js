const expect = require('chai').expect;

const removeVowelAccent = require('../src/ds-mini-utils').removeVowelAccent;

describe('DSMiniUtils', function () {

  describe('removeVowelAccent()', function () {
    it('should "á" => "a"', function () {
      expect(removeVowelAccent('á')).equal('a')
    });
    it('should "ábéo" => "a"', function () {
      expect(removeVowelAccent('ábéo')).equal('abeo')
    });
    it('should !str => ERROR: Parameter mismatch, a String must be provided', function () {
      expect(() => { removeVowelAccent() }).throw('Parameter mismatch, a String must be provided')
      expect(() => { removeVowelAccent(null) }).throw('Parameter mismatch, a String must be provided')
    });
    it('should 123 => ERROR: Parameter mismatch, a String must be provided', function () {
      expect(() => { removeVowelAccent(123) }).throw('Parameter mismatch, a String must be provided')
    });
  });

})