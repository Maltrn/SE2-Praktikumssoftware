// enable Selectpicker with angular custom directive
var app = angular.module("SE2-Software");

app.directive('selectpicker', function () {
    return {
      restrict: 'C',
      link: function (scope, element) {
        $(element).selectpicker({
          style: 'btn-my-block'
        });
      }
    };
  });

  app.directive('selectpickernew', function () {
      return {
        restrict: 'C',
        link: function (scope, element) {
          $(element).selectpicker({
            style: 'btn-my-default'
          });
        }
      };
    });
