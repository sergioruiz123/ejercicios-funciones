function calificaciones(calificacion){
    if (calificacion< 60){
        return "F";
    }else if( calificacion >= 60 && calificacion<=69){
    
        return "D";
    }else if( calificacion >= 70 && calificacion<=79){
    
        return "C";

    }else if( calificacion >= 80 && calificacion<=89){
    
        return "B";

    }else{
        return "A";
    }
    
    
    
    }
    
    console.log("56"+ calificaciones(56));
    console.log("65"+ calificaciones(65));
    console.log("73"+ calificaciones(73));
    console.log("84"+ calificaciones(84));
    console.log("97"+ calificaciones(97));