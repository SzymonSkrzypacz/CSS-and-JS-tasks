$(".interface").on("click", function () {

    console.log(this.className);
    console.log($(this).attr("class"))

    if ($(this).hasClass("orange")) {
        console.log("Orange");
        // $("body").toggleClass("orange");
        // $("body").css("background-color", "orange");
        // $("body").css({
        //     "background-color": "orange"
        // })

        $("body").attr("class", "orange")
    } else if ($(this).hasClass("green")) {
        $("body").attr("class", "green")
    } else if ($(this).hasClass("increase")) {
        console.log("increase");

        $(".text").animate({
            "font-size": "+=2"
        }, 500)

    } else if ($(this).hasClass("move")) {
        console.log("move");
        $(".text").animate({
            "left": "+=5px",
            "letter-spacing": "+=2px"
        })
    }

    // if (this.classList.contains("green")) {
    //     console.log("I hyc w zielonym");
    // }






})