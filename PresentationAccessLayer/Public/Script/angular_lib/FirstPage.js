
       


var myapp = angular.module('myapp', ["ui.router"])

myapp.config(function ($stateProvider, $urlRouterProvider) {
    debugger;
// For any unmatched url, send to /route1

$urlRouterProvider.otherwise("/User1/route1_spsingh")

$stateProvider

.state('route1', {

url: "route1",
    
templateUrl: "User1/route1.html"

})

.state('route1.list', {

url: "/list",

templateUrl: "User1/route1.list.html",

controller: function ($scope) {

$scope.items = ["Lappy", "Mobile", "Desk", "Pen"];

}

})

.state('route2', {

url: "route2",

templateUrl: "User2/route2.html"

})

.state('route2.list', {

url: "/list",

templateUrl: "User2/route2.list.html",

controller: function ($scope) {

$scope.things = ["A", "Set", "Of", "Things"];

}

})

})

