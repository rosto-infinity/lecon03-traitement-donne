let string = "Hello World";
// console.log(typeof (string)) // string;

let number = 42;
// console.log(typeof (number)) // number;

let boolean = true;
// console.log(typeof (boolean)) // boolean;


let object_null = null

// console.log(object_null);

let array = [1, 2, 3, 4, 5];
// console.log(typeof (array)) // object;

let nbre;
// console.log(nbre) // undefined;


// Les tableaux

// ---tableaux- 01
let array2 = ["Bafou", "Batie", "Bafang", "Bamenda"];

// console.log(array2[0][2]); // f

// console.log(array2.length); // 4

// ---Object
let person = {
  name: "Bafou",
  age: 42,
  isTrue: true,
  city: "Bafang",
  country: "Cameroon",
  isNull: null
};

// console.log(person.name);
// console.log(person.country[1]);

let nom = 'Myra'
// console.log(nom.length);

// ----tableaux- 02
let array3 = ["Bafou", 47, true, "Bafang", "Bamenda", null, {
  name: "Myra",
  age: 42,
}];

// affiche 42 ==
// console.log(array3[7]);

//affiche Bamenda ==


//-------------- Les objts et plus
let objet = {
  firstname: "rosto",
  lastname: "dev",
  age: 29,
  technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
  admin: false
}

// console.log(typeof (objet)); // object

// affiche la techno react
// console.log(objet.technos[2]);

objet.adress = "Bafoussam";
// console.log(objet);


// Stocké les données
let data = [
  {
    firstname: "rosto1",
    lastname: "dev1",
    age: 30,
    technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
    adress: "MarchéB",
    admin: false
  },
  {
    firstname: "rosto2",
    lastname: "dev2",
    age: 29,
    technos: ["Php", "NodeJs", "React", "Python", "Flutter"],
    admin: false
  },
  {
    firstname: "rosto3",
    lastname: "dev3",
    age: 32,
    technos: ["CSS", "NodeJs", "React", "Taillwindcss", "Flutter"],
    admin: true
  },
];

// console.log(data[2].technos);

//Les Structures de controle

if(data[0].age >data[1].age ){
  // console.log(data[0].firstname + " est plus agé que " + data[1].firstname);
}else{
  // console.log(data[0].firstname + " est plus jeune que " + data[1].firstname);
}

document.body.addEventListener("click", (e) => {
  console.log(e.target);

  if(e.target.id === "javascript"){
    document.body.style.background= "yellow";
  }else if(e.target.id === "php"){
    document.body.style.backgroundColor = "purple"; 
  }else if(e.target.id === "python"){
    document.body.style.backgroundColor = "blue";
  }else if(e.target.id === "laravel"){
    document.body.style.backgroundColor = "red";
  }
});



// Switch
document.body.addEventListener("click", (e) => {
  switch(e.target.id){
    case "javascript":
      document.body.style.backgroundColor = "yellow";
      break;
    case "php":
      document.body.style.backgroundColor = "purple";
      break;
    case "python":
      document.body.style.backgroundColor = "blue";
      break;
    case "laravel":
      document.body.style.backgroundColor = "red";
      break;
    default:
      document.body.style.backgroundColor = "white";
  }
});


//while

// let w=0;

// while(w<10){
//   w++;
//   console.log("la valeur de w est de " + w);
// }


//############### Methodes sur les tableaux en Javascript
// 1.push() : Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau.

let fruits1 = ["Banane", "Pomme"];
fruits1.push("Orange", "Fraise");
// console.log(fruits1);

// 2.pop() : Supprime le dernier élément d'un tableau et retourne cet élément.

let fruits2 = ["Banane", "Pomme", "Orange"];
fruits2.pop();
// console.log(fruits2);

// 3.shift() : Supprime le premier élément d'un tableau et retourne cet élément.

let fruits3 = ["Banane", "Pomme", "Orange"];

fruits3.shift();
// console.log(fruits3);

// 4.unshift() : Ajoute un ou plusieurs éléments au début d'un tableau et retourne la nouvelle longueur du tableau.

fruits3.unshift(0);
// length : Renvoie le nombre d'éléments dans un tableau
// console.log(fruits3.length);




// 5-join() : Rassemble tous les éléments d'un tableau dans une chaîne de caractères.
let fruits4 = ["apple", "banana", "orange"];
let energy = fruits4.join(); // "apple,banana,orange"

// 6-slice() : Extrait une section d'un tableau et renvoie un nouveau tableau.
let fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits5.slice(1, 3); // ["Orange", "Lemon"]

// 7-splice() : Ajoute ou supprime des éléments à/depuis un tableau.
let fruits6 = ["Banana", "Orange", "Apple", "Mango"];

