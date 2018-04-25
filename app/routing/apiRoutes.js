// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


var friendsData = require("../data/friends.js");


///////////////////////////////////////
// Routing for api 
//////////////////////////////////////

module.exports = function(app) {
	// route for api (json data)
	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});




	// post route 
	app.post("/api/friends", function(req, res) {
		friendsData.push(req.body);
		// this is where we write the code to loop through the array of friends data. If the user 
		// matches a friend then loop through to the next. 
	
		res.json(true);
	});
};