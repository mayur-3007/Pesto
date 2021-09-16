// function sum(a,b){
//     return this.a + this.b
// }

// //sumB is different function
// // .bind binds permanently
// const sumB = sum.bind({a:10,b:20})

// const sumC = sumB.bind({a:40,b:40})

// console.log(sum === sumB) //false //each characstric is same except for value

// console.log(sumB()) //30

//  console.log(sumC()) //30 //// .bind binds permanent

// ------------------------------------------------------------------------------------


var module = {
    x : 42,
    getX : function() {
        return this.x;
    }
}

// var fn = module.getX
// console.log(fn()) //undefined //// global context

var fn = module.getX.bind(module)
console.log(fn()) //42 //module context(bounded)

