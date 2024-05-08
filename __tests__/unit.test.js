// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// tests for isPhoneNumber
test('valid phone number 1', () => {
  expect(isPhoneNumber('(523)224-4345')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('421-432-3424')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber('1464734634')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('445325sds2')).toBe(false);
});

// tests for isEmail
test('valid email 1', () => {
  expect(isEmail('user@gmail.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('user@ucsd.edu')).toBe(true);
});
test('invalid email 1', () => {
  expect(isEmail('@gmail.com')).toBe(false);
});
test('invalid email 2', () => {
  expect(isEmail('usergmail.com')).toBe(false);
});

// tests for isStrongPassword
test('strong password 1', () => {
  expect(isStrongPassword('wscaWHAa')).toBe(true);
})
test('strong password 2', () => {
  expect(isStrongPassword('SzAb')).toBe(true);
})
test('weak password 1', () => {
  expect(isStrongPassword('B')).toBe(false);
})
test('weak password 2', () => {
  expect(isStrongPassword('fsafae3f@fasfaws')).toBe(false);
})

// tests for isDate
test('valid date 1', () => {
  expect(isDate('5/4/2021')).toBe(true);
})
test('valid date 2', () => {
  expect(isDate('4/1/2020')).toBe(true);
})
test('invalid date 1', () => {
  expect(isDate('4-10-2020')).toBe(false);
})
test('invalid date 2', () => {
  expect(isDate('200/30/20200')).toBe(false);
})

// tests for isHexColor
test('valid color 1', () => {
  expect(isHexColor('#BFA')).toBe(true);
})
test('valid color 2', () => {
  expect(isHexColor('#12CD12')).toBe(true);
})
test('invalid color 1', () => {
  expect(isHexColor('#123A4G')).toBe(false);
})
test('invalid color 2', () => {
  expect(isHexColor('#2643')).toBe(false);
})