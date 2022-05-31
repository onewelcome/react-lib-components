import { generateID } from './helper';

/* Generate an ID of 20 characters with a string woven in */

describe('generateID should correctly generate IDs in the correct way', () => {
  it('generates an ID of length 20 with a string woven in', () => {
    const ID1 = generateID(20, 'thistestingstring');
    expect(ID1.length).toBe(20);
  });

  it('genereates an ID without a string woven in', () => {
    const ID2 = generateID(20);
    expect(ID2.length).toBe(20);
  });
});
