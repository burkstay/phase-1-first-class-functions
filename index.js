function receivesAFunction(cb) {
    console.log(cb());
}
fn = returnsANamedFunction
function returnsANamedFunction(){
    return fn;
}
function anonymous(){
    return '';
}
function returnsAnAnonymousFunction(){
    return (function(){});
}