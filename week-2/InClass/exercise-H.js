function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}
for(let i = 0; i < 20; i++){
  if(isEven(i)){
    console.log(exponential(i))
  }
}