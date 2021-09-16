var obj = {
    firstName: 'luffy',
    friends:['Zoro','Sanji'],
    loop:function(){
        // let name = this.firstName
        this.friends.forEach(function(friend){
            console.log(this.firstName + ' knows ' + friend)
        })
    }
}

obj.loop()