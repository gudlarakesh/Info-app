var app = angular.module('knowledge', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/categories', {
      templateUrl: 'views/categories.view.html',
      controller: 'CategoriesCtrl'
    }).
    when('/articles', {
      templateUrl: 'views/articles.view.html',
      controller: 'ArticlesCtrl'
    }).
    when('/articles/details/:id', {
      templateUrl: 'views/articles_detail.view.html',
      controller: 'ArticlesDetailsCtrl'
    }).
    when('/articles/category/:category', {
      templateUrl: 'views/cat_articles.view.html',
      controller: 'ArticlesCategoryCtrl'
    }).
    when('/articles/add', {
      templateUrl: 'views/add_article.view.html',
      controller: 'ArticlesCreateCtrl'
    }).
    when('/category/add', {
      templateUrl: 'views/add_category.view.html',
      controller: 'CategoriesCreateCtrl'
    }).
    when('/articles/edit/:id', {
      templateUrl: 'views/edit_article.view.html',
      controller: 'ArticlesEditCtrl'
    }).
    when('/category/edit/:id', {
      templateUrl: 'views/edit_category.view.html',
      controller: 'CategoryEditCtrl'
    }).
    otherwise({ redirectTo: '/categories'})
}])