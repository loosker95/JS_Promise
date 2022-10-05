const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
    };

const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0){
        resolve('Sunglasses order processed.');
    }else{
        reject('That item is sold out.');
    }
 };

const myPromise = new Promise(myExecutor);

myPromise.then((message) =>{
    console.log('Results => ' +message);
}).catch((message) =>{
    console.log('Result => ' +message)
});
