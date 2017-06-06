angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    handleVideoEntryTitleClick: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});
