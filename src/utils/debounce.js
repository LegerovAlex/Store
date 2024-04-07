export function debounce(func, delay) {
  let timeroutId;
  return function executedFunction(...args) {
    clearTimeout(timeroutId);
    timeroutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
