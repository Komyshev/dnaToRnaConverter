let converter = function dnaToRna(s) {
  let result = '';
  if (s == null) return null;
  if (s == '') return '';
  for (let c of s.toUpperCase()) {
    switch(c) {
      case 'G':
        result += 'C';
        break;
      case 'C':
        result += 'G';
        break;
      case 'T':
        result += 'A';
        break;
      case 'A':
        result += 'U';
        break;
      default:
        throw new Error('ValidationError');
    }
  }
  return result;
}

module.exports = converter;