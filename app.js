(function() {

var catDogApp = angular.module("catDogApp", ["ngRoute"]);

catDogApp.config(function($routeProvider) {

	$routeProvider.when("/cat", {
		templateUrl: "views/cat.html"
	});
	
	$routeProvider.when("/dog", {
		templateUrl: "views/dog.html",
		controller: "dogController"	
	});

	$routeProvider.otherwise ({
		template: "Please select one of the links above to choose a pet librarian."
	});
});

})();