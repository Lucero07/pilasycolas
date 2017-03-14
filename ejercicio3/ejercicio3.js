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
var cantidad= parseInt(prompt("¿Cuantas personas quieres enlistar?"));
var nombre = new Queue();
var apellido = new Queue();

for(var i=0; i<cantidad; i++){
  nombre.enqueue(prompt("¿Cual es el nombre de la persona " + (i+1) + "? "));
  apellido.enqueue(prompt("¿Cual es el apellido de la persona " + (i+1) + "? "))
};
var largo = nombre.size();

nombres =new Queue();
for(var i=0;i<largo; i++){
nombres.enqueue("Turno "+ (i+1)+ ": "+nombre.dequeue() + " "+ apellido.dequeue()+ "\n");
};
nombres.print();
