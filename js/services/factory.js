(function () {
  'use strict';

  angular
      .module('app')
      .factory('factory', factory);

  factory.$inject = ['$http', '$q'];

  function factory($http, $q) {
    var service = {
      getData: getData
    };

    return service;

    function getData() {
      var q = $q.defer();
      $http({
        method: "GET",
        url: 'cm.mmi.macc.com.ua/tests/sample.php'
      }).then(handleSuccess, handleError);
      function handleSuccess(response) {
        q.resolve(response);
      };
      function handleError(error) {
        q.resolve(error);
      };
      return q.promise;
    }
  }
})();
