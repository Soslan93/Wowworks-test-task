var http = require('http'),
    static = require('node-static'),
    file = new static.Server('./data.json');

http.createServer(function (req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    file.serve(req, res);
}).listen(3000);

console.log('Server running on port 3000');