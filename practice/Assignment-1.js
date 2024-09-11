
let user1= {
    name: 'saim',
};
let user2 = {
    age:20,
};
let users_array = [ user1,user2 ];

for(let object of users_array){
    console.log(object);
    for(let key in object){
        console.log(key);
    }
    for(let values in object){
        console.log(object[values]);
    }
}
