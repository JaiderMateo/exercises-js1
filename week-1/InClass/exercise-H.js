function PorcentajeGrupo (gp, gt, ngp, ngt) {
    porcentaje = Math.round((ngp/ngt) * 100);
    //let frase = "hay un " + porcentaje + "% de " + gp + " en " + gt;
    let frase = `hay un ${porcentaje}% de ${gp} en ${gt}`;
    return frase;
}
let gt = "Personas en restaurente";
let gp = "camareros";
let ngp = 10;
let ngt = 20;
let frase = PorcentajeGrupo(gp,gt,ngp,ngt);
console.log(frase);