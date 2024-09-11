class A{
    constructor(){

    }

    a(){
        
    }

    b(){

    }
};

a = new A();
console.log(a.data);






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

console.log(user);
console.log(user.bum_spots);
console.log(user.get_level());
console.log(user['first kill']);