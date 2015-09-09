/**
 + Benutzderdefinierte AngularJS Direktive um den Bootstrap Selectpicker nutzen zu können
**/
(function(){
  var app = angular.module("SE2-Software");
  app.directive('selectPicker', function($timeout) {
    return {
      link: function(scope, element, attrs) {
        $timeout(function() {
          $(element).selectpicker({
            style: 'btn-my-block'
          });
        });

      }
    };
  });
}());
