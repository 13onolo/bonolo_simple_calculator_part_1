function add(num1, num2){
    sum = num1 + num2;
    return sum;
}
console.log()
function addMore(... args){
    var sumAll = 0;
    var i = 0;
    while(i<args.length){
        sumAll += args[i];
        i++;
    }
    return sumAll;
}
console.log(addMore(1,2,3,4));

function multiply(n1,n2){
    product = n1 * n2;
    return product;
}
console.log(multiply(2,3));

function multiplyMore(...args){
    var productAll = 1;
    var i = 0;
    while(i<args.length){
        productAll *= args[i];
        i++;
    }
    return productAll;
}
console.log(multiplyMore(1,2,3,4,5));
module.exports = {add, addMore, multiply,multiplyMore};
