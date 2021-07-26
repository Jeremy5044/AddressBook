'use strict';

describe('myApp.address module', function() {

  beforeEach(module('myApp.cards'));

  describe('cards controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var addressCtrl = $controller('CardsCtrl');
      expect(addressCtrl).toBeDefined();
    }));

  });
});
