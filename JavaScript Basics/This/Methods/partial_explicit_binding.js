function product(a,b){
    return a*b
}

const double = product.bind(null,2)
// console.log(typeof double) //// function

// console.log(double(100)) // 200 //// as one of the parameter is fixed from above binding

// console.log(product(5,10))