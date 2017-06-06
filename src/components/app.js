angular.module('video-player')

.controller('AppCtrl', function($scope) {

})

.component('app', {
  // TODO
  //render the component
  // bindings: {
  //   videos: '<'
  // },
  

  controller: function($scope) {
    // this.selectVideo = function()
    this.current = exampleVideoData[0];
    this.videos = exampleVideoData;
  },
  
  templateUrl: 'src/templates/app.html',

});





