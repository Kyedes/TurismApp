/**
 * Created by Esben on 23/09/2015.
 */

angular.module('starter.geoLocation', [])


    .controller('MapGeoCtrl', function ($scope, $ionicLoading, $ionicPopup, GeoList) {

        $scope.positions = GeoList.getAll();
        $scope.mon = {dis:100, monument:null};
        $scope.$on('mapInitialized', function (event, map) {
            $scope.map = map;
        });
        $scope.centerOnMe = function () {

            camera.getPicture().then(function(imageURI) {
            $scope.photo = imageURI;

            // imageURI is the URL of the image that we can use for
            // an <img> element or backgroundImage.

          }, function(err) {
            // Ruh-roh, something bad happened
            console.err(err);
          }, cameraOptions);


            //If you want
            //$scope.positions = [];


            /* Splash */
            $ionicLoading.show({
                template: 'Loading...'
            });

            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(position) {

              var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              // $scope.positions.push({lat: position.coords.latitude, lng: position.coords.longitude}); //Adds location to array?
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                $scope.map.setCenter(pos);
                $scope.distances = [];
                angular.forEach($scope.positions, function (mark) {

                    var dis = calculateDistance(position.coords, mark);

                    //console.log((dis / 1000) + " km")
                  console.log(dis, mark.monument);
                  if (dis <= 10) if (dis < $scope.mon.dis)$scope.mon = {dis:dis, monument: mark};





                });
              console.log($scope.mon);


                $ionicLoading.hide();

            }

            function error(error) {
                console.log(error);
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: "Error code: " + error.code,
                    template: error.message
                });
            }

            // This is our get position function!
            navigator.geolocation.getCurrentPosition(success, error, options);


            /* function to calc radius */
            var rad = function (x) {
                return x * Math.PI / 180;
            };

            /* CALCULATE DISTANCE */
            function calculateDistance(p1, p2) {
                var R = 6378137; // Earth’s mean radius in meter
                var dLat = rad(p2.lat - p1.latitude);
                var dLong = rad(p2.lng - p1.longitude);
                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.lat)) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d; // returns the distance in meter
            }
        }
    })



  .factory('Camera', ['$q', function($q) {

    return {
      getPicture: function(options) {
        var q = $q.defer();

        navigator.camera.getPicture(function(result) {
          // Do any magic you need
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        }, options);

        return q.promise;
      }
    }
  }])


  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

;
