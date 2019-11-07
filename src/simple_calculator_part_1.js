
function add(... args){
    var sumAll = 0;
    var i = 0;
    while(i<args.length){
        sumAll += args[i];
        i++;
    }
    return sumAll;
}
console.log(add(1,2,3,4));

function multiply(...args){
    var productAll = 1;
    var i = 0;
    while(i<args.length){
        productAll *= args[i];
        i++;
    }
    return productAll;
}
console.log(multiply(1,2,3,4,5));
module.exports = {add,multiply};
