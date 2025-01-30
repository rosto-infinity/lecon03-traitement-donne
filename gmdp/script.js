const dataLowercase ="azertyuiopqsdfghjklmwxcvbn";
const dataUppercase =dataLowercase.toUpperCase();
const dataNumbers ='0123456789';
const dataSymbole ="{} ''[]()\" \" |\^@%*§$£€¤&/()=?+-.:,;_!<>#";

const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

// document.addEventListener('click', (e)=> {
//   console.log(e.target.id);
// })

function generatePassword() {
  let data = [];
// if(lowercase.cheched)data.push(dataLowercase)

  if (lowercase.checked) {

    // data.push(dataLowercase)
      for (let item of dataLowercase) {
          data.push(item);
      }
  }
  
  if (uppercase.checked) {
    // data.push(dataUppercase)

      for (let item of dataUppercase) {
          data.push(item);
      }
  }
  
  if (numbers.checked) {
      for (let item of dataNumbers) {
          data.push(item);
      }
  }
  
  if (symbols.checked) {
      for (let item of dataSymbole) {
          data.push(item);
      }
  }
  


  console.log(data);
  
}
generateButton.addEventListener('click', generatePassword);




// lowercase.checked ? data.push(dataLowercase) : null;

// if(lowercase.checked){
//  data = data.push(dataUppercase);
// }else{
//   data=null;
// }

