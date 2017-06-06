angular.module('video-player')
.controller('MainCtrl', function() {
  this.videos = exampleVideoData;
  this.video = exampleVideoData[0];
})

.component('app', {
  controller: 'MainCtrl',
  templateUrl: 'src/templates/app.html'
});

