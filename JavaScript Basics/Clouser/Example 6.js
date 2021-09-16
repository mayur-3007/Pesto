function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }

    let message = `Count is ${count}`; // created 
    function log(){
        // console.log(count) // count = 3
        console.log(message) // count is 0 // increment change count but not count
    }

    return [increment,log]

}

const [increment , log] = createIncrement()
increment()
increment()
increment()
log()