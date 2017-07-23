var playerSeq = [];
var seq = [];

$("#reset").on("click", function(){
    seq = [];
    $("#count").text(seq.length);
});


var soundBlue = new Audio();
soundBlue.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
var soundGreen = new Audio();
soundGreen.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
var soundYellow = new Audio();
soundYellow.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
var soundRed = new Audio();
soundRed.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";

$('.blue').on("click", function(){
    $(this).toggleClass("highlight");
    soundBlue.play();
    var a = this;
    setTimeout(function() {
        $(a).toggleClass("highlight");
    }, 1000);
    playerSeq.push(0);
    if(seq[playerSeq.length - 1] != 0){
        if($("#strictcheckbox").is(':checked') == true){
            seq = [];
            setTimeout(function(){
                $("#start").click();
            }, 3000);
        } else {
            setTimeout(function(){
                $("#strictStart").click();
            }, 3000);
        }
        $("#status").text("Incorrect");
    } else if(playerSeq.length == seq.length){
        setTimeout(function(){
            $("#start").click();
        }, 3000);
        //console.log("next round");
    }
});

$('.green').on("click", function(){
    $(this).toggleClass("highlight");
    soundGreen.play();
    var a = this;
    setTimeout(function() {
        $(a).toggleClass("highlight");
    }, 1000);
    playerSeq.push(1);
    if(seq[playerSeq.length - 1] != 1){
        if($("#strictcheckbox").is(':checked') == true){
            seq = [];
            setTimeout(function(){
                $("#start").click();
            }, 3000);
        } else {
            setTimeout(function(){
                $("#strictStart").click();
            }, 3000);
        }
        $("#status").text("Incorrect");
    } else if(playerSeq.length == seq.length){
        setTimeout(function(){
            $("#start").click();
        }, 3000);
        //console.log("next round");
    }
});

$('.yellow').on("click", function(){
    $(this).toggleClass("highlight");
    soundYellow.play();
    var a = this;
    setTimeout(function() {
        $(a).toggleClass("highlight");
    }, 1000);
    playerSeq.push(2);
    if(seq[playerSeq.length - 1] != 2){
        if($("#strictcheckbox").is(':checked') == true){
            seq = [];
            setTimeout(function(){
                $("#start").click();
            }, 3000);
        } else {
            setTimeout(function(){
                $("#strictStart").click();
            }, 3000);
        }
        $("#status").text("Incorrect");
    } else if(playerSeq.length == seq.length){
        setTimeout(function(){
            $("#start").click();
        }, 3000);
        //console.log("next round");
    }
});

$('.red').on("click", function(){
    $(this).toggleClass("highlight");
    soundRed.play();
    var a = this;
    setTimeout(function() {
        $(a).toggleClass("highlight");
    }, 1000);
    playerSeq.push(3);
    if(seq[playerSeq.length - 1] != 3){
        if($("#strictcheckbox").is(':checked') == true){
            seq = [];
            setTimeout(function(){
                $("#start").click();
            }, 3000);
        } else {
            setTimeout(function(){
                $("#strictStart").click();
            }, 3000);
        }
        $("#status").text("Incorrect");
    } else if(playerSeq.length == seq.length){
        setTimeout(function(){
            $("#start").click();
        }, 3000);
        //console.log("next round");
    }
});

$("#dummyBlue").on("click", function(){
    $(".blue").toggleClass("highlight");
    soundBlue.play();
    setTimeout(function() {
        $(".blue").toggleClass("highlight");
    }, 1000);
});

$("#dummyGreen").on("click", function(){
    $(".green").toggleClass("highlight");
    soundGreen.play();
    setTimeout(function() {
        $(".green").toggleClass("highlight");
    }, 1000);
});


$("#dummyYellow").on("click", function(){
    $(".yellow").toggleClass("highlight");
    soundYellow.play();
    setTimeout(function() {
        $(".yellow").toggleClass("highlight");
    }, 1000);
});


$("#dummyRed").on("click", function(){
    $(".red").toggleClass("highlight");
    soundRed.play();
    setTimeout(function() {
        $(".red").toggleClass("highlight");
    }, 1000);
});

$("#start").on("click", function(){
    seq.push(Math.floor((Math.random() * 4)));
    $("#count").text(seq.length);
    $("#status").text(" ");
    for(var j = 0; j < seq.length + 1; j++){
        if(seq[j] == 0){
            setTimeout(function(){
                $('#dummyBlue').click();
            }, (1000*j));
        } else if (seq[j] == 1){
            setTimeout(function(){
                $('#dummyGreen').click();
            }, (1000*j));
        } else if (seq[j] == 2){
            setTimeout(function(){
                $('#dummyYellow').click();
            }, (1000*j));
        } else if (seq[j] == 3){
            setTimeout(function(){
                $('#dummyRed').click();
            }, (1000*j));
        } 
    }
    playerSeq = [];
});

$("#strictStart").on("click", function(){
    $("#status").text(" ");
    for(var j = 0; j < seq.length + 1; j++){
        if(seq[j] == 0){
            setTimeout(function(){
                $('#dummyBlue').click();
            }, (1000*j));
        } else if (seq[j] == 1){
            setTimeout(function(){
                $('#dummyGreen').click();
            }, (1000*j));
        } else if (seq[j] == 2){
            setTimeout(function(){
                $('#dummyYellow').click();
            }, (1000*j));
        } else if (seq[j] == 3){
            setTimeout(function(){
                $('#dummyRed').click();
            }, (1000*j));
        } 
    }
    playerSeq = [];
});