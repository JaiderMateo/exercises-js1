let claseEspañol = ["leon", "Giomar", "Emilio", "Antonio", "Juan", "Adrian",
 "Ronar", "Jaime", "Alexandra", "Lino", "Diego", "Diana", "Fode", "Manuel", "Angelo", "Jaider"];

 let claseIngles = ["Adrian", "Ali", "Artur", "enia", "Giorgio", "Guido", "Henriette", "Keti", 
 "Kiki", "Kimberly", "Kris", "Manpreet", "Manuel", "Yogi"];


 console.log(claseEspañol.concat(claseIngles).sort());

 function searchName(nombre, array1, array2){
     if(array1.includes(nombre)){
         return ( nombre + " está en el grupo de español")
     }else if(array2.includes(nombre)){
         return (nombre + " está en el grupo de ingles")
     }else{
         return (nombre +" no está en niguna clase")
     }
 }
 console.log(searchName("Kris", claseEspañol, claseIngles));
 console.log(claseEspañol.map(toUpperCase));