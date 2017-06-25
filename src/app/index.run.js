(function() {
  'use strict';

  angular
    .module('ipl')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
