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
  
  const yourFunc = function f (a){
      return a.map(
          function g (name){
              return name.toUpperCase()
            }
            )
  }
console.log(abracaFunction(yourFunc));