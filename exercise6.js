const promise1 = new Promise((resolve, reject) => resolve("promise 1"));
const promise2 = new Promise((resolve, reject) => reject("promise 2"));
const promise3 = new Promise((resolve, reject) => resolve("promise 3"));

const arrayOfPromises = [promise1, promise2, promise3]

function requestAllFilesHandleErrors(arrayOfPromises) {
  Promise.allSettled(arrayOfPromises).then((results) =>{
    results.forEach((result, index) =>{
        let theReson = result.reason;
        let theValue = result.value;
        result.value === undefined ? console.log(index+ ': '+'{'+'error'+':', "'"+theReson+"'}") : console.log(index+':', '"'+theValue+'"')
    });
  })
}
requestAllFilesHandleErrors(arrayOfPromises);
