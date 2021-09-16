(function immediateA(a){ //a = 0
    return (function immediateB(b){ //b=1
        console.log(a)
    })(1)
})(0)


//IIFE  