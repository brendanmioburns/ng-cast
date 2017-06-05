angular.module('video-player')

.component('videoList', {
  controller: function($scope) {
    // console.log($scope);
    this.videos = exampleVideoData;
    // this.currentVideo = exampleVideoData[0];

  },

  templateUrl: 'src/templates/videoList.html'
});
