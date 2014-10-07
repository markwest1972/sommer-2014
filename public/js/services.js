"use strict";

/*Services for bodApp*/
angular.module("bodApp.services", [])
	
	//service that communicates with the REST API for answers
	.factory("Answers", function($http) {
		return {
			//gets all answers with a boolean parameter to determine whether all answers or only unprocessed should be fetched
			getAll : function(viewAllArg) {
				return $http.get("/answers", {
					params : {
						viewAll : viewAllArg
					}
				});
			},
			//get the answer with the specified id
			get : function(id) {
				return $http.get("/answers/" + id);
			},
			//locks the answer with the specified id
			toggleLock : function(id) {
				return $http.put("/toggleLockAnswer/" + id);
			},
			//updates the processed status of the answer with the specified id
			update : function(id) {
				return $http.put("/answers/" + id);
			},
			//deletes all answers
			deleteAll : function() {
				return $http.delete("/answers");
			},
			//creates a new answer based on the answer object passed in
			create : function(answer) {
				return $http.post("/answers", answer);
			},
			//deletes the answer with the specified id
			delete : function(id) {
				return $http.delete(/answers/ + id);
			},
			export : function() {
				return $http.get("/exportAnswers");
			}
		};
	})

	//service that communicates with the REST API for participants
	.factory("Participants", function($http) {
		return {
			//gets all participants
			getAll : function() {
				return $http.get("/participants");
			},
			//deletes all participants
			deleteAll : function() {
				return $http.delete("/participants");
			},
			//creates a new participant based on the participant object passed in
			create : function(participant) {
				return $http.post("/participants", participant);
			},
			//marks the participant with that email as winner
			updateWinner: function(email) {
				return $http.post("/winners/" + email);
			},
			//deletes all winners (sets the 'winner' field of all participants to 0)
			deleteWinners: function() {
				return $http.delete("/winners");
			},
			export : function() {
				return $http.get("/exportParticipants");
			}
		};
	})

	.factory("Questions", function() {
		/*
		The object that contains the questions.
		Is sorted alphabetically by default, so a prefix with A-D is used to sort it to make it look nice on the page displayed.
		The object contains four objects, one for each column, which in tur contains the questions for each column.
		This is done to be able to put the questions where we want them.
		To see how this is used, please check the html file where they are displayed, 'partial-register-answer.html'
		The output field is the value displayed to the user, the 'value' field is the the value stored in the database
		*/
		return {
			questions : {
				AfirstCol :  {
				Akjonn : {
					title : "Kjønn",
					name : "kjonn",
					options : [
						{
							output : "Mann",
							value : "mann"
						}, {
							output: "Kvinne",
							value : "kvinne"
						}
					]
				},
				Bsivilstatus : {
					title: "Sivilstatus",
					name : "sivilstatus",
					options : [
						{
							output: "Gift/Samboer",
							value: "gift/samboer"
						},
						{
							output: "Kjæreste",
							value: "kjaereste"
						},
						{
							output: "Singel",
							value: "singel"
						},
						{
							output: "It's complicated",
							value: "complicated"
						}
					]
				}
			},
			BsecondCol: {
				AUtdannelse : {
					title: "Utdannelse",
					name : "utdannelse",
					options : [
						{
							output: "Master",
							value: "master"
						},
						{
							output: "Bachelor",
							value: "bachelor"
						},
						{
							output: "Halvstudert røver",
							value: "halvstudertrover"
						},
						{
							output: "Utdannelse?",
							value: "annet"
						}
					]
				},
				Bpersonlighet : {
					title: "Personlighet",
					name : "personlighet",
					options : [
						{
							output: "Introvert",
							value: "introvert"
						},
						{
							output: "Ekstrovert",
							value: "ekstrovert"
						},
						{
							output: "Ekstrovert med litt innabords",
							value: "ekstrovertpluss"
						}
					]
				}
			},
			CthirdCol: {
				Atype : {
					title: "Type",
					name : "type",
					options : [
						{
							output: "Hipster",
							value: "hipster"
						},
						{
							output: "Cool Cat",
							value: "coolcat"
						},
						{
							output: "Slask",
							value: "slask"
						},
						{
							output: "Ambisiøs",
							value: "ambisios"
						},
						{
							output: "Nerd",
							value: "nerd"
						}
					]
				},
				Bmusikk : {
					title: "Musikk",
					name : "musikk",
					options : [
						{
							output: "Rock",
							value: "rock"
						},
						{
							output: "VG-lista",
							value: "vglista"
						},
						{
							output: "Hip-Hop/R&B",
							value: "hiphoprandb"
						},
						{
							output: "Metal",
							value: "metal"
						},
						{
							output: "Rave",
							value: "rave"
						},
						{
							output: "Klassisk",
							value: "klassisk"
						},
						{
							output: "Alternativ",
							value: "alternativ"
						}
					]
				}
			},
			DfourthCol: {
				Afavorittgode : {
					title: "Drømmegode",
					name : "drommegode",
					options : [
						{
							output: "Fri bar på julebord",
							value: "fribar"
						},
						{
							output: "Gadget-konto",
							value: "gadgetkonto"
						},
						{
							output: "Kurs og konferanser",
							value: "kurskonferanse"
						},
						{
							output: "Dobbel pensjon",
							value: "dobbelpensjon"
						},
						{
							output: "Massasje på jobben",
							value: "massasje"
						},	
						{
							output: "Brusautomat",
							value: "brusautomat"
						}
						
					]
				},
				Bplanerforkvelden : {
					title: "Planer for kvelden",
					name : "planerforkvelden",
					options : [
						{
							output: "På sjekker'n",
							value: "paasjekkern"
						},
						{
							output: "Trene",
							value: "trene"
						},
						{
							output: "Hjem å lese fag",
							value: "lesefag"
						},
						{
							output: "Ut på by'n",
							value: "utpaabyen"
						},
						{
							output: "Nyte livet",
							value: "nytelivet"
						}
					]
				},
				
				}
			}
		};
	})
	.factory("RecentAnswer", function($http) {
		var answer = {};
		return {
			setAnswer : function(recAnswer) {
				answer = {
					kjonn : recAnswer.kjonn,
					sivilstatus : recAnswer.sivilstatus,
					utdannelse : recAnswer.utdannelse,
					personlighet : recAnswer.personlighet,
					type : recAnswer.type,
					musikk : recAnswer.musikk,
					drommegode : recAnswer.drommegode,
					planerforkvelden : recAnswer.planerforkvelden
				};
			},
			getAnswer : function() {
				return answer;
			}
		};
	});