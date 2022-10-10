const http = require('http');
var fs=require('fs');

http.createServer((req, res) => {
    if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end;
            }
        });  
    }

    else if (req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end;
            }
        });  
    }

    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end;
            }
        });  
    }

    else {
        fs.readFile('404.html', (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                return res.end;
            }
        });  
    }
}).listen(8080, () => console.log("Listening on port 8080..."))