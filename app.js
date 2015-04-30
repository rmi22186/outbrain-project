angular.module('outbrainapp', [])

.controller('selectLink', function($scope, $http) {


  var feed1 = {
    "pages": [
      {
        "path": "/news",
        "rank": 8,
        "topref": {
          "domain": "gawker.com"
        }
      },

      {
        "path": "/sports",
        "rank": 4,
        "topref": {
          "domain": "t.co"
        }
      },

      {
        "path": "/money",
        "rank": 2,
        "topref": {
          "domain": "google.com"
        }
      },

      {
        "path": "/sports",
        "rank": 5,
        "topref": {
          "domain": "kotaku.com"
        }
      }
    ]
  };

  var feed2 = {
    "pages": [
      {
        "path": "/politics",
        "rank": 3,
        "topref": {
          "domain": "digg.com"
        }
      },

      {
        "path": "/tech",
        "rank": 7,
        "topref": {
          "domain": "facebook.com"
        }
      },

      {
        "path": "/entertainment",
        "rank": 6,
        "topref": {
          "domain": "deadspin.com"
        }
      },

      {
        "path": "/living",
        "rank": 1,
        "topref": {
          "domain": "io9.com"
        }
      }
    ]
  };

  $scope.links = feed1.pages.concat(feed2.pages);
  $scope.links.clicked = null;

  // var url = 'http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK';
  // $http.jsonp(url)
  // .success(function(data) {
  //   console.log(data);
  // });
});