export const spongify = (str: string, step: number = 5): string => {
  const letters = str.toLowerCase().split('');
  for (let i = 1; i < letters.length - (step - 1); i++) {
      let randomInt = Math.floor(Math.random() * step);
      letters[i + randomInt] = letters[i + randomInt].toUpperCase();
  }
  return letters.join('');
}