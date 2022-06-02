import { generateID, filterProps } from './helper';

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

describe('filterprops should return the correct object', () => {
  it('gives back the props we told it to filter', () => {
    const propsObject = {
      'data-filter': true,
      'data-test': false,
      'aria-hidden': false,
      'aria-expanded': true,
      title: 'test',
      className: 'example-classname',
    };

    const returnedPropsObject = filterProps(propsObject, /^data-/);

    expect(returnedPropsObject).toStrictEqual({ 'data-filter': true, 'data-test': false });
  });

  it('gives back the propsObject without the props we told it to filter', () => {
    const propsObject = {
      'data-filter': true,
      'data-test': false,
      'aria-hidden': false,
      'aria-expanded': true,
      title: 'test',
      className: 'example-classname',
    };

    const returnedPropsObject = filterProps(propsObject, /^data-/, false);

    expect(returnedPropsObject).toStrictEqual({
      'aria-hidden': false,
      'aria-expanded': true,
      title: 'test',
      className: 'example-classname',
    });
  });
});
