const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

function prepereKey(key) {
  key = replaceAll(key, '10', '.');
  key = replaceAll(key, '11', '-');
  key = replaceAll(key, '0', '');

  return key;
}

function decode(expr) {
  const countLetters = expr.length / 10;
  let result = '';
  for (let i = 0; i < countLetters; i++) {
    let symbol = expr.substring(i * 10, i * 10 + 10);
    result += symbol !== '**********' ? MORSE_TABLE[prepereKey(symbol)] : ' ';
  }

  return result;
}

module.exports = {
  decode
}