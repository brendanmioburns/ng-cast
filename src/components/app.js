angular.module('video-player')

.controller('AppCtrl', function($scope) {

})

.component('app', {

  controller: function($scope) {
    // this.selectVideo = function()
    this.current = exampleVideoData[0];
    this.videos = exampleVideoData;
    this.curr = [exampleVideoData[0]];
  },
  
  templateUrl: 'src/templates/app.html',

});





