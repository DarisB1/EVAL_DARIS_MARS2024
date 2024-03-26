// ## Exercice 1.

// Écrivez une fonction `isString` qui prend un parametre `myString`. Cette fonction vérifie si ce parametre est une string (chaîne de caractèes).  La fonction retourne vrai si c'est une string et faux dans le cas contraire.

// Vous devez utiliser `typeof` au sein de cette fonction

// function isString(myString) {}

// isString("Marc"); // true
// isString(2); // false

// ## Exercice 2

// Écrivez une fonction `greetings` qui prend un paramètre `isStudent`. Ce paramètre est un booléen. S'il vaut `true` alors le message "Bienvenue cher élève" doit s'afficher. Sinon, le message "Bienvenue cher parent" s'affiche.

// function greetings(isStudent) {
//   if (isStudent === true) {
//     console.log("Bienvenue cher élève");
//   } else if (isStudent === false) {
//     console.log("Bienvenue cher parent");
//   }
// }
// greetings(true);

// ## Exercice 3

// Écrivez une fonction `checkWord` qui prend un paramètre `word`. Ce paramètre est une `string`. Si ce paramètre contient moins de 3 caractères, alors le message **Ce mot est trop court** doit s'afficher. Sinon, la fonction affiche **Le mot ${word} est tout à fait correct**.

// function checkWord(word) {
//   if (word.length <= 3) {
//     console.log("Ce mot est trop court");
//   } else {
//     console.log(" Le mot " + word + " est tout à fait correct");
//   }
// }

// checkWord("chat");

// ## Exercice 4

// Écrivez une fonction `makeSum` qui prend deux paramètres `number1` et `number2`. Ces deux paramètres sont des nombres. Cette fonction retourne la `sum` de deux paramètres.

// function makeSum(number1, number2) {
//   console.log(number1 + number2);
// }

// makeSum(1, 5);
// ## Exercice 5

// Écrivez une fonction `makeSumFromArray` qui prend un paramètre `numbers`. Ce paramètre est un tableau de nombres. Cette fonction retourne la somme de tous les nombres du tableau. Vous devez obligatoirement utiliser une boucle `for`.

// function makeSumFromArray(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] + result;
//     console.log(numbers[i] + result);
//   }
// }
// makeSumFromArray([1, 2, 3, 5]);

// ## Exercice 11

// Écrivez une fonction `mergeArray` qui prend deux paramètres `array1` et `array2`. Ces deux paramètres sont des tableaux de type number. Cette fonction retourne un tableau contenant les deux paramètres fusionnés. Vous devez obligatoirement utiliser une boucle `for`. Vous ne devez pas utiliser une méthode `contact`

// function mergeArray(array1, array2) {
//   let T = [];
//   T.push(array1 + "," + array2);
//   console.log(T);
// }
// mergeArray([1, 3, 2], [4, 1, 3, 2]);

// ## Exercice 8

// Écrivez une fonction `concatString` qui prend un paramètre `arrayOfStrings`. Ce paramètre est un tableau contenant des strings. Cette fonction retourne une string concaténant l'ensemble des strings contenant dans le tableau `arrayOfStrings`. Vous devez obligatoirement utiliser une boucle `for`.

// function concatString(arrayOfStrings) {
//   let result = "";
//   for (let i = 0; i < arrayOfStrings.length; i++) {
//     arrayOfStrings[i] + result;
//     console.log([arrayOfStrings[i] + result].join(""));
//   }
// }

// concatString(["Un", " ", "code", " ", "de", " ", "qualité"]); // "Un code de qualité"
