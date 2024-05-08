// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//false
test('adds 15 + 15 to equal 20', () => {
  expect(15 + 15).toBe(20);
});

//false
test('adds 15 and 20 equal to each other', () => {
  expect(15 == 20).toBe(true);
});

//true
test('adds 15 and 15 equal to each other', () => {
  expect(15 == 15).toBe(true);
});

//true
test('50 is greater than 100 when doing string comparison', () => {
  expect("50" > "100").toBe(true);
});