function makePromiseWithConstructor(itShouldResolve) {
    return myExecutor = ((resolve, reject) =>{
        if(itShouldResolve === true){
            resolve('itShouldResolve is truthy');
        }else{
            reject('itShouldResolve is falsy');
        }
    
    });
}

const myMessage = new Promise (makePromiseWithConstructor(true))

myMessage.then((message) => {
    console.log(message);
}).catch((message) =>{
    console.log(message);
});