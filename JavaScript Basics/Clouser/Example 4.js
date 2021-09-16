var a = 100

function abc(x){
    // x = 20
    var a = 10;
    return function(y){
        // y = 5
        return a + y; // 10+5
    }
}

a = 50

var inner = abc(20)

function foo(){
    var a = 30
    console.log(inner(5))
}

foo()