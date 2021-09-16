// arrow functions help us to fixed the value of this keyword
// in arrow func this keyword is always lexical i.e. it is always taken from parent scope

// workaround that = this
// var obj = {
//     firstName: 'luffy',
//     friends:['Zoro','Sanji'],
//     loop:function(){
//         var that = this
//         this.friends.forEach(function(friend){
//             console.log(that.firstName + ' knows ' + friend)
//         })
//     }
// }
// obj.loop()

// workaround 2 bind

// var obj = {
//     firstName: 'luffy',
//     friends:['Zoro','Sanji'],
//     loop:function(){
//         this.friends.forEach(function(friend){
//             console.log(this.firstName + ' knows ' + friend)
//         }.bind(this))
//     }
// }
// obj.loop()

// workaround 3 bind

// var obj = {
//     firstName: 'luffy',
//     friends:['Zoro','Sanji'],
//     loop:function(){
//         this.friends.forEach(function(friend){
//             console.log(this.firstName + ' knows ' + friend)
//         },this)
//     }
// }
// obj.loop()



// ----------------------------------------------------- ARROW

var obj = {
    firstName: 'luffy',
    friends:['Zoro','Sanji'],
    loop:function(){
        this.friends.forEach((friend)=>{
            console.log(this.firstName + ' knows ' + friend)
        })
    }
}

obj.loop()