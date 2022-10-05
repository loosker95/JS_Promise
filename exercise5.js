const promise1 = new Promise((resolve, reject) => resolve("promise 1"));
const promise2 = new Promise((resolve, reject) => resolve("promise 2"));


const arrayOfPromises = [promise1, promise2];

function controlAllPromises(arrayOfPromises) {
    Promise.all(arrayOfPromises).then((message) => {
        console.log(message);
    });
}
controlAllPromises(arrayOfPromises);

