angular.module('knowledge')

.controller('CategoriesCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/categories').success(function(data){
    $scope.categories = data;
  });
}])

.controller('CategoriesCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
  $http.get('/categories').success(function(data){
    $scope.categories = data;
  });

  $scope.addCategory = function(){
    var data = {
      name: $scope.name,
      description: $scope.description
    }

    $http.post('/categories', data).success(function(data, status){
      console.log(status);
    });

    $location.path('/categories');
  }

}])

.controller('CategoryEditCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
  $http.get('/categories/'+ $routeParams.id).success(function(data){
    $scope.category = data;
    console.log($scope.category);
  });

  $scope.updateCategory = function(){
    var data = {
      id:          $routeParams.id,
      name:        $scope.category.name,
      description: $scope.category.description
    }

    $http.put('/categories/'+ $routeParams.id, data).success(function(data, status){
      console.log(status);
    });

    $location.path('/categories');
  }

}]);