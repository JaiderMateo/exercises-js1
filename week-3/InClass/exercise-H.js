let claseEspañol = ["leon", "Giomar", "Emilio", "Antonio", "Juan", "Adrian",
 "Ronar", "Jaime", "Alexandra", "Lino", "Diego", "Diana", "Fode", "Manuel", "Angelo", "Carlos", "Jaider"];
 let nombre = "Carlos";
 function checkName(people, name1){

     if(people.includes(name1)){
         return "Found me!"
     }else{
         return "No found me!"
     }
    }
console.log(checkName(claseEspañol, nombre));