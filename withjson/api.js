var http = require('http');

var data = require('./data/inventory');

http.createServer(function(req, res) {

    if(req.url === "/") {
        console.log(`${req.method} request for ${req.url}`);
        res.writeHead(200, {"Content-Type" : "text/json"});
        res.end(JSON.stringify(data));
    }else if(req.url == "/instock" ) {
        listInStock(res);
    }else if(req.url == "/onorder" ) {
        listInBackOrder(res);
    }else {
        res.writeHead(404, {"Content-Type" : "text/plain"});
        res.end("Whooops ... Data not found")
    }
}).listen(3000);

function listInStock(res) {
    var inStock = data.filter(function(item) {
        return item.id === "0003";
    });

    res.end(JSON.stringify(inStock));
}
function listInBackOrder(res) {
    var onOrder = data.filter(function(item) {
        return item.id === "0001";
    });

    res.end(JSON.stringify(onOrder));
}

console.log("Listening on port 3000");