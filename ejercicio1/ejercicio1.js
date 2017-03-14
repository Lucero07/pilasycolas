var nombres;

function Stack(){
  var items =[];
  this.push = function(elemento){
    items.push(elemento);
  };
  this.pop = function(){
    return items.pop();
  };
  this.print=function(){
    document.write(items.toString());
  };
  this.size = function(){
    return items.length;
  };
}
var nombre = new Stack();
var apellido = new Stack();

for(var i=0; i<5; i++){
  nombre.push(prompt("¿Cual es tu nombre? "));
  apellido.push(prompt("¿Cual es tu apellido? "))
};
var largo = nombre.size();


//  var nombre = new Stack();
//  nombre.push("Brenda");
//  nombre.push ( "Lucero");
//  nombre.push ( "Gaby");
//  nombre.push ( "Luz");
//  nombre.push ( "Lili");
// nombre.print();
//
//  var apellido = new Stack();
//  apellido.push("Gutierrez");
//  apellido.push ("Ramos");
//  apellido.push ("Perez");
//  apellido.push("Rosas");
//  apellido.push("Perez")
//  apellido.print();

nombres =new Stack();
for(var i=0;i<largo; i++){
nombres.push(nombre.pop() + " "+ apellido.pop());
};
nombres.print();
