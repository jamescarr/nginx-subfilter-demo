//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=5000;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello World</h1>');
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, '0.0.0.0', function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
