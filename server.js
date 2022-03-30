const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
var corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.get("/", (req, res) => {
    res.json({ message: "connection successfully"});
});

