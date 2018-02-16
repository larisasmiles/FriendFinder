let path = require("path");

///////////////////////////////////////
// Routing for html files
//////////////////////////////////////

module.exports = function(app) {
	// route for survey 
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	// if route doesnt match then default to home
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};