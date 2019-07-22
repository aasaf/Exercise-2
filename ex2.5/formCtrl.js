// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formCtrl", FormCtrl)



// DI dependency injection - IOC
function FormCtrl($scope) {
    $scope.person = new Person();
    function Person(name,age,password,gender,company_car, isbike){
    this.name=name
    this.age = age
    this.password =password
    this.gender = gender
    this.company_car = company_car
    this.isbike = isbike

    }
}
