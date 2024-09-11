
const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()} \t ${req.urlnode}: Noew Req Rec.!\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log, (err,data)=>{
        switch(myUrl.pathname){
            case '/':  
                res.end('Home Page');
                break;
            case '/about': 
                const username = myUrl.query.myname;
                res.end(`Hi ${username}`);
                    break;
            default:
                res.end("404 Not Found");

        }
    });
});

myserver.listen(8000,() => console.log("Srver Started!"));


 