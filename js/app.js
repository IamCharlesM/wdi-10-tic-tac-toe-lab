//Possible score set up

//functions
let makeBoard = function () {
    for (let i = 1; i <= 9; i++) {
        let $box = $("<div>")
        let $boxClass = "box-" + i
        let $boxClass1 = "box"
        $box.addClass($boxClass)
        $box.addClass($boxClass1)
        $("#board").append($box)
       
    }
    
}







//Variables and event listeners

let $box = $("#board .box")



$box.on("click", function (evt) {
    console.log("clicked")
})

let $reset = $(".clear-board")

$reset.on("click", function (e) {
    console.log($(e.currentTarget))
})

makeBoard()