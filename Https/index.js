const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()} \t ${req.urlnode}: Noew Req Rec.!\n`;
    fs.appendFile("log.txt",log, (err,data)=>{
        switch(req.url){
            case '/':  
                res.end('Home Page');
                break;
            case '/about': 
                res.end("My name is Saim");
                    break;
            default:
                res.end("404 Not Found");

        }
    });
});

myserver.listen(8000,() => console.log("Srver Started!"));


