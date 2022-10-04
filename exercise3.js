function makePromiseWithConstructor(itShouldResolve){
    return new Promise((resolve, reject) =>{
        if(itShouldResolve === true){
            resolve('itShouldResolve is truthy');
        }else{
            reject('itShouldResolve is falsy');
        }
    
    });
}

makePromiseWithConstructor(true).then((message) =>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
});