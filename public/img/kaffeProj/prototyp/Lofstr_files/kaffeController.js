app.controller("kaffeController", function ($window, $scope, $document) {
    $scope.hideArrow = true;
    $scope.stage = "Prototyp"
    $scope.stageNumber = 2;
    //Animera hover på bold text och bilden? Så om man hovrar på slider så highlightas den på bilden?
    $scope.fadeIn = () => {
        document.getElementById("stageTitle").classList.add("fadeIn")
    }

    $scope.change_stage = (stageNumber) => {
        document.getElementById("stageTitle").classList.remove("fadeIn")


        if (stageNumber == 1) {
            $scope.stage = "Idégenerering"
            $scope.stageNumber = 1
        }
        if (stageNumber == 2) {
            $scope.stage = "Prototyp"
            $scope.stageNumber = 2
        }
        if (stageNumber == 3) {
            $scope.stage = "Animering"
            $scope.stageNumber = 3
        }

        $("#stagesPage").get(0).scrollIntoView();
        $scope.fadeIn()
    }

    //Show arrow after 3s when entering page
    setTimeout(() => {
        $scope.hideArrow = false;
        $scope.$apply();

    }, 3000);


    $document.on("scroll", function () {
        //console.log($window.scrollY);
        if ($window.scrollY > 150) {
            $scope.hideArrow = true;
            $scope.$apply();

        } else {
            $scope.hideArrow = false;
            $scope.$apply();
        }

    });


});

// init controller
// var controller = new ScrollMagic.Controller({
//     vertical: false
// });

// new ScrollMagic.Scene({
//         duration: 10000, // the scene should last for a scroll distance of 100px
//         offset: 50 // start this scene after scrolling for 50px
//     })
//     .setPin("#testScroll") // pins the element for the the scene's duration
//     .addIndicators()
//     .addTo(controller); // assign the scene to the controller

//build tween
// var tween = TweenMax.to("#testTarget", 0.5, {
//     backgroundColor: "green",
//     width: "+=400"
// });



// build scene
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#testScroll",
//         duration: 500
//     })
//     .setTween(tween)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);