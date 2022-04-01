


var http = require('http')

http.createServer(function(request, response){
    console.log(request)
    response.writeHead(200,{"Content-Type":"text/html"})
    response.write('<h1>Hello Shino</h1>')
    response.end()
}

).listen(8080)
// //port