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

    this.searchResults = (query) => {
      let data = {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      };
      youTube.search(data, this.updateFromSearch);
    };


    this.getComments = (videoId) => {
      let data = {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        videoId: videoId,
        maxResults: 5,
      };
      let results = youTube.pullComments(data, this.updateFromCommentsSearch);
    };

    this.updateFromCommentsSearch = (comments) => {
      this.comments = comments;
    };

    this.searchResults('cats');
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
  },
  
  templateUrl: 'src/templates/app.html',

});





