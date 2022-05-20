
//PAREMTRO REST
function suma(a,b){
     
    return a+b;
}

//alert(suma(1,2,3,4,5,6,7));


function sumaAll(...args){
    let suma=0;
    for (let arg of args) suma+=arg
    return suma
        
    
}


function ShowName(firstName, Lastname, ...info){
alert(firstName+" "+Lastname);

for (let iterator of info) {

    alert(iterator);
}

}
ShowName("Andres", "Agudelo", "hola", 1, true);


//alert (sumaAll(1,4,8,7,9))


//Operador Spread
let arreglo=[3,5,1];
alert(Math.max(arreglo[0],arreglo[1]))

alert([...string])