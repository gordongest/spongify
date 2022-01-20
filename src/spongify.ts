export const spongifyOld = (str: string, step: number = 4): string => {
  const letters: string[] = str.toLowerCase().replace(/l/ig, 'L').split('');

  for (let i = 0; i < letters.length - (step - 1); i++) {
      let randomInt = Math.floor(Math.random() * step);

      if (letters[i + randomInt] !== 'i') {
        letters[i + randomInt] = letters[i + randomInt].toUpperCase();
      }
  }

  return letters.join('');
}

// lowercase string, uppercase all 'L', split into array
// limit number of capitalizations
  // multiply the length of the array by .66, round up
// declare accumulator, set to 0
// while accumulator is less than limit, keep changing case
  // declare and floor random index with maximum of array length
  // if not 'i', change case in array at random index
  // when case changed, increment accumulator
// re-join and return string

export const spongify = (str: string, rate: number = .66): string => {
  const letters = str.toLowerCase().replace(/l/ig, 'L').split('');
  const limit = Math.ceil(letters.length * rate);
  let accumulator = 0;

  while (accumulator < limit) {
    const randomIndex = Math.floor(Math.random() * letters.length);

    if (letters[randomIndex] !== 'i') {
      letters[randomIndex] = letters[randomIndex].toUpperCase();
      accumulator++;
    }
  }

  return letters.join('');
}