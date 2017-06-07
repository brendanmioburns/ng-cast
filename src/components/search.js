angular.module('video-player')

.controller('SearchController', function(youTube) {

  this.search = (item) => {
    youTube.search(item, this.updateResults);
  };
})
.component('search', {
  bindings: {
    updateResults: '<'
  },
  controller: 'SearchController',
  templateUrl: 'src/templates/search.html'
});
