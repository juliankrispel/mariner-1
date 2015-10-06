var static = require('node-static');
var fs = require('fs');
var path = require('path');

//
// Create a node-static server instance to serve the './public' folder
//

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
			var url = request.url;
			if(url === '/'){
				url = '/index.html';
			}
			var file = path.join('./public', url);
			console.log('url', url);
			console.log('file', file);
			if(fs.existsSync(file)){
				fs.readFile(file, function(err, resp){
					console.log(resp, err);
					response.end(resp);
				});
			}else{
				response.end('file don\'t exists ' + request.url);
			}
    }).resume();
}).listen(5000);
