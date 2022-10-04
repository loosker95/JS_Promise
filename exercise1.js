function makePromiseResolveWith3(value){
    // Or i can pass directly the value to Promise.resolve(value);
    // return promise1  = Promise.resolve(3);
    return promise1  = Promise.resolve(value);
}
    
makePromiseResolveWith3(3).then((result) =>{
    console.log(result);
});