const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, (err) => {
    if (err) {
        console.error(`Error occurred: ${err}`);
    }

    console.log(`diemer.codes webserver listening on port ${port}!`);
});
