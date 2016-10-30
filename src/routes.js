(function() {
"use strict";

angular.module("MenuApp")
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise("/");

  // Set up UI States
  $stateProvider

  .state("home", {
    url: "/",
    templateUrl: "src/menuapp/templates/home.template.html"
  });

  .state("categoriesList", {
    url: "/categories",
    templateUrl: "src/menuapp/templates/categories.template.html"
  })
}
})();
