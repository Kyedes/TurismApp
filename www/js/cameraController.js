/**
 * Created by Esben on 23/09/2015.
 */
angular.module('starter.cameraController', [])

.controller('cameraControl', function($scope, camera){
        $scope.getPhoto = function () {
           camera.getPicture().then(function(imageURI) {
               $scope.photo = imageURI;


                // imageURI is the URL of the image that we can use for
                // an <img> element or backgroundImage.

            }, function(err) {

                // Ruh-roh, something bad happened
                console.err(err);
            }, cameraOptions);
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
}]);


