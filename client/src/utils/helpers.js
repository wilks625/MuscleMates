export function numberFormat(number) {
  const newNumber = number.split('');
  const newString = `(${newNumber[0]}${newNumber[1]}${newNumber[2]}) ${newNumber[3]}${newNumber[4]}${newNumber[5]}-${newNumber[6]}${newNumber[7]}${newNumber[8]}${newNumber[9]}`
  return newString
}

export function calcAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  var ageNow = today.getFullYear() - birthDate.getFullYear();
  var month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) 
  {
      ageNow--;
  }
  console.log(ageNow);
  return ageNow;
}