function add(x, y) {
    return x + y
}
console.log(add(6, 7))
console.log(add(6, 6))
function multiply(x, y) {
    let stack = 0

    for (let i = 0; i < y; i++ ){
    stack = add(stack, x);


    
    }
    return stack
    

}
console.log(multiply(3, 4))
console.log(multiply(7, 1))
function power(x, n) {
    let stack1 = 1
    for (let i = 0; i < n; i++){
        stack1 = multiply(stack1, x)
    }
        return stack1
    }
console.log(power(3, 4))
console.log(power(10, 5))
function facorital(x) {
   
    let stack2 = 0
    let fac = 1
    for (let i = x; i = fac; i--) {
        
        stack2 = multiply(x, i)
        
        
    }
    return stack2
}
console.log(facorital(5))