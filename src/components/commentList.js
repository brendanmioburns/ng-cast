angular.module('video-player')

.component('commentList', {
  bindings: {
    comments: '<',
  },
  controller: function($scope) {
  },

  templateUrl: 'src/templates/commentList.html'
});