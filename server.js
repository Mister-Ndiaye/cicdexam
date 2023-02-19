// Require the built-in HTTP module
const http = require('http');

// Define the port to listen on
const port = 3000;

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Write the response body
  res.write('Hello, World!');
  
  // End the response
  res.end();
});

// Listen for incoming requests on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
