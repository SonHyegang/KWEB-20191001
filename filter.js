let condition = (num) =>{
	if(num%2===0)
		return true;
	return false;
}
let filter = (array, conditionFunc) =>{
	let arr = [];
	for(value of array){
		if(conditionFunc(value))
			arr.push(value);
	}
	console.log(arr);
}

console.log(filter([1, 3, 4, 6, 7], condition));
console.log(filter([0, 2, 4, 6, 7], condition));
console.log(filter([-1, 3, 5, 9], condition));

console.log(filter([1, 3, 4, 6, 7], n => n%2===0));
console.log(filter([0, 2, 4, 6, 7], (n) => { return n%2===0 ? true : false; }));
console.log(filter([-1, 3, 5, 9], (n) => (n%2===0 ? true : false)));