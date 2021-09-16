// Default binding

//  globalThis.firstName = 'mayur' // whill get value when defined like this
function print(){
    // global in nodejs
    // window in the browser
    console.log(this.firstName) //undefined 
}
 print()