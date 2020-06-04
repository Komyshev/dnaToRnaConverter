function dnaToRna(s) {
  let resoultRNA = '';
  if (s == null) return null;
  if (s == '') return '';
  for (let c of s) {
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
        return null;
    }
  }
  return resoultRNA;
}

const inputArea = document.querySelector('.input');
const convertButton = document.querySelector('.convert');
const outputArea = document.querySelector('.output');
convertButton.onclick = function() {
    let q = dnaToRna(inputArea.value);
    if (q == null) alert('Некорректный ввод')
        else outputArea.value = q;
    
}