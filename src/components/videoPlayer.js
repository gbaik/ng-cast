angular.module('video-player')
.controller('VideoPlayerCtrl', function($scope) {
  $scope.getIframeSrc = function(videoId) {
    return 'https://www.youtube.com/embed/' + videoId;
  };
})


.component('videoPlayer', {
  controller: 'VideoPlayerCtrl',
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
