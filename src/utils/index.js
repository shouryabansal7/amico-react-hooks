export * from './constants';

export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error('Can not store in LS');
  }

  const valueToStore =
    typeof value !== 'string' ? JSON.stringify(value) : value;

  localStorage.setItem(key, valueToStore);
  return;
};

export const getItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('Cant get the value from LS');
  }

  return localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
  if (!key) {
    return console.error('Cant get the value from LS');
  }

  localStorage.removeItem(key);
  return;
};

export function getFormBody(params) {
  let fromBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123
    fromBody.push(encodedKey + '=' + encodedValue);
  }
  return fromBody.join('&'); // aakash 123 => aakash%2020123
}
