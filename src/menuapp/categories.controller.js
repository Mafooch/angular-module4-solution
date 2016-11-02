(function() {
"use strict";

angular.module("MenuApp")
.controller("CategoriesController", CategoriesController);

CategoriesController.$inject = ["MenuDataService", "categories"];
// TODO test without service
function CategoriesController(MenuDataService, categories) {
  var categoriesList = this;
  categoriesList.categories = categories;
}
})();
