export function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * Math.floor(max)) + min;
}

/**
 * Math: amplitude = 2, period = [3,x,10]
 */
export function getWaves(amplitude, period = 10) {
  const array = ['100% 0', '0 0'];
  const height = 95;
  for (let i = 0; i <= 100; i += 1) {
    array.push(`${i}% ${height + amplitude * Math.sin(i * (1 / period))}%`);
  }
  return array;
}
