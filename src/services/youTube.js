angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(query, callback) {

    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then(function successCallback(data) {
      callback(data.data.items);
    }, function errorCallback(data) {
      console.log('this is an error', data);
    });
  };
  this.pullComments = function(videoId, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/commentThreads',
      params: data = {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        videoId: videoId,
        maxResults: 5,
      }
    }).then(function successCallback(data) {
      callback(data.data.items);
    }, function errorCallback(data) {
      console.log('this is an error', data);
    });
  };
});
