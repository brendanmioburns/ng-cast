angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(options, callback) {

    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: options
    }).then(function successCallback(data) {
      callback(data.data.items);
    }, function errorCallback(data) {
      console.log('this is an error', data);
    });
  };
  this.pullComments = function(options, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/commentThreads',
      params: options
    }).then(function successCallback(data) {
      callback(data.data.items);
    }, function errorCallback(data) {
      console.log('this is an error', data);
    });
  };
});
