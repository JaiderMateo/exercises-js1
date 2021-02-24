function MyAge(edad, nombre, añoActual){
    let añoNacimiento =añoActual - edad;
    let mensaje = "Tu nombre es " + nombre + " y naciste en el" + añoNacimiento;
    return mensaje;
}
const nombre = "Jaider Mateo";
const edad = 18;
let añoActual = 2021;
console.log(MyAge(edad, nombre, añoActual));