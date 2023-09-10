const chars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

const inputElement = document.getElementById('inpt'),
  btnElement = document.getElementById('btn'),
  resultElement = document.getElementById('result');

const clearInput = () => (inputElement.value = ''),
  writeResult = (result) => (resultElement.innerHTML = result);

// event handler
btnElement.onclick = (e) => {
  const inputChar = inputElement.value;
  const result = processInput(inputChar);
  writeResult(result);
  clearInput();
};

const processInput = (inputChar) => {
  let result = '';

  const idxOfChar = chars.indexOf(inputChar);

  switch (true) {
    case idxOfChar > -1 && idxOfChar < 9:
      result = `${inputChar} is a number`;
      break;
    case idxOfChar > 9:
      result = `${inputChar} is a letter`;
      break;
    default:
      result = `'${inputChar}' was not found`;
      break;
  }

  return result;
};
