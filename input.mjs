function isEvenNumber(n) {
  return typeof n === 'number' && n % 2 === 0 ? 'It\'s an even number' : 'It\'s not an even number';
}

export default isEvenNumber;
