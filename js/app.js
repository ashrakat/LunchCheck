(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
  
    
function LunchCheckController($scope) {
  $scope.food = "";
  $scope.message = "";
  $scope.color = "red";
  $scope.border_color = "red";    
   
  $scope.displayMessage = function () {
    $scope.message  = checkIfMuch($scope.food);
    if($scope.message != "please enter the data first!")
        $scope.color = "green";
        $scope.border_color = "green";
  };
    
function checkIfMuch(str){   
  str = str.split(",");     
  var numofFood = str.length;    
  for( var i = 0 ; i < str.length ; i++)
      {
          if(str[i] == "")
              numofFood -= 1;                 // do not count empty items
      }
  if (numofFood <= 0 )
      return "please enter the data first!";    
  else{
      if(numofFood > 3)
        return "Too Much!";
       else{
        return "Enjoy !";
        }  
    }
  }
}

})();
