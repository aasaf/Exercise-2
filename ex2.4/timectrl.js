
// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("timeCtrl", TimeCtrl)


// DI dependency injection - IOC
function TimeCtrl($scope) {
    //alert("hello from time controller")
    
    $scope.time = new Date();
    $scope.increaseTime = function() {
        $scope.time= new Date();
    }
    $scope.name = "asaf"
    $scope.reverseName = function()
    {
         $scope.name = $scope.name.split('').reverse().join('');
    }
}