let numbers = [1, 2, 3, 4];
let user = {
    name: 'John chitta',
    profession: 'badmashi',
    "first kill": "machar",
    experiences: [
        'umt', 'ucp', 'comsats', 'uol'
    ],
    goliyan_lagi_hui: 3,
    bum_spots: 4,
    get_level(){
        return this.name + ' level is ' + this.bum_spots * 2;
    }
};

for(let i=0; i<3; i++){
    console.log(i);
}

// Array "Keys"
for(let i in numbers){
    console.log(numbers[i]);
}

console.log();

// Array "members"
for(let n of numbers){
    console.log(n);
}

// Object Keys
for(let k in user){
    console.log(user[k]);
}