// Supprime un élément à partir de l'index 2

let removedItem = fruits6.splice(2, 1); // this is how to remove an item

// ["Banana", "Orange", "Mango"]

// Ajoute à partir de l'index 2
fruits6.splice(2, 0, "Lemon", "Kiwi"); // ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]

// 8-concat() : Fusionne deux ou plusieurs tableaux.
let fruits7 = ["Banana", "Orange"];
let vegetables = ["Tomato", "Potato"];
let fruitsAndVegetables = fruits7.concat(vegetables); // ["Banana", "Orange", "Tomato", "Potato"] 

// 9-reverse() : Inverse les éléments d'un tableau. 
let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.reverse(); // ["Mango", "Apple", "Orange", "Banana"]

// 10-sort() : Trie les éléments d'un tableau.
let fruits9 = ["Banana", "Orange", "Apple", "Mango"];

// Trie les éléments d'un tableau
fruits9.sort(); // ["Apple", "Banana", "Mango", "Orange"]

// 11-fill() : Remplit tous les éléments d'un tableau avec une valeur statique.
let fruits10 = ["Banana", "Orange", "Apple", "Mango"];

// Remplit tous les éléments d'un tableau avec une valeur statique
fruits10.fill("Kiwi"); // ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]

// 12-Array.isArray() : Détermine si la valeur passée est un tableau.
Array.isArray(fruits10); // true

// 13-Array.from() : Crée une nouvelle instance Array à partir d'un objet itérable.
Array.from("foo"); // ["f", "o", "o"]

// 14-Array.of() : Crée une nouvelle instance Array avec un nombre variable d'arguments, indépendamment du nombre ou du type des arguments.
Array.of(7); // [7]

// 15-Array.prototype.entries() : Renvoie un nouvel objet Array Iterator qui contient les paires clé/valeur pour chaque index dans le tableau.
let fruits11 = ["Banana", "Orange", "Apple", "Mango"];
let f = fruits11.entries();

// 16-Array.prototype.keys() : Renvoie un nouvel objet Array Iterator qui contient les clés pour chaque index dans le tableau.          
let fruits12 = ["Banana", "Orange", "Apple", "Mango"];

let f1 = fruits12.keys();

// 17-Array.prototype.values() : Renvoie un nouvel objet Array Iterator qui contient les valeurs pour chaque index dans le tableau.
let fruits13 = ["Banana", "Orange", "Apple", "Mango"];

let f2 = fruits13.values();

// 18-Array.prototype.indexOf() : Recherche l'élément dans le tableau et renvoie son index.
let fruits14 = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits14.indexOf("Apple"); // 2

// 19-Array.prototype.lastIndexOf() : Recherche l'élément dans le tableau, en partant de la fin, et renvoie son index.
let fruits15 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let a1 = fruits15.lastIndexOf("Apple"); // 4

// 20-Array.prototype.includes() : Détermine si un tableau contient une certaine valeur parmi ses entrées, renvoyant true ou false selon le cas.
let fruits16 = ["Banana", "Orange", "Apple", "Mango"];
let a2 = fruits16.includes("Mango"); // true

// 21-Array.prototype.find() : Renvoie la première valeur qui satisfait la fonction de test fournie.
let ages = [3, 10, 18, 20];
let a3 = ages.find(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// 22-Array.prototype.findIndex() : Renvoie l'index de la première valeur qui satisfait la fonction de test fournie.
let ages1 = [3, 10, 18, 20];
let a4 = ages1.findIndex(checkAdult);

// 23-Array.prototype.filter() : Crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.
let ages2 = [32, 33, 16, 40];
let a5 = ages2.filter(checkAdult);

// 24-Array.prototype.map() : Crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau.
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt); // [1, 2, 3]

// 25-Array.prototype.reduce() : Applique une fonction contre un accumulateur et chaque élément dans le tableau (de gauche à droite) pour réduire à une seule valeur.

let total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}); // 6

// 26-Array.prototype.reduceRight() : Applique une fonction contre un accumulateur et chaque élément dans le tableau (de droite à gauche) pour réduire à une seule valeur.
let total1 = [0, 1, 2, 3].reduceRight(function (a, b) {
  return a + b;
}); // 6

// 27-Array.prototype.every() : Teste si tous les éléments du tableau passent le test implémenté par la fonction fournie.
let ages3 = [32, 33, 16, 40];
let a6 = ages3.every(checkAdult);

// 28-Array.prototype.some() : Teste si au moins un élément du tableau passe le test implémenté par la fonction fournie.
let ages4 = [3, 10, 18, 20];
let a7 = ages4.some(checkAdult);

