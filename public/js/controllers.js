
/*Controllers*/

angular.module("bodApp.controllers", [])
	.controller("AnswerCtrl", ["$scope", "$http", function($scope, $http) {
		
		$scope.getAnswers = function() {
			$http.get("/answers").success(function (data) {
				$scope.answers = data;
			});
		}

		$scope.getAnswers();

		$scope.getAnswer = function(id) {
			$http.get("/answers/" +id).success(function (data) {
				$scope.oneAnswer = data[0];
				if (data[0].locked === 0) {
					$http.put("/toggleLockAnswer/" + id);
				}
			});
		}

		$scope.updateStatus = function(id) {
			$http.put("/toggleLockAnswer/" + id).success(function() {
				$http.put("/answers/" + id).success(function() {
					$http.get("/answers").success(function (data) {
						$scope.answers = data;
					});
				});
			});
		}
		
		$scope.closeAndUnlock = function(id) {
			$http.put("/toggleLockAnswer/" + id).success(function() {
				$http.get("/answers").success(function (data) {
						$scope.answers = data;
				});
			});
		}

		$scope.deleteAnswers = function() {
			$http.delete("/answers").success(function () {
				$http.get("/answers").success(function (data) {
					$scope.answers = data;
				});
			});
		}
		
	}])
	.controller("ParticipantsCtrl", ["$scope", "$http", function($scope, $http) {

		$http.get("/participants").success(function (data) {
			$scope.participants = data;
		});

		$scope.deleteParticipants =function() {
			$http.delete("/participants").success(function () {
				$http.get("/participants").success(function (data) {
					$scope.participants = data;
				} )
			})
		}
		
	}])
	.controller("RegisterAnswerCtrl", ["$scope", "$http", "$location", function($scope, $http, $location) {

		$scope.formData = {kjonn : "ikke def"};

		$scope.submitAnswer = function() {
			$http({
				method : "POST",
				url : "/answers",
				data : $.param($scope.formData),
				headers : {"Content-Type" : "application/x-www-form-urlencoded"}
			})
			.success(function(data) {
				$location.path("/partial-register-participant");
			});
		}

		$scope.submitFormTest = function() {
			console.log($scope.formData);
		};

		$scope.answerRegistered = function() {
			$location.path("/partial-register-participant");
		}

	}])
	.controller("RegisterParticipantCtrl", ["$scope", "$http", "$location", function($scope, $http, $location) {

		$scope.participant = {};

		$scope.submitParticipant = function() {
			$http({
				method : "POST",
				url : "/participants",
				data : $.param($scope.participant),
				headers : {"Content-Type" : "application/x-www-form-urlencoded"}
			})
			.success(function(data) {
				$location.path("#/partial-participant-registered");
			});
		}
	}])