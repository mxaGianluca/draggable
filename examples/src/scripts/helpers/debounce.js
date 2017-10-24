// Debounce
// -----------------------------------------------------------------------------
export function debounce(callback, wait) {
  let timeout = null;

  return function(...args) {
    const context = this; // eslint-disable-line consistent-this, babel/no-invalid-this

    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}


export const duration = 60 * 6;
