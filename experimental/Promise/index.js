


let promise = new Promise((resolve) =>{
	let x = 0;
		x++
		resolve(x)
}).then((value) =>{
		console.log(value)
		value++
		return value
}).then((value)=>{
		console.log(value)
		value++
		return value
}).then((value)=>{
		console.log(value)
		value++
		return value
}).then((value)=>{
		console.log(value)
		value++
		return value
}).then((value)=>{
		console.log(value)
})


let promise2 = new Promise((resolve)=>{
	let y = 0;
	resolve(y)
}).then((value)=> {
	return new Promise((resolve)=>{
	value++
	resolve(value) 
	console.log(value)
	})
}).then((value)=> {
	return new Promise((resolve)=>{
	value++
	resolve(value) 
	console.log(value)
	})
}).then((value)=> {
	return new Promise((resolve)=>{
	value++
	resolve(value) 
	console.log(value)
	})
}).then((value)=> {
	return new Promise((resolve)=>{
	value++
	resolve(value) 
	console.log(value)
	})
}).then((value)=> {
	return new Promise((resolve)=>{
	value++
	resolve(value) 
	console.log(value)
	})
})