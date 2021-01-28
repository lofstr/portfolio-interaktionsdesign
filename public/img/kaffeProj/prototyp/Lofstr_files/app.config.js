app.config(function ($routeProvider) {
    $routeProvider
        .when("/nappn", {
            templateUrl: "views/nappnProj/nappnProj.html",
            controller: "nappnController",
            css: 'styles/style.css'
        }).when("/kaffe", {
            templateUrl: "views/kaffeProj/kaffeProj.html",
            controller: "kaffeController",
            css: 'styles/style.css'
        }).when("/", {
            templateUrl: "views/home/home.html",
            controller: "homeController",
            css: 'styles/style.css'
        });
});