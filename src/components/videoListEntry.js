angular.module('video-player')

.component('videoListEntry', {
  controller: 'MainCtrl',
  bindings: {
    video: '<',
    handleVideoEntryTitleClick: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});

