const evenNumbers = [];
const oddNumbers = [];

const randomIntNumberFromRange = ({ min = 1, max = 100 }) => {
  validateIsNumber(min);
  validateIsNumber(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const isEvenNumber = (number) => {
  return !(number % 2) ? true : false;
}

const validateIsArray = (item) => {
  if (!Array.isArray(item)) throw new Error(`${item} is not an array`);
  return item;
}

const validateIsNumber = (item) => {
  if (!(typeof item === 'number') || isNaN(item)) throw new Error(`${item} is not a number`);
  return item;
}

const addNumberToArray = (number) => {
  isEvenNumber(number) ? evenNumbers.push(number) : oddNumbers.push(number);
}

const generateNumbersGroups = (countOfNumbers = 20) => {
  validateIsNumber(countOfNumbers);
  for (let i = 0; i < countOfNumbers; i++) {
    const number = randomIntNumberFromRange({ min: 1, max: 100 });
    addNumberToArray(number);
  }
}

const sortArraysAsc = (...arr) => {
  arr.forEach(item => {
    validateIsArray(item);
    item.sort((a, b) => a - b);
  })
}

const createDOMElem = ({ number, cssClass, container }) => {
  const numberElement = document.createElement('span');
  numberElement.classList.add(cssClass);
  numberElement.textContent = number;
  container.appendChild(numberElement);
}

const fillPageColumn = ({ array, cssClass, container }) => {
  validateIsArray(array);
  for (let i = 0; i < array.length; i++) {
    createDOMElem({ number: array[i], cssClass, container });
  }
}

const showNumbersOnPage = (arrEven, arrOdd) => {
  const container = document.querySelector('[data-numbers-container]');
  fillPageColumn({ array: arrEven, cssClass: 'numberEven', container });
  fillPageColumn({ array: arrOdd, cssClass: 'numberOdd', container });
}

const app = () => {
  try {
    generateNumbersGroups();
    sortArraysAsc(evenNumbers, oddNumbers);
    showNumbersOnPage(evenNumbers, oddNumbers);
  } catch (err) {
    alert(err.message);
  }
}

app();
