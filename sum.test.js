import { x,y } from app.js;
const sum = require('./sum');

test('adds x + y to equal 3', () => {
  expect(sum(x, y)).toBe(3);
});