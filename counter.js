const INITIAL_VALUE = 0;

export function setupCounter(element, clearButton) {
  let counter = localStorage.getItem('counter') || INITIAL_VALUE;

  const setCounter = (count) => {
    localStorage.setItem('counter', count);
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener('click', () => setCounter(++counter));
  setCounter(counter);

  clearButton.addEventListener('click', () => {
    localStorage.removeItem('counter');
    counter = INITIAL_VALUE;
    setCounter(counter);
  });
}

