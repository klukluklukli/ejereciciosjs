
// var x = 'salu2';
// var y = 323;
// var z = true;
//
// var arreglo = ['Marco', 'Lo que sea', 'uwu'];
// var obj = {};
//
// var w = arreglo;
// w = 'Pan';
// arreglo = 'Leche';
//
// console.log(arreglo);
// console.log(w);

// var pepe = {};
//
// function ejemplo(amigos) {
//   pepe.mates = amigos;
// }
//
// ejemplo(['hola', 'soy', 'tu amigo']);
//
// console.log(pepe);



// var x = 0;
// console.log(x);
// var y = 1;
// var z = 1;
//
// for (var i = 0; i < 30; i++) {
//   console.log(z);
//   z = x + y;
//   x = y;
//   y = z;
// }
//
// console.log('z es igual a' +z);

// function esPalindromo(cadena) {
//   for (var i = 0; i < cadena.length; i++) {
//     var n = i + 1;
//     console.log(cadena[i] == cadena[cadena.length - n]);
//     if (cadena[i] != cadena[cadena.length - n]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log('es palindromo? ' + esPalindromo('rapar'));

// function ejemplo2() {
//   for (var i = 0; i < 4; i++) {
//     console.log(i);
//     if (i > 5) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(ejemplo2());

// function siglo(year) {
//   return Math.floor(parseInt(year)/100)+1
// }
//
// console.log(siglo('1997'));

// function productoAdyacente(arreglo) {
//   var x = arreglo[0]*arreglo[1];
//   for (var i = 0; i < arreglo.length - 1; i++) {
//     var y = arreglo[i]*arreglo[i+1];
//     if (y > x) {
//       x = y;
//     }
//   }
//   return x;
// }
//
// var ggg = [-23, 4, -3, 8, -12];
// console.log(productoAdyacente(ggg));

/*
  input => [2, -1, 5, -3, 9]
  output => [-3, -1, 2, 5, 9]

            1    0   2
  input => [8, -20, 10]
  output => [-20 ,8, 10]
*/

function sortArray(arreglo){
  var r = Object.assign([], arreglo)
  for (var i = 0; i < arreglo.length; i++) {
    var cuenta = 0;
    for (var j = 0; j < arreglo.length; j++) {
      if (arreglo[i] > arreglo[j]) {
        cuenta++;
      }
    }
    console.log('cuenta ' + cuenta + ', ' + arreglo[i]);
    r[cuenta] = arreglo[i];
  }
  return r;
}

console.log(sortArray([5, 2, 6, 10, 666]));

















//
