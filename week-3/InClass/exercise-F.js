function func (birthYear){
    if(2021 - birthYear >= 17){
        return `nacido en ${birthYear} puede conducir`
    }else{
        return `nacido en ${birthYear} no puede conducir`
    }}
    let years = [1964, 2008, 1999, 2005, 1978,1985, 1919];
    let ages = years.map(func);
    console.log(ages);