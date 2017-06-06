angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentVideo: '<'
  },
  controller: function($scope) {
    this.generate = () => {
      return `https://www.youtube.com/embed/${this.currentVideo.id.videoId}`;
    };
  },
 
  templateUrl: 'src/templates/videoPlayer.html'
});
