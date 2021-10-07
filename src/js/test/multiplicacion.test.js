import { multiplicacion } from '../js/multiplicacion';

test('multiplicar 3 por 2 es igual a 6', () => {
  expect(multiplicacion(3, 2)).toBe(6);
});