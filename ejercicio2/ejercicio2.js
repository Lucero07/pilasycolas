var nombres;

function Queue(){
  var items =[];
  this.enqueue = function(elemento){
    items.push(elemento);
  };
  this.dequeue = function(){
    return items.shift();
  };
  this.print=function(){
    document.write(items.toString());
  };
  this.size = function(){
    return items.length;
  };
}
var nombre = new Queue();
var apellido = new Queue();

for(var i=0; i<5; i++){
  nombre.enqueue(prompt("¿Cual es tu nombre? "));
  apellido.enqueue(prompt("¿Cual es tu apellido? "))
};
var largo = nombre.size();

nombres =new Queue();
for(var i=0;i<largo; i++){
nombres.enqueue(nombre.dequeue() + " "+ apellido.dequeue());
};
nombres.print();
