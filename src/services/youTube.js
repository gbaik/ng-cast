angular.module('video-player')
.service('youTube', function($http) {
  this.getData = function(youTube) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search'
    }).then(function (response) {
      $scope.data = response.data;  
    });
  };

});
