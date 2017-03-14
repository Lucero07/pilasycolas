function Calculadora(){
  var items =[];

  this.suma = function sumar(numero1, numero2) {
  	 return (parseInt(numero1) + parseInt(numero2));
  };

  this.resta = function restar(numero1, numero2) {
     return (parseInt(numero1) - parseInt(numero2));
  };

  this.multiplicar = function multiplicar(numero1, numero2) {
  	 return (parseInt(numero1) * parseInt(numero2));
  };

  this.dividir = function dividir(numero1, numero2) {
  	 return (parseInt(numero1) / parseInt(numero2));
  };
}

var cantidad= parseInt(prompt("¿cuantos numeros quieres intresar?"));
var resultado= new Calculadora();
for(var i=0; i<cantidad; i++){
  resultado.suma(parseInt(prompt("¿Cual es tu numero " + (i+1) + "? ")));
};
console.log(resultado);

//   this.dequeue = function(){
//     return items.shift();
//   };
//   this.print=function(){
//     document.write(items.toString());
//   };
//   this.size = function(){
//     return items.length;
//   };
// }
