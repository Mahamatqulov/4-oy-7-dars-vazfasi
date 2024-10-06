// 26-misol
// function tubSonmi(son) {
//   if (son <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(son); i++) {
//     if (son % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let son = prompt("son kiriting");
// let natija = tubSonmi(son);
// console.log(natija);

//27-misol
// function checkEquality(number, string) {
//   return number === string;
// }
// let number = prompt("son yoki so'z kiriting");
// let string = prompt("son yoki so'z kiriting");
// let natija = checkEquality(number, string);
// console.log(natija);

//28-misol
// function booleanToString(bool) {
//   return String(bool);
// }
// console.log(booleanToString(true));
// console.log(booleanToString(false));

// 29-misol
// function berilganQiymat(berilgan) {
//   return berilgan;
// }
// let berilgan = prompt("nimdir kiriting");
// console.log(berilgan);

//30-misol
// bu savolga tushunmadim

//31-misol
// function calc(str) {
//   return eval(str);
// }
// let sonlar = prompt("misolni kiriting");
// let natija = calc(sonlar);
// console.log(natija);

// 32-misol

// function teng10(a, b) {
//   return a === 10 || b === 10 || a + b === 10;
// }
// let a = Number(prompt("a sonini kiriting"));
// let b = Number(prompt("b sonini kiriting"));
// let natija = teng10(a, b);
// console.log(natija);

// 33-misol
// function litrMasofa(km) {
//   return km * 10;
// }
// let km = prompt("necha km yurmoqchusiz");
// let natija = litrMasofa(km);
// console.log("sizga  " + natija + " lirt benzin kerak boladi ");

// 34-misol
// function fun(x, y) {
//   return x > y ? x : y;
// }
// let x = prompt("son kiriting");
// let y = prompt(" ikki sonni kiriting");
// let natija = fun(x, y);
// console.log(natija);

// 35-misol
// function arr(x, y) {
//   return x, y;
// }
// let x = prompt("son kiriting");
// let y = prompt("ikki son kiring");
// console.log([x, y]);

// 36-misol
// function tengStrings(str1, str2) {
//   return str1.length === str2.length;
// }

// let str1 = prompt("nimadir kiriting");
// let str2 = prompt("nimadir kiriting");
// let natija = tengStrings(str1, str2);
// console.log(natija);

// 37-misol
// function boshStr(str) {
//   return str === "";
// }
// let str = prompt("nima kiriting yoki kiritmay");
// let natija = boshStr(str);
// console.log(natija);

// 38-misol
// function bolinadimi5ga(x) {
//   return x % 5 == 0;
// }

// let x = prompt("son kiriting");
// let natija = bolinadimi5ga(x);
// console.log(natija);

// 39-misol
// function bolinsin100(x) {
//   return x % 100 == 0;
// }
// let x = prompt("son kiriting");
// let natija = bolinsin100(x);
// console.log(natija);

// 40-misol
// function uzunlik(str) {
//   if (str === "") {
//     return 0;
//   } else {
//     return 1 + uzunlik(str.slice(1));
//   }
// }
// let str = prompt("nimadir yozing");
// let natija = uzunlik(str);
// console.log(natija);

// 41-misol
// function bolinsin(x, y) {
//   return x % y == 0;
// }

// let x = prompt("x sonini kiriting");
// let y = prompt(
//   "y sonini kiriting ,kiritilgan son x sonidan kichik bolishi shart"
// );
// let natija = bolinsin(x, y);
// console.log(natija);

// 42-misol
// function raqam(x) {
//   return x;
// }
// let x = prompt("son kiriting");
// let natija = raqam(x);
// console.log(natija);

// 43-misol
// function tortYuzi(a, b) {
//   if (a > 0 && b > 0) {
//     return a * b;
//   } else {
//     return -1;
//   }
// }
// let a = Number(prompt("a sonini kiriting"));
// let b = Number(prompt("b sonini kiriting"));
// let natija = tortYuzi(a, b);
// console.log(natija);

// 44-misol
// function ismFam(ism, fam) {
//   return ism, fam;
// }
// let ism = prompt("isminggizni kiriting");
// let fam = prompt("Familiyangizni kiriting");
// console.log(fam, ism);

// 45-misol
// savolga tushunmadim

// 46-misol
// function tushirMassiv(arr, tushirishSoni) {
//     return arr.slice(tushirishSoni);
// }
// console.log(tushirMassiv([1, 2, 3], 1));
// console.log(tushirMassiv([1, 2, 3], 2));
// console.log(tushirMassiv([1, 2, 3], 0));
// console.log(tushirMassiv([1, 2, 3], 3));

// 47-misol
// buni ishlay olmadim

// 48-misol
// function negativ(son) {
//   return -Math.abs(son);
// }
// let son = prompt("son kiriting");
// let natija = negativ(son);
// console.log(natija);

// 49-misol
// function alamsh(arr) {
//   let teskari = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     teskari.push(arr[i]);
//   }
//   return teskari;
// }
// let arr = prompt("Sonlarni kiriting (vergul bilan ajrating):").split(",");
// let natija = alamsh(arr);
// console.log(natija);

// 50-misol
//  buni ishlay olmadim

// 51-misol
// var ism = prompt("isminggizni kiriting");
// var familiya = prompt("familiyangizni kiriting");
// var natija = `${ism} ${familiya}`;

// console.log(natija);

// 52-misol
// 53-misol
// 54-misol
// bularni ishlay olmadim

// 55-misol
// function daraja(x, y) {
//   return x ** y;
// }
// let x = prompt("son kiriting");
// let y = prompt("darajani kiriting");
// let natija = daraja(x, y);
// console.log(natija);

// 56-misol
// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(songiElement([1, 2, 3]));
// console.log(songiElement(["cat", "dog", "duck"]));
// console.log(songiElement([true, false, true]));

// 57-misol
// function kabisaYili(yil) {
//   if (yil % 4 === 0) {
//     if (yil % 100 === 0) {
//       return yil % 400 === 0;
//     }
//     return true;
//   }
//   return false;
// }
// let yil = prompt("yilni kiriting");
// let natija = kabisaYili(yil);
// console.log(natija);

// 58-misol
// function soz(word) {
//   return word.slice(1);
// }
// let word = prompt("soz kiriting");
// let natija = soz(word);
// console.log(natija);

// 59-misol

// 60-misol
// function juftMiToqmi(son) {
//   if (son % 2 === 0) {
//     return "juft";
//   } else {
//     return "toq";
//   }
// }
// let son = prompt("son kiriting");
// let natija = juftMiToqmi(son);
// console.log(natija);
