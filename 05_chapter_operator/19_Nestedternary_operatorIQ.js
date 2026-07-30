let statusCode = 404;

let catagory = statusCode < 300 ? "Success" : 
                statusCode < 400 ? "Redirect" : 
                    statusCode < 500 ? "Client Error" : "Server Error";

console.log(catagory);