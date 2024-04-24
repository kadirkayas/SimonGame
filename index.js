    let level = 0;
    let clickedColors = [];
    let gameColors = []
$(".record").text("Max Record: "+getCookie("record"));
$(".start").click(function () {
    $(this).text("Restart Game");
    if(getCookie("record")===null){
        setCookie("record", 0);
    }
    clickedColors = [];
    gameColors = []
    level = 0;
    
    ramdomColor(); 
})
$(".click").click(function () {
    let clicked=$(this).attr("id");
    $("#" + clicked).addClass("pressed");
    setTimeout(function() {
        $("#" + clicked).removeClass("pressed");
    }, 100);
    clickedColors.push(clicked);
    checkColor(clickedColors.length-1)
})

function checkColor(clicked){
    if(gameColors[clicked]===clickedColors[clicked]){
        if(clickedColors.length===gameColors.length){
            const audio = new Audio("sounds/level-up.mp3");
            audio.play();
            setTimeout(function() {
               ramdomColor();
            }, 700);
        }
    }
    else{
        $(".title").text("Game Over");
        startOver();
    }
}
function startOver() {
    if(getCookie("record")<level){
        setCookie("record", level);
        $(".record").text("Max Record: "+getCookie("record"));
    }
    $("#start-btn").text("Start Game");
    const audio = new Audio("sounds/game-over.mp3");
    audio.play();
}


function ramdomColor() {
    level++;
    clickedColors = [];
    $(".title").text("Level " + level);
    let colours = ["green", "red", "yellow", "blue"];
    let random = Math.floor(Math.random() * 4);
    gameColors.push(colours[random]);
    $("#" + colours[random]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function setCookie(record, value) {
    document.cookie = record + "=" + value ;
}
function getCookie(record) {
    var recordNQ = record + "=";
    var split = document.cookie.split(';');
    for(var i=0;i < split.length;i++) {
      var c = split[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(recordNQ) == 0) return c.substring(recordNQ.length,c.length);
    }
    return null;
}

  
