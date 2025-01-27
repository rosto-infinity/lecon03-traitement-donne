let string ="Hello World";
console.log(typeof(string)) // string;

let number = 42;
console.log(typeof(number)) // number;
 
let boolean = true;
console.log(typeof(boolean)) // boolean;


let object_null =null

console.log(object_null);

let array = [1,2,3,4,5];
console.log(typeof(array)) // object;

let nbre;
console.log(nbre) // undefined;


// Les tableaux

// ---tableaux- 01
let array2 = ["Bafou","Batie","Bafang","Bamenda"];

console.log(array2[0][2]); // f

console.log(array2.length ); // 4

// ---Object
let person= {
    name: "Bafou",
    age: 42,
    isTrue: true,
    city: "Bafang",
    country: "Cameroon",
    isNull: null
};

console.log(person.name); 
console.log(person.country[1]); 

let nom ='Myra'
console.log(nom.length); 

// ----tableaux- 02
let array3 = ["Bafou",47,true ,"Bafang","Bamenda",null,{
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