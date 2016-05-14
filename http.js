var express = require("express"),
	compression = require("compression"),
	app = express();

// Run static server
app.use(compression());
app.use(express.static(__dirname));
app.listen(8080);