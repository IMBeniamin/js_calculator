const http = require('http');
const fs = require('fs');
const path = require('path');
const extensions = require('./extensions');

const clientPath = "../client"

function requestHandler(req,res) {
    console.log("Requested: " + req.url)
    let filePath = clientPath + req.url;
    console.log(`Full path: ${filePath}`)
    if (filePath === clientPath + "/")
        filePath = filePath + 'index.html';
    const extname=path.extname(filePath);
    console.log(extname);
    let contentType = extensions.get_type(extname);
    fs.readFile(filePath,function(error,content){
        if (error) {
            console.log(error.toString())
            res.writeHead(404);
        }
        else {
            res.writeHead(200,{'Content-Type':contentType});
            res.write(content,'utf-8');
        }
        res.end(); 
    });
}

const server = http.createServer(requestHandler);
console.log("listening on port 3000")
server.listen(3000);