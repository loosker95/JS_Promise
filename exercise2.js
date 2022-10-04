function makePromiseRejectWithBoo(){
    return Promise.reject("Boo!");
}
    
makePromiseRejectWithBoo().catch((error) =>{
    console.log(error);
});