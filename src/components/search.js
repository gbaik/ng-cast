angular.module('video-player')

.component('search', {
  controller: 'MainCtrl',
  bindings: {
    video: '<',
    searchResults: '<',
    input: '<'
  },
  templateUrl: 'src/templates/search.html'
});
