function add(x, y) {
    return x + y
}
console.log(add(6, 7))
console.log(add(6, 6))
function multiply(x, y) {
    let stack = 0
    let inc = 1
    for (let i = 0; i < y; i = add(i, inc) ){
    stack = add(stack, x);    
    }
    return stack   

}
console.log(multiply(3, 4))
console.log(multiply(7, 1))
function power(x, n) {
    let stack1 = 1
    let inc = 1
    for (let i = 0; i < n; i = add(i, inc)){
        stack1 = multiply(stack1, x)
    }
        return stack1
    }
console.log(power(3, 4))
console.log(power(10, 5))
function facorital(x) {
    let stack2 = 1;
    let inc = 1;
    
    for (let i = 2; i <= x; i = add(i, inc))
        stack2 = multiply(stack2, i)
    return stack2
}
console.log(facorital(5))
console.log(facorital(4))
console.log(facorital(3))