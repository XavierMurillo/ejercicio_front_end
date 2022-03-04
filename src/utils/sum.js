function sum(...values){
    return values.reduce((acc,valor)=>acc+valor);
}
//Imrpime datos de la suma
var MyArray = [1,2,3,4,5,6];
console.log(sum(...MyArray) + " Suma desde la función sum");
//console.log(...MyArray);

export default sum;  