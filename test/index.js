import expect from 'expect';
import {compare, canWatch, getHighestRating} from '../src/index';

describe('parental-rating', function () {

  describe('canWatch', function () {
    it('should not allow an G profile to watch PG content', function () {
      expect(canWatch('G', 'PG')).toBe(false);
    });
    it('should not allow an PG profile to watch M content', function () {
      expect(canWatch('PG', 'M')).toBe(false);
    });
    it('should not allow an M profile to watch R content', function () {
      expect(canWatch('M', 'R')).toBe(false);
    });
    it('should allow a PG profile to watch G content', function () {
      expect(canWatch('PG', 'G')).toBe(true);
    });
    it('should allow an M profile to watch PG content', function () {
      expect(canWatch('M', 'PG')).toBe(true);
    });
    it('shold allow an R profile to watch M content', function () {
      expect(canWatch('R', 'M')).toBe(true);
    });
    it('should allow an R profile to watch RP13 content', function () {
      expect(canWatch('R', 'RP13')).toBe(true);
    });
    it('should not allow an RP13 profile to watch R content', function () {
      expect(canWatch('RP13', 'R')).toBe(false);
    });
  });

  describe('compare', function () {
    it('should compare G and M', function () {
      expect(compare('G', 'M')).toBeLessThan(0);
    });
    it('should compare M and G', function () {
      expect(compare('M', 'G')).toBeGreaterThan(0);
    });
    it('should compare M and M', function () {
      expect(compare('M', 'M')).toBe(0);
    });
  });

  describe('getHighestRating', function () {
    it('should return R in [G, PG, M, R]',function(){
      expect(getHighestRating(['G', 'PG','M','R'])).toBe('R');
    });
    it('should return M in [G, PG, M, M]',function(){
      expect(getHighestRating(['G', 'PG','M', 'M'])).toBe('M');
    });
    it('should return PG in [G, PG, G]',function(){
      expect(getHighestRating(['G', 'PG', 'G'])).toBe('PG');
    });
    it('should return PG in [G, G]',function(){
      expect(getHighestRating(['G', 'G'])).toBe('G');
    });
  });
});

