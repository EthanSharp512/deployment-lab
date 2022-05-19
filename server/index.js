const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")))

const {rollDice, diceMessage} = require('./controller')

app.get("/api/rolldice", rollDice);
app.get("/api/rolldice", diceMessage);

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})