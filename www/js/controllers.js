angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.showFooterToken = 1;

  $scope.slideHasChanged = function(index){
    $scope.slideIndex = index;
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
})

.controller('RealtorSignUpCtrl', function($scope, Users) {
  $scope.countries = ['Canada', 'United States'];

  $scope.canadaProvinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Sasktchewan', 'Alberta', 'Newfoundland and Labrador'];

  $scope.users = Users.realtors;

  $scope.addUser = function (user) {
    $scope.users.push(angular.copy(user));
  };
});
