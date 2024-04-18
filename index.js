start();


function start(){
 var level=0;
 var color=[];
 var clickedColor=[];
 var live=true;
while(live)
 randomColor();
 clickedButton();




 function clickedButton() { 
    $( "#green" ).on( "click", function() {
        clickedColor.push("green")
      } );
      $( "#red" ).on( "click", function() {
        clickedColor.push("red")
      } );
      
      $( "#yellow" ).on( "click", function() {
        clickedColor.push("yellow")
      } );
      $( "#blue" ).on( "click", function() {
        clickedColor.push("blue")
      } );
  }

 function randomColor(){
    var ranColor=["green","red","yellow","blue",]
    var random=Math.floor(Math.random()*4);
    color.push(ranColor[random])
}

}




