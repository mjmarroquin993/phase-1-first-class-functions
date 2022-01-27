function receivesAFunction(callback){
    return callback()
}

const returnsANamedFunction = () => {
    return receivesAFunction
}

const returnsAnAnonymousFunction = () => {
    return () => console.log()
}