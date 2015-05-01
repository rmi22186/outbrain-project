angular.module('outbrainapp', ['outbrainapp.jsonfeeds'])

.controller('selectLink', function($scope, $http, Jsonfeeds) {

  $scope.links = Jsonfeeds.feed1.pages.concat(Jsonfeeds.feed2.pages);
  $scope.links.clicked = null;

});