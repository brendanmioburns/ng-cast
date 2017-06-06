angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function($scope) {
     

    this.generate = () => {
      console.log("regenerating", this.video);
      return "https://www.youtube.com/embed/" + this.video.id.videoId;
    };
    // this.videos = exampleVideoData;
    // this.current = this.videos[0];
    // this.url = "https://www.youtube.com/embed/" + this.current.id.videoId.toString();
  },
 
  templateUrl: 'src/templates/videoPlayer.html'
});
