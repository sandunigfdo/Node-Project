// Setup Express
const express = require("express");
const cors    = require("cors"); // Cross Origin Resource Sharing

const app = express();

// To help with accessing this server from Postman
app.use(cors());

// To help with POST and PUT requests to the server
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to COMPX575 - Task 7" });
});

require("./app/routes/items.routes.js")(app);


// Start the server running "npm start". Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your Node.js code
// can be seen in the terminal window used to run the server.

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`CORS enabled Express web server is running on port ${PORT}.`);
});