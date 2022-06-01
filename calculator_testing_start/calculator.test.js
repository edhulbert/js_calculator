const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

const BigNumber = require("bignumber.js");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    actual = sum(231441231125123124113231, 15231251512312412251235423);
    //expected = 15462692743437535375348654; <= this is the full answer, but js doesnt seem to store to this precision
    //expected = 15462692743437530000000000; <= if you change the last 5 to a 0, the test fails
    //expected = 15462692743437535900000000; <= changing numbers after the last five changes nothing, including decimals  
    expected = 15462692743437535000000000; // <= this is the exact level of precision that js recognises as correct. stored as 1.5462692743437535e+25
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    actual = sum(-5, -6);
    expected = -11;
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    actual = sum(5,0);
    expected = 5;
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test("can subtract smaller number from larger number", () => {
    actual = subtract(10,5);
    expected = 5;
    expect(actual).toBe(expected);
  });

  test("can subtract larger number from smaller number", () => {
    actual = subtract(5,10);
    expected = -5;
    expect(actual).toBe(expected);
  });

  test("can subtract decimals", () => {
    actual = subtract(5.4213, 12.2);
    expected = -6.7787;
    expect(actual).toBe(expected);
  });

  test("can subtract zero", () => {
    actual = subtract(5.1231,0);
    expected = 5.1231;
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {
  test("can return 1 for 3 and 2", () => {
    actual = modulus(3,2);
    expected = 1;
    expect(actual).toBe(expected);
  });

  test("can return 5 for 5 and 111", () => {
    actual = modulus(5,111);
    expected = 5;
    expect(actual).toBe(expected);
  });

  test("can return modulus for very large number and small number", () => {
    actual = modulus(21314123123123135512n,2);
    expected = 0;
    expect(actual).toBe(expected);
  });

  test("can return modulus for very large number and small number", () => {
    actual = modulus(21314123123123135511n,2);
    expected = 1;
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test("can return true for even number", () => {
    actual = even(6);
    expected = true;
    expect(actual).toBe(expected);
  });

  test("can return false for odd number", () => {
    actual = even(5);
    expected = false;
    expect(actual).toBe(expected);
  });

  test("can return false for decimal", () => {
    actual = even(6.1);
    expected = false;
    expect(actual).toBe(expected);
  });

  test("can return true for zero", () => {
    actual = even(0);
    expected = true;
    expect(actual).toBe(expected);
  });

  test("can return true for negative even number", () => {
    actual = even(-6);
    expected = true;
    expect(actual).toBe(expected);
  });

  test("can return false for negative odd number", () => {
    actual = even(-11);
    expected = false;
    expect(actual).toBe(expected);
  });

  test("can return true for very large even number", () => {
    actual = even(11111111111111111111111111111112n);
    expected = true;
    expect(actual).toBe(expected);
  });

  test("can return false for very large odd number", () => {
    actual = even(11111111111111111111111111111111n);
    expected = false;
    expect(actual).toBe(expected);
    // initially failed, why? 
  });
});

describe('odd', () => {

});
