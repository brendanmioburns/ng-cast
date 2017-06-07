angular.module('video-player')

.controller('AppCtrl', function($scope) {

})

.component('app', {

  controller: function($scope, youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.comments = exampleCommentData;
    this.updateFromSearch = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
      this.getComments(this.currentVideo.id.videoId);
    };

    this.getComments = (videoId) => {
      let results = youTube.pullComments(videoId, this.updateFromCommentsSearch);
    };

    this.updateFromCommentsSearch = (comments) => {
      this.comments = comments;
    };

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    youTube.search('cats', this.updateFromSearch);
  },

  
  templateUrl: 'src/templates/app.html',

});





