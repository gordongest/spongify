export const spongify = (str: string, step: number = 4): string => {
  const letters: string[] = str.toLowerCase().replace(/l/ig, 'L').split('');

  for (let i = 0; i < letters.length - (step - 1); i++) {
      let randomInt = Math.floor(Math.random() * step);

      if (letters[i + randomInt] !== 'i') {
        letters[i + randomInt] = letters[i + randomInt].toUpperCase();
      }
  }

  return letters.join('');
}