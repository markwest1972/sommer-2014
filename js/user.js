var db = require("./db");
var ut = require("./utilities");


/*Old method, used to return the JSON object directly.
We are now using readAllAnswers instead

function readAnswers(req, res) {
	db.readAnswers(function(err, rows) {
		if (err) {
			errorHandler(err, res);
		}
		else {
			res.send(JSON.stringify(rows));
		}
	});
}
*/

//Used to get all rows from the database and return them in a HTML table
function readAllAnswers(req, res) {
	db.readAnswers(function(err, rows) {
		if (err) {
			errorHandler(err, res);
		}
		else {
			res.send((rows));
		}
	});
}

function readAnswerPage(req, res) {
	res.sendfile("html/allAnswers.html");
}

/*Old method, used to hardcode an alternative into the db.
We are now using insertAnswerDb

function insertPredefAnswerDb(req, res) {
	db.insertAnswer(['"singel"'], function(err, rows) {
		if (err) {
			errorHandler(err, res);
		}
		else {
			res.send("Your insert was successfull. You inserted:\n " + JSON.stringify(rows));
		}
	});
}
*/

/*Used to insert the answers received from the form into the database.
Fix the "hardcoding" of the values?
Is called when the user presses submit (http post action)
*/
function insertAnswerDb(req, res) {
	values = [req.body.sivilstatus, req.body.pa_hodet, req.body.alder, 
	req.body.studiested, req.body.programmeringsstil, req.body.musikk, 
	req.body.personlighet, req.body.hypepreferanse, req.body.favorittgode, 
	req.body.planer_for_kvelden, req.body.premie_hvis_du_vinner];
	db.insertAnswer(values, function(err, rows) {
		if (err) {
			errorHandler(err, res);
		}
		else {
			db.readOneAnswer(rows['insertId'], function (err, row){
			if(err) {
				errorHandler(err, res);
			}
			else {
				res.send("Ditt svar er nå registrert. Svarene dine var: " + JSON.stringify(row));
				}
			});
		}
	});
}

//Used to fetch insertAnswer.hmtl that shows the form to the user
function insertAnswerPage(req,res) {
	res.sendfile("html/insertAnswer.html");
}

//Used to fetch index.html that shows the menu with buttons
function index(req, res) {
	res.sendfile("html/index.html");
}

function stylesheet(req, res) {
	res.sendfile("html/stylesheet.css");
}

//Used to truncate (clear/delete) the table. Returns a message to the user if successful
function deleteAll(req, res) {
	db.deleteAll(function(err, rows) {
		if (err) {
			errorHandler(err, res);
		}
		else {
		res.send("Successfully deleted all answers");
		}
	});
}

//Used to handle errors. Look into the error handler provided by express.js?
function errorHandler(error, response) {
			console.log("There has been an error:");
			console.log(error);
			response.send("There has been an error with the database, check the console for details...");
}

function jsAngularminjs(req, res) {
	res.sendfile("external_libs/angular.min.js");
}

function jsAppjs(req, res) {
	res.sendfile("js/app.js");
}

function bootstrapcss(req, res){
	res.sendfile("external_libs/bootstrap/css/bootstrap.min.css");
}

function seeAnswersjs(req, res){
	res.sendfile("js/seeAnswers.js");
}

function glyphicon(req, res) {
	res.sendfile("external_libs/bootstrap/fonts/glyphicons-halflings-regular.woff");
}

exports.insertAnswerPage = insertAnswerPage;
exports.insertAnswerDb = insertAnswerDb;
exports.index = index;
exports.deleteAll = deleteAll;
exports.readAllAnswers = readAllAnswers;
exports.stylesheet = stylesheet;
exports.jsAngularminjs = jsAngularminjs;
exports.jsAppjs = jsAppjs;
exports.readAnswerPage = readAnswerPage;
exports.bootstrapcss = bootstrapcss;
exports.seeAnswersjs = seeAnswersjs;
exports.glyphicon = glyphicon;

//Old exports, methods now commented out
//exports.insertPredefAnswerDb = insertPredefAnswerDb;
//exports.readAnswers = readAnswers;