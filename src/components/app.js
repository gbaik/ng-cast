angular.module('video-player')
.controller('MainCtrl', function() {
  this.videos = exampleVideoData;
  
  this.handleVideoEntryTitleClick = (event) => {
    this.video = event;
  };

  this.handleVideoEntryTitleClick(exampleVideoData[0]);
})

.component('app', {
  controller: 'MainCtrl',
  templateUrl: 'src/templates/app.html'
});
