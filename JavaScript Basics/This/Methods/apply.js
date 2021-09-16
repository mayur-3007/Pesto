// Apply 
// the apply method calls a function with a given this value and arguments provided as an array(or an array-like object)

var numbers = [5,6,2,3,7]

var max = Math.max.apply(null,numbers)
// Math.max(5,6,2,3,7) /////Math.max require positional arguments 

console.log(max)

var min = Math.min.apply(null,numbers)

console.log(min)




//////////////////////////////////////////////////////////////////////////

//call vs apply 
//

// while the syntax of this function is almost identical to that of call() , the fundamental diff is that call accepts an argument list , while apply accepts a single array of arguments

