// function foo(){
//     console.log(this === global) 
//     // this = obj when called like obj.foo()
//     console.log(this.a)
// }

// const obj = {
//     a:2,
//     foo:foo, //foo:print
// }

// var fn = obj.foo;
// fn()

// // foo() // undefined

// obj.foo() // a = 2 // obj.print() 





var counter = {
    count:0,
    inc:function(){
        console.log('inc was called')
        this.count++
    }
}

var fn = counter.inc
fn()

console.log(counter.count) // 0
console.log(global.count) // NaN

// Explanation of above
// for 1st log
// this.count = this.count + 1 
// for 2nd as follows
// global.count = global.count + 1
// global.count = undefined + 1
// global.count = NaN


// setTimeout(counter.inc,1000)
// setTimeout(()=>{
//     console.log(counter.count)
// },2000)