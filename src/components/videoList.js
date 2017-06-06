angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    current: '<'
  },
  controller: function($scope) {
    // console.log($scope);
    // this.currentVideo = exampleVideoData[0];
    this.onClick = function(video) {
      this.current = video;
    };
  },

  templateUrl: 'src/templates/videoList.html'
});
