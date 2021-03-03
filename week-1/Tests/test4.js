let count = 8;
while(count != 0){
    console.log(count);
    count = count - 1;
}


let n = 10;

function sumTillNum(num) {
	//your code here
	let suma = [];
	for (let num = 0; num <= 10; num++) {
		suma.push(num);
	}

	return suma.join(" + ");
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


