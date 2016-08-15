(function () {
  'use strict';

  angular
      .module('app')
      .controller('controller', controller);

  controller.$inject = ['factory'];

  function controller(factory) {
    /* jshint validthis:true */
    var vm = this;
    vm.books = [];
    vm.index = null;
    vm.showWindow = false;
    vm.statusError = false;
    vm.statusOk = false;
    vm.title = "Demo application Title";


    factory.getData().then(function (data) {
      if (data.status == 200) {
        vm.books = data.data;
        vm.statusOk = true;
      } else {
        vm.statusError = true;
      }
    });

    vm.showModal = function (id) {
      vm.index = id;
      vm.showWindow = true;
    }
  }
})();
