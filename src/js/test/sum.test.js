import { suma } from '../js/sum';

test('sumar 100 + 200 es igual 300', () => {
  expect(suma(100, 200)).toBe(300);
});