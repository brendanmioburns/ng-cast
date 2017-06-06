angular.module('video-player')

.component('videoPlayer', {
  controller: function($scope) {
    this.generate = function() {
      return "https://www.youtube.com/embed/".concat(this.current.id.videoId);
    };
  },
  bindings: {
    current: '<'
  },  
  templateUrl: 'src/templates/videoPlayer.html'
});
