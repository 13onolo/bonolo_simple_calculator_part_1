let calculator = require('./simple_calculator_part_1');
describe("add 2 numbers", function(){

    it("should add 2 numbers", function(){
        expect(calculator.add(2,3)).toBe(5);
    });
});
describe("add many numbers", function(){

    it("should add many numbers", function(){
        expect(calculator.addMore(1,2,3,4,5)).toBe(15);
    });
});
describe("multiply 2 numbers", function(){

    it("should multiply 2 numbers", function(){
        expect(calculator.multiply(2,3)).toBe(6);
    });
});
describe("multiply many numbers", function(){

    it("should multiply many numbers", function(){
        expect(calculator.multiplyMore(1,2,3,4,5)).toBe(120);
    });
});