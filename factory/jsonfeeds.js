angular.module('outbrainapp.jsonfeeds', [])

.factory('Jsonfeeds', function() {
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

  return {
    feed1: feed1,
    feed2: feed2,
  };
});