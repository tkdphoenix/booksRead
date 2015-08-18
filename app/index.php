<!DOCTYPE html>
<html lang="en" ng-app="booksApp">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Books read for work metric</title>
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
	<link rel="stylesheet" href="css/app.css">
	<script src="bower_components/angular/angular.js"></script>
	<script src="bower_components/angular-route/angular-route.js"></script>
	<script src="js/app.js"></script>
	<script src="js/controllers.js"></script>
</head>
<body ng-controller="bookListCtrl">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12"><h1>Books for 2015</h1></div>
		</div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Book Title</th>
					<th>Author</th>
					<th>Publisher</th>
					<th>Image</th>
				</tr>
			</thead>
			<tbody ng-repeat="book in resources.books">
				<tr>
					<td>{{book.title}}</td>
					<td>{{book.author}}</td>
					<td>{{book.publisher}}</td>
					<td><img ng-src="img/{{book.img}}.jpg" width=50 /></td>
				</tr>
			</tbody>
		</table>

		<div class="row">
			<div class="col-md-12"><h1>Videos for 2015</h1></div>
		</div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Video Title</th>
					<th>Author</th>
					<th>Publisher</th>
					<th>Image</th>
				</tr>
			</thead>
			<tbody ng-repeat="video in resources.videos">
				<tr>
					<a href="http://example.com"><td>{{video.title}}</td>
					<td>{{video.author}}</td>
					<td>{{video.publisher}}</td>
					<td><img ng-src="img/{{video.img}}.jpg" width=50 /></td></a>
				</tr>
			</tbody>
		</table>
	</div> <!-- END .container -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
</body>
</html>