// var current_page = 1;
// $(document).on('click', '.portfolioButton', function (event) {
//     var elmnt = document.getElementById("portfolio");
//     current_page = 3;
//     elmnt.scrollIntoView();
// });

// $(document).on('click', '.aboutButton', function (event) {
//     var elmnt = document.getElementById("about");
//     elmnt.scrollIntoView();
//     document.getElementById("avatarBox").classList.add("aos-animate")
//     document.getElementById("stackInfoBox").classList.add("aos-animate")
//     current_page = 2;
// });



app.controller("mainController", function ($scope) {

});



// $(".backgroundFilter").hover(function() {
//     $(this).classList.add("active")
// }, function() {
//     $(this).classList.remove("active")
// })
// var timer;
// window.addEventListener("wheel", event => {
//     if (timer) {
//         window.clearTimeout(timer);
//     }

//     timer = window.setTimeout(function () {
//         // actual callback
//         console.log("Firing!");
//         const delta = Math.sign(event.deltaY); //Scroll direction
//         if (delta === 1 && current_page < 3) {
//             current_page += 1;
//         }
//         else if (delta === -1 && current_page != 1) {
//             current_page -= 1;
//         }

//         if (current_page == 1) {
//             console.log("page 1");
//         }

//         if (current_page == 2) {
//             console.log("page 2");
//             document.getElementById("avatarBoxx").classList.add("aos-animate")
//             document.getElementById("stackInfoBoxx").classList.add("aos-animate")
//         }
//         if (current_page == 3) {
//             console.log("page 3");

//         }
//         console.log("actual page", current_page);

//     }, 32);
// });