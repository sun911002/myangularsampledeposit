const http=require('http');
var  app=require('./app');
const server=http.createServer(app);
server.listen(3000);

