// the call() method calls a function with a given this value and arguments provided individually

function greet(name){
    var reply = [
        name,
        this.animal,
        'typically sleep between',
        this.sleepDuration
    ].join(' ')

    console.log(reply)
}

var cats = {
    animal:'cats',sleepDuration:'12 and 16 hours'
}

var dogs = {
    animal:'dogs',sleepDuration:'4 to 5 hours'
}


greet.call(cats,'mayur') //cars typically sleep between 12 and 16 hours
greet.call(dogs)