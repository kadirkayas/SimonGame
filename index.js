$(".start").click(function () {
    start();    
    $(this).text("Restart Game");
})

function start() {
    
    let level = 0;
    let colours = ["green", "red", "yellow", "blue"];
    let clickedColors = [];
    let gameColors = []
    
    ramdomColor(); 
    clickColorButton();

    function checkColor(clicked){
        if(gameColors[clicked]===clickedColors[clicked]){
            if(clickedColors.length===gameColors.length){
                const audio = new Audio("sounds/level-up.mp3");
                audio.play();
                setTimeout(function() {
                   ramdomColor();
                }, 500);
            }
        }
        else{
            $(".title").text("Game Over");
            startOver();
        }
    }
    function startOver() {
        level = 0;
        gamePattern = [];
        $("#start-btn").text("Start Game");
        
        const audio = new Audio("sounds/game-over.mp3");
        audio.play();
    }


    function clickColorButton() {    
        $(".click").click(function () {
            let clicked=$(this).attr("id");
            $("#" + clicked).addClass("pressed");
            setTimeout(function() {
                $("#" + clicked).removeClass("pressed");
            }, 100);
            clickedColors.push(clicked);
            console.log(clicked)
            checkColor(clickedColors.length-1)

         })
    }

    function ramdomColor() {
        level++;
        clickedColors = [];
        $(".title").text("Level " + level);
        let colours = ["green", "red", "yellow", "blue"];
        let random = Math.floor(Math.random() * 4);
        gameColors.push(colours[random]);
        $("#" + colours[random]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        console.log(colours[random]+" sonuc");
    }
    
}


