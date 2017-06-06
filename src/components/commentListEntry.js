angular.module('video-player')

.component('commentListEntry', {
  bindings: {
    comment: '<',
  },
  controller: function($scope) {
  },

  templateUrl: 'src/templates/commentListEntry.html'
});