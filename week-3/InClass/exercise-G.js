function func (birthYear){
    return (2021 - birthYear >= 17)
}
let years = [1964, 2008, 1999, 2005, 1978,1985, 1919];
let ages = years.filter(func);
console.log("estos son las edades que pueden conducir", ages);