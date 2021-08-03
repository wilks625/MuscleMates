export function numberFormat(number) {
  const newNumber = number.split('');
  const newString = `(${newNumber[0]}${newNumber[1]}${newNumber[2]}) ${newNumber[3]}${newNumber[4]}${newNumber[5]}-${newNumber[6]}${newNumber[7]}${newNumber[8]}${newNumber[9]}`
  return newString
}

export function mapTrueActivities(object) {
    const result = Object.keys(object).map((key) => String(key));
    result.shift();
    return result
}

export function mapAllActivities(object) {
  const data = Object.value(object);
  return data
}