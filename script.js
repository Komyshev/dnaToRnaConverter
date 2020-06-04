function dnaToRna(s) {
  let resoultRNA = '';
  if (s == null) return null;
  if (s == '') return '';
  for (let c of s.toUpperCase()) {
    switch(c) {
      case 'G':
        resoultRNA += 'C';
        break;
      case 'C':
        resoultRNA += 'G';
        break;
      case 'T':
        resoultRNA += 'A';
        break;
      case 'A':
        resoultRNA += 'U';
        break;
      default:
        throw new Error('ValidationError');
    }
  }
  return resoultRNA;
}