angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<'
  },
  templateUrl: 'src/templates/videoList.html',
})
.controller('VideoListCtrl', function VideoListCtrl($scope) {
  $scope.videos = exampleVideoData;
  // console.log('scope', $scope.videos);     
});

