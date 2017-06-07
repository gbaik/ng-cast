angular.module('video-player')
.controller('MainCtrl', function($scope) {
  this.videos = exampleVideoData;

  this.selectVideo = (event) => {
    this.video = event;
  };

  this.searchResults = (data) => {
    console.log(data);
  };
  
  this.selectVideo(exampleVideoData[0]);
})

.component('app', {
  controller: 'MainCtrl',
  templateUrl: 'src/templates/app.html'
});
