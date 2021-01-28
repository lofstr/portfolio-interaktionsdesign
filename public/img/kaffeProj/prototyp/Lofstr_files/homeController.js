app.controller("homeController", function ($scope) {
    $scope.hovering = false;
    document.addEventListener('aos:in', ({
        detail
    }) => {
           if (detail.classList[0] == "stackText") {
            $(".fallingArrow").addClass("aos-init").removeClass("aos-animate")
           }
    });

    document.addEventListener('aos:out', ({
        detail
    }) => {
        if(detail.classList[0] == "stackText") {
            $(".fallingArrow").addClass("aos-init").addClass("aos-animate")
        }
        
    });


});

