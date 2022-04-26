var http=require('http')
var server= http.createServer(function(req,res){
    res.write("this server belongs to naveen ")
    res.end()
})
server.listen(2001)
console.log("this is to indicate that server has started")
