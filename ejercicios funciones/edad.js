function edades(edad){
if (edad< 13){
    return "niño";
}else if( edad >= 13 && edad<18){

    return "adolescente";
}else if( edad >= 19 && edad<64){

    return "adulto";
}else{
    return "mayor";
}



}

console.log("10"+ edades(10));
console.log("17"+ edades(17));
console.log("24"+ edades(24));
console.log("70"+ edades(70));