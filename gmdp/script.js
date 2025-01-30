const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbole = "{} ''[]()\" \" |\^@%*§$£€¤&/()=?+-.:,;_!<>#";
const rangeValue = document.getElementById('passwordlength');
const passwordOutput = document.getElementById('password-output');

function generatePassword() {
  let data = [];
  let password = "";
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbole);

  if(data.length===0){
    alert('Veuillez sélectionnez des critères');
    return;
  }
  
  for (i = 0; i < rangeValue.value; i++) {
    password = password + data[Math.floor(Math.random() * data.length)];
    passwordOutput.value = password;
  }
}
generateButton.addEventListener('click', generatePassword);




// lowercase.checked ? data.push(dataLowercase) : null;

// if(lowercase.checked){
//  data = data.push(dataUppercase);
// }else{
//   data=null;
// }

