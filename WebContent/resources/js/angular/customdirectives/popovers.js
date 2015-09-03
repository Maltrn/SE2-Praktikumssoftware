/**
 + Benutzderdefinierte AngularJS Direktive um mit Boostrap popovers anzeigen zu können
**/
var customDirectives = angular.module('SE2-Software');
customDirectives.directive('customPopover', function () {
    return {
        restrict: 'A',
        template: '<span class="glyphicon glyphicon-pencil"></span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;

            $(el).popover({
                trigger: 'click',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
});
