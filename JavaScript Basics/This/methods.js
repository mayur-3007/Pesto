// Methods are actions that can be performed on objects

let obj = {
    firstName: 'mayur',
    print(){
        return this.firstName
    }
}

// console.log(obj.print())

// `this` inside methods

// -- unlike other languages (such as java) , the `this` is not bound to any specific object in javascript
// the `this` value can be modified in a couple of ways
// 1. Default binding(when no object is supplier)
// 2. Implicit binding(when an object is supplier naturally)
// 3. Arrow functions(when arrow functions are used)
// 4. Explicit binding(when call ,bind or apply is used)
// 5. new bindng (when `new` keyword is used)
// 6. strict mode(when using 'use strict')
// 7. Contextual (libraries or framework may change values, for eg Event Emitters)
// others...


// Important Rule

// `this is not an compile time binding but is a runtime binding`
// `this has nothing to do with where and how the function is declared but have everything to do with how function is invoked/called`

