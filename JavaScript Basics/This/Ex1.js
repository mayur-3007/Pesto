const obj = {
    firstName: 'Mayur',
    print:function(){
        console.log(this.firstName)
    }
}

setTimeout(obj.print,100)