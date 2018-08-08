var http = require('http');

//jsonp
// http.createServer(function(request, response){
//     response.writeHead(200, { 'Content-Type': 'application/x-javascript' });
//     const data = {name: "hong"}
//     response.end(`getData(${JSON.stringify(data)})`);
// }).listen(3000);



//CORS
http.createServer(function(request, response){
    response.writeHead(200, {
    	'Content-Type': 'application/x-javascript',
    	'Access-Control-Allow-Origin': '*'
    });
    // const data = {name: "hong"}
    response.end('!!!!!!!');
}).listen(3000);

//nginx反向代理