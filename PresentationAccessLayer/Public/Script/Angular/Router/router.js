var myapp = angular.module('myapp', ["ui.router"])
myapp.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
     $urlRouterProvider.otherwise("/User1/route1")
    
    $stateProvider
                    .state('Simple_sql', {
        url: "route1",
        templateUrl: "Simple_sql"
    })

                    .state('Simple_sql_SP', {
        url: "route2",
        templateUrl: "Simple_sql_SP"
    })



});