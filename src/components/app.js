angular.module('video-player')

.controller('AppCtrl', function($scope) {

})

.component('app', {

  controller: function($scope) {
    // this.selectVideo = function()
    this.videos = exampleVideoData;
    this.curr = [exampleVideoData[0]];
    this.current = exampleVideoData[0];
    this.handleClick = function(video) {
      console.log("this click is the best", video.id);
      this.current = video;
    };
  },
  
  templateUrl: 'src/templates/app.html',

});





