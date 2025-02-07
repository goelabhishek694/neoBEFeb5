const http = require("http");

const server = http.createServer((req, res) => {
    //handle incoming requests here
    // req-> request object -> it contains details of th info required from server 
    // res -> response object -> it containsthe response from server

    console.log(req.method);
    console.log(req.url);
    
    
    // steps
    //set response header
    // res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Type", "application/json");

    //write response content
    // res.write("<html><head><title>NodeJS HTTP Server</title></head><body>");
    // res.write("<h1>Hello World via server!</h1>");
    // res.write("</body></html>");

    

    

    if(req.method == "GET"){
        if(req.url == "/"){
            const jsonData = {
                message: "Hello World !",
                date : new Date()
            }
            const jsonResponse = JSON.stringify(jsonData);
            res.write(jsonResponse); 
        }else if(req.url == "/trendingSongs"){
            const jsonData = {
                message: "List of trending Songs !",
                date : new Date()
            }
            const jsonResponse = JSON.stringify(jsonData);
            res.write(jsonResponse); 
        }else{
            const jsonData = {
                message: "404 Page !",
                date : new Date()
            }
            const jsonResponse = JSON.stringify(jsonData);
            res.write(jsonResponse);
        }
    }
    

    //end the response 
    res.end(); 

})

const port = 3000; //flat number
const host = "localhost" // the society address -> the server will only accept connections from the same machine . 
server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
})