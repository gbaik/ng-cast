angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html'

})

.controller('VideoListEntryCtrl', function($scope){
  $scope.video = exampleVideoData[0];

});
