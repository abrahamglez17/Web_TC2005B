// server/index.js
const express = require("express");
const fs = require("fs");
const path = require('path');
const newGame = {
    "Game4": {
        "title": "Doom Eternal",
        "genre": "Shooter",
        "id": 4
    }
}
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server side!" });
});

// callback function
app.get("/videogames", (req, res) => {
    fs.readFile(__dirname + "/" + "videogames.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    });
});

app.post("/addGame", (req, res) => {
    fs.readFile(__dirname + "/" + "videogames.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        data["Game4"] = newGame["Game4"];
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile(__dirname + "/" + "videogames.json", JSON.stringify(data), "utf-8", err => {
            if (err) throw err;
        });
    });
});

app.delete("/deleteGame", (req, res) => {
    fs.readFile(__dirname + "/" + "videogames.json", "utf8", (err, data) => {
        data = JSON.parse(data);
        delete data["Game4"];
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile(__dirname + "/" + "videogames.json", JSON.stringify(data), "utf-8", err => {
            if (err) throw err;
        });
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});