var express = require("express"),
	compression = require("compression"),
	path = require("path"),
	app = express(),
	pubDir = "/htdocs";

// Run static server
app.use(compression());
app.use(express.static(path.join(__dirname, pubDir)));
app.listen(8080);