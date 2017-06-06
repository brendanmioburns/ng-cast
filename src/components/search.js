angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  controller: function($scope, $interval) {

//    this.search = (item) => {
      // console.log(item);
    //   $interval(function() {

    //   this.result(item);
    //   }, 500);
    // };
  },
  templateUrl: 'src/templates/search.html'
});
