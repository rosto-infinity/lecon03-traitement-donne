let string = "Hello World";
console.log(typeof (string)) // string;

let number = 42;
console.log(typeof (number)) // number;

let boolean = true;
console.log(typeof (boolean)) // boolean;


let object_null = null

console.log(object_null);

let array = [1, 2, 3, 4, 5];
console.log(typeof (array)) // object;

let nbre;
console.log(nbre) // undefined;


// Les tableaux

// ---tableaux- 01
let array2 = ["Bafou", "Batie", "Bafang", "Bamenda"];

console.log(array2[0][2]); // f

console.log(array2.length); // 4

// ---Object
let person = {
  name: "Bafou",
  age: 42,
  isTrue: true,
  city: "Bafang",
  country: "Cameroon",
  isNull: null
};

console.log(person.name);
console.log(person.country[1]);

let nom = 'Myra'
console.log(nom.length);

// ----tableaux- 02
let array3 = ["Bafou", 47, true, "Bafang", "Bamenda", null, {
  name: "Myra",
  age: 42,
}];

// affiche 42 ==
console.log(array3[7]);

//affiche Bamenda ==


//-------------- Les objts et plus
let objet = {
  firstname: "rosto",
  lastname: "dev",
  age: 29,
  technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
  admin: false
}

console.log(typeof (objet)); // object

// affiche la techno react
console.log(objet.technos[2]);

objet.adress = "Bafoussam";
console.log(objet);


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

console.log(data[2].technos);

//Les Structures de controle

if(data[0].age >data[1].age ){
  console.log(data[0].firstname + " est plus agé que " + data[1].firstname);
}else{
  console.log(data[0].firstname + " est plus jeune que " + data[1].firstname);
}