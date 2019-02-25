const express = require("express");
const app = express();
const path = require("path");

let PORT = process.env.PORT || 1234;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);
});

require("./app/routing/apiRouting")(app);
require("./app/routing/htmlRoutes")(app);