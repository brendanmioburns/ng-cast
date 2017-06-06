angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    current: '<',
    curr: '<'
  },
  controller: function($scope) {
    // console.log($scope);
    // this.currentVideo = exampleVideoData[0];
    this.onClick = function(index) {
      console.log(index);
      debugger;
      this.curr.pop();
      this.curr.push(this.videos[index]);
    };
  },

  templateUrl: 'src/templates/videoList.html'
});
