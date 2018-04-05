var http = require('http');

var server = http.createServer(function(req, res){

    res.writeHead(200, {"Content-Type" : "text/html"});

    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                    HTML Response
                </title>
            </head>
            <body>
                <heading>
                    <h1> Serving HTML </h1>
                    <p> ${req.url} </p>
                    <p> ${req.method} </p>
                </heading>
            </body>
        </html>
    `);
})

server.listen(3000);
console.log("Listening on port 3000")