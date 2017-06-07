angular.module('video-player')

.component('videoListEntry', {
  controller: 'MainCtrl',
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});

