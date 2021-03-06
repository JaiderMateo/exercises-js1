function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }
//const yourFunc = (name) =>  name.toLowerCase()
//console.log(abracaFunction(yourFunc));

 //let newArray = abracaArray.map(yourfunc => yourfunc.toUpperCase() )
 
 //let yourFunc = abracaArray.map(function (nombre)  nombre.toUpperCase())

  
const yourFunc = (a) => a.map( (name) => name.toUpperCase())
 console.log(abracaFunction(yourFunc));
