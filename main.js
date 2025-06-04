function isEvenlyDivisible(a, b) {
  return a % b === 0;
}

function halfSquare(num) {
  return (num ** 2) / 2;
}

function isLong(str) {
  return str.length >= 15;
}

function exclaim(str) {
  let result = '';
  let end = str.length - 1;
  while (end >= 0 && str[end] === '!'){
    end--;
  }
  for(let i = 0; i <= end; i++){
    result += str[i];
  }
  return result + '!';
}

function countWords(str) {
  let words = str.trim().split(' ');
  return words.filter(word => word !== '').length;
}

function containsDigit(str) {
  let digits = '1234';
  for (let i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      return true;
    }
  } return false;
}

function containsLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'a' && char <= 'z') {
      return true;
    }
  }
  return false;
}

function containsUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'A' && char <= 'Z') {
      return true;
    }
  }
  return false;
}

function containsNonAlphanumeric(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!(char >= 'a' && char <= 'z') &&
      !(char >= 'A' && char <= 'Z') &&
      !(char >= '0' && char <= '9')) {
      return true;
    }
  }
  return false;
}

function containsSpace(str) {
  for(let i = 0; i < str.length; i++){
    let spaces = str[i];
    if(spaces === ' '){
      return true;
    }
  }
  return false;
}

function digits(num) {
  let str = "" + num;
  let result = [];
  for(let i = 0; i < str.length; i++){
    let char = str[i];
    if(char >= '0' && char <= '9'){
      result.push(Number(char));
    }
  }
  
  return result;
}

function truncate(str) {
  if(str.length < 15) {
    return str;
  }

  let result = '';
  for(let i = 0; i < 8; i++){
    result += str[i];
  }
  return result + '...';
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
