angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.showFooterToken = 1;

  $scope.slideHasChanged = function(index){
    $scope.slideIndex = index;
  }
})

.controller('SignupCtrl', function ($scope) {
  // body...
})

.controller('DashboardCtrl', function ($scope) {
  $scope.toggleLeft = function ($scope, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.toggleLeft();
  };
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
  $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $scope.years = ['2016', '2017', '2018', '2019', '2020'];

  $scope.countries = ['Canada', 'United States'];

  $scope.canadaProvinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Sasktchewan', 'Alberta', 'Newfoundland and Labrador'];

  $scope.users = Users.realtors;

  $scope.addUser = function (user) {
    $scope.users.push(angular.copy(user));
  };
})

.controller('HomeownerSignUpCtrl', function ($scope) {
  $scope.propertyTypes = ['Condo', 'Townhouse', 'Loft', 'Basement', 'Office Building'];
})

.controller('ClientDashboardCtrl', function ($scope) {
  $scope.deleteMessage = function  (message) {
    $scope.messages.splice($scope.messages.indexOf(message),1);

    $scope.toggleLeft = function ($scope, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.address = '123 Fakename St. Toronto, Ontario';
  };

  $scope.messages = [
    {name: 'Jack Trenton(My Agent)', date: 'Oct 23, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jays Street Sale', date: 'Oct 20, 2015', subject: 'Event sometime this week', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Vander Wield', date: 'Oct 18, 2015', subject: 'Wus good', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Russell Martin', date: 'Oct 16, 2015', subject: 'Housewarming Invitation', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jonathan Spencer', date: 'Oct 13, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Adrian Bromfield', date: 'Oct 10, 2015', subject: 'Re: Flood', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jack The Ripper', date: 'Oct 10, 2015', subject: 'Caught a body', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jill Slurpy', date: 'Oct 8, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jack Trenton(My Agent)', date: 'Oct 8, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'}
  ]
});
