const express = require("express");
const bodyParser = require("body-parser");
const cros = require("cors");

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cros());

app.get("/", function (req, res) {
	res.send("Hello from server");
});

app.post("/enroll", function (req, res) {
	console.log(req.body);
	res.status(200).send({ message: "Data received" });
});

app.listen(PORT, function () {
	console.log("listining tyo port 3000");
});
