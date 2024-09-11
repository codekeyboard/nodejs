const fs = require("fs");
const os = require("os");
// SYnc..
// fs.writeFileSync('./test.text',"Hello world1");
// // 

// // Async
// fs.writeFile("./test1.text", "Hello Async",(err) => {});

// const data = fs.readFileSync("./test.text","utf-8");

// console.log(data)


// fs.readFile("./test1.text","utf-8",(err,data) => {
//     if(err){
//         console.log("ERROR ",err);
//     }
//     else {
//         console.log(data);
//     }
// });


// fs.appendFileSync("./test.text",new Date().getDate().toLocaleString());

// fs.copyFileSync("./test.text","./copy.txt");

// fs.unlinkSync("./copy.txt");



// console.log(fs.statSync("./test.text"));

///////////////////////////////////////////////////////////////////////////////////////

// Blocking 
console.log(`\n/////////////////////////////// Blocking//////////////////////////////////\n`);

console.log(1);
const result = fs.readFileSync("./test.text","utf-8");
console.log(result);
console.log(2);
console.log(`\n///////////////////////////////Non - Blocking//////////////////////////////////\n`);
// Not Blocking 
console.log(1);
fs.readFile("./test.text","utf-8",(err,result) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
});
console.log(2);
console.log(3);


console.log(os.cpus().length);