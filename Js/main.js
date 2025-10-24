let string = "Alex";           
let undefined1;                
let array = [1, 3, 6];           
let boolean = true;              
let number = 1;               
let nul = null;               
let object = { name: "Alex" };   

console.log("string:", typeof string);
console.log("null:", typeof nul);
console.log("number:", typeof number);
console.log("object:", typeof object);
console.log("boolean:", typeof boolean);
console.log("array:", typeof array);
console.log("undefined:", typeof undefined1);

let name = "Alex";
let age = 29;
let city = "Kiev";
console.log(`Привет, меня зовут ${name}\nМне ${age} лет\nЯ живу в городе ${city}`);

let number2 = prompt("Введите число 10369:");

if (number2 === "10369") {
  alert("Поздравляю!");
  let result = number2.split("").join(" ");
alert(result);
} 
else{alert("Введите число 10369")}




