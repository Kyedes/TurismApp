angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, camera) {
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

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