// 29-Array.prototype.fill() : Remplit tous les éléments d'un tableau avec une valeur statique.
let fruits17 = ["Banana", "Orange", "Apple", "Mango"];
fruits17.fill("Kiwi"); // ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]

// 30-Array.prototype.copyWithin() : Copie une séquence d'éléments dans le tableau à partir de la position de départ et les copie dans la position de destination.
let fruits18 = ["Banana", "Orange", "Apple", "Mango"];
fruits18.copyWithin(2, 0); // ["Banana", "Orange", "Banana", "Orange"]

// console.log(fruits18);



//Méthodes sur les chaînes de caractères en JavaScript
// 1-length :Renvoie la longueur d'une chaîne
let texte = "Bonjour";
let longueur = texte.length; // 7

// 2-charAt() : Renvoie le caractère à une position spécifiée.
let texte1 = "Hello";

let resultat = texte1.charAt(0); // "H"

// 3-charCodeAt() : Renvoie le code Unicode du caractère à une position spécifiée.
let texte2 = "Hello";

let resultat1 = texte2.charCodeAt(0); // 72

// 4-concat() : Joint deux ou plusieurs chaînes de caractères.
let texte3 = "Hello";
let resultat2 = texte3.concat(" ", "World"); // "Hello World"

// 5-endsWith() : Détermine si une chaîne de caractères se termine par les caractères d'une autre chaîne de caractères, renvoyant true ou false selon le cas.
let texte4 = "Hello World";
let resultat3 = texte4.endsWith("World"); // true

// 6-fromCharCode() : Convertit les valeurs Unicode en caractères.
let resultat4 = String.fromCharCode(72, 69, 76, 76, 79); // "HELLO"

// 7-includes() : Détermine si une chaîne de caractères contient les caractères d'une autre chaîne de caractères, renvoyant true ou false selon le cas.
let texte5 = "Hello World";
let resultat5 = texte5.includes("World"); // true

// 8-indexOf() : Renvoie l'index de la première occurrence d'un texte spécifié dans une chaîne de caractères.

let texte6 = "Hello World";
let resultat6 = texte6.indexOf("World"); // 6

// 9-lastIndexOf() : Renvoie l'index de la dernière occurrence d'un texte spécifié dans une chaîne de caractères.
let texte7 = "Hello World";
let resultat7 = texte7.lastIndexOf("World"); // 6

// 10-match() : Recherche une correspondance dans une chaîne de caractères avec une expression régulière.
let texte8 = "The rain in SPAIN stays mainly in the plain";
let resultat8 = texte8.match(/ain/g); // ["ain", "ain", "ain"]

// 11-repeat() : Renvoie une nouvelle chaîne de caractères, contenant le nombre de copies spécifié d'une chaîne de caractères.
let texte9 = "Hello World";
let resultat9 = texte9.repeat(2); // "Hello WorldHello World"

// 12-replace() : Recherche une correspondance dans une chaîne de caractères avec une expression régulière, et remplace la correspondance par une chaîne de remplacement.
let texte10 = "Hello World";
let resultat10 = texte10.replace("World", "There"); // "Hello There"

// 13-search() : Recherche une correspondance dans une chaîne de caractères avec une expression régulière, et renvoie la position de la correspondance.
let texte11 = "Hello World";
let resultat11 = texte11.search("World"); // 6


// 14-toUpperCase() : Convertit une chaîne de caractères en majuscules.
let texte12 = "Hello World";
let resultat12 = texte12.toUpperCase(); // "HELLO WORLD"

// 15-toLowerCase() : Convertit une chaîne de caractères en minuscules.
let texte13 = "Hello World";

let resultat13 = texte13.toLowerCase(); // "hello world"

// 16-slice() : Extrait une partie d'une chaîne de caractères et renvoie la partie extraite dans une nouvelle chaîne.
let texte14 = "Hello World";
let resultat14 = texte14.slice(0, 5); // "Hello"

// 17-split() : Divise une chaîne de caractères en un tableau de sous-chaînes.
let texte15 = "Hello World";
let resultat15 = texte15.split(" "); // ["Hello", "World"]

// 18-startsWith() : Détermine si une chaîne de caractères commence par les caractères d'une autre chaîne de caractères, renvoyant true ou false selon le cas.
let texte16 = "Hello World";
let resultat16 = texte16.startsWith("Hello"); // true

//text-typing 

// LES DATES


const date1 = new Date();
// console.log(date1);

const date2 = new Date("2025-01-31");
// console.log(date2);

const date3 = new Date();
const year =date3.getMinutes()
console.log(year);


//Format ISO en date

// YYY-MM-DDTHH:MM:SSZ

let date4 = new Date();
let date5 = new Date();

const isoDate4 = date4.toISOString();
const isoDate5 = date4.toLocaleDateString();
 console.log(isoDate5);






