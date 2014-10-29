"use strict";

/*Filters*/

/*
a filter used to view only a part of the answers,
the input || [] syntax is used to avoid getting errors of undefined array before all data is loaded from the server
*/

angular.module("bodApp.filters", [])
	.filter("answersFromTo", function() {
		return function(input, start, end) {
			start = +start;
			input = input || [];
			return input.slice(start, end);
		};
	})
	.filter("prettyString", function() {
		return function(answer) {
			if(answer) {
				
				switch (answer) {
					case "mann":
						return "Mann";
						
					case "kvinne":
						return "Kvinne";
						
					case "gift/samboer":
						return "Gift/Samboer";
						
					case "kjaereste":
						return "Kjæreste";
						
					case "singel":
						return "Singel";
						
					case "complicated":
						return "It's complicated";
						
					case "master":
						return "Master";
						
					case "bachelor":
						return "Bachelor";
						
					case "halvstudertrover":
						return "Halvstudert røver";
						
					case "annet":
						return "Utdannelse?";
					
					case "batenblirtil":
						return "Båten blir til mens man ror";
						
					case "detordnerseg":
						return "Det ordner seg";
						
					case "ordenungmusssein":
						return "Ordenung Muss Sein";
						
					case "quickanddirty":
						return "Quick and dirty";
						
					case "introvert":
						return "Introvert";
						
					case "ekstrovert":
						return "Ekstrovert";
						
					case "ekstrovertpluss":
						return "Ekstrovert med litt innabords";
						
					case "bigdata":
						return "Big Data";
						
					case "internetofthings":
						return "Internet of Things";
						
					case "laerkidsakoding":
						return "Lær Kidsa Koding";
						
					case "microservices":
						return "Microservices";
						
					case "rock":
						return "Rock";
						
					case "vglista":
						return "VG-lista";
						
					case "hiphoprandb":
						return "Hip-Hop/R&B";
						
					case "tronderrock":
						return "Trønderrock";
						
					case "metal":
						return "Metal";
						
					case "rave":
						return "Rave";
						
					case "klassisk":
						return "Klassisk";
						
					case "alternativ":
						return "Alternativ";
						
					case "slask":
						return "Slask";
						
					case "coolcat":
						return "Cool Cat";
						
					case "hipster":
						return "Hipster";
						
					case "ambisios":
						return "Ambisiøs";
						
					case "nerd":
						return "Nerd";
						
					case "paasjekkern":
						return "På sjekker'n";
						
					case "trene":
						return "Trene";
						
					case "lesefag":
						return "Hjem å lese fag";
						
					case "utpaabyen":
						return "Ut på by'n";
						
					case "sofaenventer":
						return "Sofaen venter"
						
					case "nytelivet":
						return "Nyte livet";
						
					case "gadgetkonto":
						return "Gadget-konto";
						
					case "brusautomat":
						return "BrusAutomat";
						
					case "kurskonferanse":
						return "Kurs og konferanser";
					
					case "dobbelpensjon":
						return "Dobbel pensjon";
						
					case "massasje":
						return "Massasje på jobben";
						
				    case "fribar":
						return "Fri bar";
						
						
				}
			}
		};
	});
	
