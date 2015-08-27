// enable Selectpicker with angular custom directive
angular.module("SE2-Software")
  .directive('selectpicker', function () {
    return {
      restrict: 'C',
      link: function (scope, element) {
        $(element).selectpicker({
          style: 'btn-my-block'
        });
      }
    };
  });
