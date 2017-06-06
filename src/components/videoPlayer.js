angular.module('video-player')

.component('videoPlayer', {
  controller: function($scope) {
    this.generate = function() {
      return "https://www.youtube.com/embed/".concat(this.curr[0].id.videoId);
    };
  },
  bindings: {
    curr: '<'
  },  
  templateUrl: 'src/templates/videoPlayer.html'
});
