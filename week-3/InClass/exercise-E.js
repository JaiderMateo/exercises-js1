function func (birthYear){
return 2021 - birthYear;}
let years = [1964, 2008, 1999, 2005, 1978,1985, 1919];
let ages = years.map(func);
console.log(ages);