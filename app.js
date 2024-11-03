const http = require('http');
const taskRoutes = require('./routes/taskRoutes');


const port = 9000;
const hostname = 'localhost';


const server = http.createServer((req, res) => {
  
    if (req.url.startsWith('/tasks')) {
        taskRoutes(req, res);
        // Remove redundant response since taskRoutes already handles the response
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Page not found' }));
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> 89ae235b28944f76e0827ac9b0177a91402e8643
>>>>>>> 22964b6e9152e22bd317447b87b3b76cb65b19f9
