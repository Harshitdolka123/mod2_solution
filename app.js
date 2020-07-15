(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var itemAdder = this;


      itemAdder.toBuyitems = ShoppingListCheckOffService.getToBuyItems();
      itemAdder.bought = function(itemIndex)  {
          ShoppingListCheckOffService.bought(itemIndex);
        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)  {
      var showList = this;


        showList.boughtItems = ShoppingListCheckOffService.getItems();


    }


    function ShoppingListCheckOffService()  {
      var service = this;

      //List of shopping items
      var toBuyItems = [
        {
           name: "Cookies", quantity: 50
        },
        {
           name: "Milk", quantity: 2
        },
        {
           name: "Chocolates", quantity: 20
        },
        {
           name: "Donuts", quantity: 4
        },
        {
           name: "Cold Drinks", quantity: 5
        }
       ];

      var boughtItems = [];

      service.getToBuyItems = function()  {
        return toBuyItems;
      };

      service.bought = function(itemIndex)  {
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
      };

      service.getItems = function()   {
          return boughtItems;
      };

    }
})();
