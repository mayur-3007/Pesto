function createUser(initialName){
    let name = initialName;
    return {
        getName(){
            return name
        },
        setName(newName){
            name = newName
        },
    };
}

let p1 = createUser('Mayur'); // ENV{name:'Mayur' , {getName,setName}}
let p2 = createUser('Mohurle') // ENV{name:'Mohurle' , {getName,setName}}

p2.setName(null) // ENV{name:'null' , {getName,setName}}
console.log(p1.getName()) //hence Mayur is returned