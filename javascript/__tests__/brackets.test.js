const validateBrackets = require('../code-challenges/bracket-validation');


describe('Validates brackets', () => {

  it('Can successfully validate brackets', () => {
    const result = validateBrackets('([]{})');
    expect(result).toBe(true);
  });

  it('Returns false for unbalanced brackets', () => {
    const result = validateBrackets('[({)}]');
    expect(result).toBe(true);
  });

  it('Returns true for an empty string', () => {
    const result = validateBrackets('');
    expect(result).toBe(true);
  });

  it('Can validate brackets with other characters', () => {
    const result = validateBrackets('a(b[c]d)e{f}');
    expect(result).toBe(true);
  });

  it('Returns false when only opening brackets are present', () => {
    const result = validateBrackets('({[');
    expect(result).toBe(false);
  });

  it('Returns false when only closing brackets are present', () => {
    const result = validateBrackets('})]');
    expect(result).toBe(false);
  });

  it('Returns false for more opening brackets than closing brackets', () => {
    const result = validateBrackets('[({})');
    expect(result).toBe(false);
  });

  it('Returns false for more closing brackets than opening brackets', () => {
    const result = validateBrackets('({})]');
    expect(result).toBe(false);
  });

});


