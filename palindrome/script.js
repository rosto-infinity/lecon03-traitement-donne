function estPalindrome(){
  let mot = prompt("entrer un mot:");
  mot = mot.toLowerCase();
 
  aba
  let debut =0;
   let fin = mot.length - 1;

   while (debut <fin ){
       if (mot [debut] !== mot[fin]){
           alert("le mot n'est un palindrome.");
           return;
       }
       debut++;
       fin--;
   }

  document.write(`le mot ou phrase ${mot} est un palindrome!`);
}
estPalindrome();