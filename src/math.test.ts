import {add} from './math';
import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('math', () => {
  describe('add', () => {
    it('works', () => {
      expect(add(3, 4)).to.equal(7);
    });
  });
});
