function makePromiseResolveWith3(value){
    return Promise.resolve(value);
};
    
makePromiseResolveWith3(3).then((result) =>{
    console.log(result);
});


