;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .filter('textReverse', textReverse);
    textReverse.$inject = [];

    function textReverse() {
        return function(text){
            return text.split('').reverse().join('');
        }
    }
}(window, angular, undefined));
