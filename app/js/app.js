'use strict';

/* App Module */

var booksApp = angular.module('booksApp', []);

booksApp.controller('bookListCtrl', function($scope){
	$scope.resources = {
		"books": [
			{
				"id": "b01",
				"title": "Getting Started with Gulp",
				"author": "Travis Maynard",
				"publisher": "Packt Publishing",
				"description": "",
				"img": "gettingStartedWithGulp",
				"link": "https://goo.gl/tzAE05"
			},
			{
				"id": "b02",
				"title": "Getting Started with Grunt",
				"author": "Jaime Pillora",
				"publisher": "Packt Publishing",
				"description": "",
				"img": "gettinStartedWithGrunt",
				"link": "https://goo.gl/g8D6Cu"
			},
			{
				"id": "b03",
				"title": "JavaScript for Kids",
				"author": "Nick Morgan",
				"publisher": "No Starch Press",
				"description": "",
				"img": "jsForKids",
				"link": "https://goo.gl/RygUFR"
			},
			{
				"id": "b04",
				"title": "Object Oriented PHP",
				"author": "Peter Lavin",
				"publisher": "No Starch Press",
				"description": "",
				"img": "ooPHP",
				"link": "https://goo.gl/A2Wsai"
			},
			{
				"id": "b05",
				"title": "JavaScript: The Good Parts",
				"author": "Douglas Crockford",
				"publisher": "O'Reilly",
				"description": "",
				"img": "jsTheGoodParts",
				"link": "http://goo.gl/JsLX0W"
			},
			{
				"id": "b06",
				"title": "Secrets of the JavaScript Ninja",
				"author": "John Resig and Bear Bibeault",
				"publisher": "Manning Publications Co.",
				"description": "",
				"img": "secretsOfTheJSNinja",
				"link": "http://goo.gl/SMGQd7"
			},
			{
				"id": "b07",
				"title": "Mastering Grunt",
				"author": "Daniel Li",
				"publisher": "Packt Publishing",
				"description": "",
				"img": "masteringGrunt",
				"link": "https://goo.gl/F8MzxY"
			},
			{
				"id": "b08",
				"title": "AngularJS",
				"author": "Brad Green & Shyam Seshadri",
				"publisher": "O'Reilly",
				"description": "",
				"img": "AngularJS",
				"link": "http://goo.gl/YNJcLr"
			},
			{
				"id": "b09",
				"title": "Learning AngularJS",
				"author": "Brad Dayley",
				"publisher": "Addison-Wesley Professional",
				"description": "",
				"img": "learningAngularJS",
				"link": "http://goo.gl/p8u0gH"
			}
		],
		"videos": [
			{
				"id": "v01",
				"title": "Learning AngularJS Training Video",
				"author": "Matt Frisbie",
				"publisher": "O'Reilly",
				"description": "",
				"img": "learningAngularJSVideo",
				"link": "http://goo.gl/98lwl6"
			},
			{
				"id": "v02",
				"title": "Rapid Gulp",
				"author": "Matthew Brandly",
				"publisher": "Packt Publishing",
				"description": "",
				"img": "rapidGulp",
				"link": "https://goo.gl/BXRvhG"
			},
			{
				"id": "v03",
				"title": "Douglas Crockford JavaScript Master Class",
				"author": "Douglas Crockford",
				"publisher": "O'Reilly",
				"description": "",
				"img": "douglasCrockfordJSMasterClass",
				"link": "http://goo.gl/y3mvaO"
			}
		]
	};
}); // end app.controller('APIController'
