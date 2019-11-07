let calculator = require('./simple_calculator_part_1');

describe("add many numbers", function(){

    it("should add many numbers", function(){
        expect(calculator.add(1,2,3,4,5)).toBe(15);
    });
});

describe("multiply many numbers", function(){

    it("should multiply many numbers", function(){
        expect(calculator.multiply(1,2,3,4,5)).toBe(120);
    });
});