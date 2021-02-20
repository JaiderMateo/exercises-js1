function PorcentajeGrupo (gp, gt, ngp, ngt) {
    porcentaje = Math.round((ngp/ngt) * 100);
    frase = `hay un ${porcentaje}% de ${gp} en ${gt}`;
    return frase;
}
let gt = prompt("Please enter a value:")
console.log(gt);
console.log("digite el nombre del conjunto menor");
console.log("digite el numero del grupo mayor o total");
console.log("digite el numero del grupo menor");
