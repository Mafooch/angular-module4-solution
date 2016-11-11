(function() {
"use strict";
angular.module("data")
.service("MenuDataService", MenuDataService)
.constant("ApiBasePath", "https://davids-restaurant.herokuapp.com/");


MenuDataService.$inject = ["ApiBasePath", "$http"];
function MenuDataService(ApiBasePath, $http) {
  var service = this;

  service.getAllCategories = function() {
    // var categories = $http({method: "GET", url: ApiBasePath + "categories.json"});
    var response = $http({
      method: "GET",
      url: ApiBasePath + "categories.json"
    });
    console.log(response);
    return response.then(function(response) {
      response.data;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: ApiBasePath + "menu_items.json",
      params: { categeory: categoryShortName }
    });
  };
}
})();
