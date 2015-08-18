'use strict';

/* Controllers */

var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('bookListCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('books.json').success(function(data){
			$scope.books = data.books;
			$scope.videos = data.videos;
		});
	}
]);

// bookControllers.controller('bookDetailCtrl', ['$scope', '$routeParams', '$http',
// 	function($scope, $routeParams, $http){
// 		$http.get($routeParams.id)
// 	}
// ]);