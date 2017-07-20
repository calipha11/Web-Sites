$(".plusbreak").on("click", function(){
    var a = parseInt($(".breaklength").text());
    a++;
    $(".breaklength").text(a);
});

$(".minusbreak").on("click", function(){
    var a = parseInt($(".breaklength").text());
    if(0 < a){
        a--;
        $(".breaklength").text(a);
    };
});

$(".plussession").on("click", function(){
    var a = parseInt($(".sessionlength").text());
    a++;
    $(".sessionlength").text(a);
    $(".timer").text(a);
});

$(".minussession").on("click", function(){
    var a = parseInt($(".sessionlength").text());
    if(0 < a){
        a--;
        $(".sessionlength").text(a);
        $(".timer").text(a);
    }
});

var a = parseInt($(".sessionlength").text());
var distance = a*60*1000;
var x = 0; // makes x a global variable to use setInterval() and clearInterval() on
var timer = 0; // uses a placeholder so that multiple setIntervals aren't set at the same time

function startTimer() {
    var now = new Date().getTime();
    var end = now + distance;
    var difference = end - now; // set up allows it to check with the internal clock each time, rather than the incrementer
        
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
        
    distance -= 1000;
        
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}

$("#startbutton").on("click", function(){
    if(timer == 0){
        x = setInterval(startTimer, 1000);
        timer = 1;
    }
});


$("#stopbutton").on("click", function(){
    clearInterval(x);
    timer = 0;
});

$("#newInterval").on("click", function(){
    a = parseInt($(".sessionlength").text());
    distance = a*60*1000;
});