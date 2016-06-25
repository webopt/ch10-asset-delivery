var express = require("express"),
	https = require("https"),
	shrinkRay = require("shrink-ray"),
	fs = require("fs"),
	path = require("path"),
	app = express(),
	pubDir = "/htdocs";

app.use(shrinkRay({
	cache: function(request, response){
		return false;
	}
}));

app.use(express.static(path.join(__dirname, pubDir)));

https.createServer({
	key: fs.readFileSync("crt/localhost.key"),
	cert: fs.readFileSync("crt/localhost.crt")
}, app).listen(8443);