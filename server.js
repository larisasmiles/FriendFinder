// 
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

// create (express) server
let app = express();

// PORT
let PORT = 3000

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log('Server is listening on PORT: ' + PORT);
    }
});
