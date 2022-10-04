    
# Promise in Javascript exercises

## 1.	
	Use Promise.resolve(value) to create a promise that will resolve with the value 3.
	
	Ex: function makePromiseResolveWith3(){
	/* implement here */
	}
	
## 2.	
	Use Promise.reject(error) to create a promise that will reject with the string "Boo!"
	
	Ex: function makePromiseRejectWithBoo(){
	/* implement here */
	}
	
## 3.	
	You have the outline of a function makePromiseWithConstructor(itShouldResolve)
	Use the Promise constructor to create a promise that will:
	•	resolve if itShouldResolve is truthy
	•	reject if itShouldResolve is falsy
	Ex: function makePromiseWithConstructor (itShouldResolve){
	/* implement here */
	}
	/* console.log here*/

## 4.	
	You going to create a promise representing ordering sunglasses from an online store. 
	First, create the function, myExecutor(). 
	Later on, you’ll pass this function into the Promise constructor.
	myExecutor() should:
	-	Have two parameters: resolve and reject
	-	Check if the sunglasses property on the inventory object has a value greater than zero
	-	If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
	-	If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'

	const inventory = {
	  sunglasses: 1900,
	  pants: 1088,
	  bags: 1344,
	};
	Results => 'Sunglasses order processed’

	Ex: const myDemoExecutor = (resolve, reject) => {
		/* implement here */
	 };
	const myDemoPromise = new Promise(myDemoExecutor);
	/* console.log here*/

## 5.	
	Write a function controlAllPromises that takes an array of promises 
	and returns the return values of all the completed promises in the provided array. 

	Ex:
	const promise1 = new Promise((resolve, reject) => resolve("promise 1"));
	const promise2 = new Promise((resolve, reject) => resolve("promise 2"));
	const arrayOfPromises = [promise1, promise2];
	function controlAllPromises(arrayOfPromises) {
	  // Your solution here
	}
	controlAllPromises(arrayOfPromises);
	

## 6.	
	Sometimes you will want to make multiple requests in parallel but handle errors individually. 
	Promise.all will reject if any of the promises rejects, so we need a way to handle individual errors.
	Write a function called requestAllFilesHandleErrors that takes an array of promises  and returns 
	the return values of all the completed promises in the provided array.
	If any of the promises throw an error, handle the error so that the rest of the promises resolve.
	Any promises that reject should return an object of this shape: { error: caughtError };

	Ex:
	const promise1 = new Promise((resolve, reject) => resolve("promise 1"));
	const promise2 = new Promise((resolve, reject) => reject("promise 2"));
	const promise3 = new Promise((resolve, reject) => resolve("promise 3"));
	const arrayOfPromises = [promise1, promise2, promise3]
	function requestAllFilesHandleErrors(arrayOfPromises) {
	// Your solution here
	}
	requestAllFilesHandleErrors(arrayOfPromises);
	Results: 
	0: "promise 1"
	1: {error: 'promise 2'}
	2: "promise 3"

