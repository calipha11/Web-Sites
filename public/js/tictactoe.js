var board = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
];

$("#a1").on("click", function(){
    if(board[0][0] == 2){
        $("#a").addClass("fa-circle-o");
        board[0][0] = 1;
    }
});
$("#b1").on("click", function(){
    if(board[0][1] == 2){
        $("#b").addClass("fa-circle-o");
        board[0][1] = 1;
    }
});
$("#c1").on("click", function(){
    if(board[0][2] == 2){
        $("#c").addClass("fa-circle-o");
        board[0][2] = 1;
    }
});
$("#d1").on("click", function(){
    if(board[1][0] == 2){
        $("#d").addClass("fa-circle-o");
        board[1][0] = 1;
    }
});
$("#e1").on("click", function(){
    if(board[1][1] == 2){
        $("#e").addClass("fa-circle-o");
        board[1][1] = 1;
    }
});
$("#f1").on("click", function(){
    if(board[1][2] == 2){
        $("#f").addClass("fa-circle-o");
        board[1][2] = 1;
    }
});
$("#g1").on("click", function(){
    if(board[2][0] == 2){
        $("#g").addClass("fa-circle-o");
        board[2][0] = 1;
    }
});
$("#h1").on("click", function(){
    if(board[2][1] == 2){
        $("#h").addClass("fa-circle-o");
        board[2][1] = 1;
    }
});
$("#i1").on("click", function(){
    if(board[2][2] == 2){
        $("#i").addClass("fa-circle-o");
        board[2][2] = 1;
    }
});



$(".comp").on("click", function(){
if (((board[0][0] == 0) && (board[0][1] == 0) && (board[0][2] == 2)) || ((board[0][0] == 0) && (board[0][1] == 2) && (board[0][2] == 0)) || ((board[0][0] == 2) && (board[0][1] == 0) && (board[0][2] == 0))){
    console.log("firstrow");
    //board[0] = board[0].map(function(x){return 1});
    if(board[0][0] != 0){$("#a").addClass("fa-times"); board[0][0] = 1}
    if(board[0][1] != 0){$("#b").addClass("fa-times"); board[0][1] = 1}
    if(board[0][2] != 0){$("#c").addClass("fa-times"); board[0][2] = 1}
    $("#outcome").text("Computer won");
} else if (((board[1][0] == 0) && (board[1][1] == 0) && (board[1][2] == 2)) || ((board[1][0] == 0) && (board[1][1] == 2) && (board[1][2] == 0)) || ((board[1][0] == 2) && (board[1][1] == 0) && (board[1][2] == 0))){
    console.log("secondrow");
    //board[1] = board[1].map(function(x){return 1});
    if(board[1][0] != 0){$("#d").addClass("fa-times"); board[1][0] = 1}
    if(board[1][1] != 0){$("#e").addClass("fa-times"); board[1][1] = 1}
    if(board[1][2] != 0){$("#f").addClass("fa-times"); board[1][2] = 1}
    $("#outcome").text("Computer won");
} else if (((board[2][0] == 0) && (board[2][1] == 0) && (board[2][2] == 2)) || ((board[2][0] == 0) && (board[2][1] == 2) && (board[2][2] == 0)) || ((board[2][0] == 2) && (board[2][1] == 0) && (board[2][2] == 0))){
    console.log("thirdrow");
    //board[1] = board[1].map(function(x){return 1});
    if(board[2][0] != 0){$("#g").addClass("fa-times"); board[2][0] = 1}
    if(board[2][1] != 0){$("#h").addClass("fa-times"); board[2][1] = 1}
    if(board[2][2] != 0){$("#i").addClass("fa-times"); board[2][2] = 1}
    $("#outcome").text("Computer won");
} else if (((board[0][0] == 0) && (board[1][0] == 0) && (board[2][0] == 2)) || ((board[0][0] == 0) && (board[1][0] == 2) && (board[2][0] == 0)) || ((board[0][0] == 2) && (board[1][0] == 0) && (board[2][0] == 0))){
    console.log("firstcol");
    if(board[0][0] != 0){$("#a").addClass("fa-times"); board[0][0] = 1}
    if(board[1][0] != 0){$("#d").addClass("fa-times"); board[1][0] = 1}
    if(board[2][0] != 0){$("#g").addClass("fa-times"); board[2][0] = 1}    
    $("#outcome").text("Computer won");
} else if (((board[0][1] == 0) && (board[1][1] == 0) && (board[2][1] == 2)) || ((board[0][1] == 0) && (board[1][1] == 2) && (board[2][1] == 0)) || ((board[0][1] == 2) && (board[1][1] == 0) && (board[2][1] == 0))){
    console.log("secondcol");
    if(board[0][1] != 0){$("#b").addClass("fa-times"); board[0][1] = 1}
    if(board[1][1] != 0){$("#e").addClass("fa-times"); board[1][1] = 1}
    if(board[2][1] != 0){$("#h").addClass("fa-times"); board[2][1] = 1}
    $("#outcome").text("Computer won");
} else if (((board[0][2] == 0) && (board[1][2] == 0) && (board[2][2] == 2)) || ((board[0][2] == 0) && (board[1][2] == 2) && (board[2][2] == 0)) || ((board[0][2] == 2) && (board[1][2] == 0) && (board[2][2] == 0))){
    console.log("thirdcol");
    if(board[0][2] != 0){$("#c").toggleClass("fa-times"); board[0][2] = 1}
    if(board[1][2] != 0){$("#f").addClass("fa-times"); board[1][2] = 1}
    if(board[2][2] != 0){$("#i").addClass("fa-times"); board[2][2] = 1}
    $("#outcome").text("Computer won");
} else if (((board[0][0] == 0) && (board[1][1] == 0) && (board[2][2] == 2)) || ((board[0][0] == 0) && (board[1][1] == 2) && (board[2][2] == 0)) || ((board[0][0] == 2) && (board[1][1] == 0) && (board[2][2] == 0))){
    console.log("first diagonal");
    if(board[0][0] != 0){$("#a").addClass("fa-times"); board[0][0] = 1}
    if(board[1][1] != 0){$("#e").addClass("fa-times"); board[1][1] = 1}
    if(board[2][2] != 0){$("#i").addClass("fa-times"); board[2][2] = 1}
    $("#outcome").text("Computer won");
} else if (((board[0][2] == 0) && (board[1][1] == 0) && (board[2][0] == 2)) || ((board[0][2] == 0) && (board[1][1] == 2) && (board[2][0] == 0)) || ((board[0][2] == 2) && (board[1][1] == 0) && (board[2][0] == 0))){
    console.log("second diagonal");
    if(board[0][2] != 0){$("#c").addClass("fa-times"); board[0][2] = 1}
    if(board[1][1] != 0){$("#e").addClass("fa-times"); board[1][1] = 1}
    if(board[2][0] != 0){$("#g").addClass("fa-times"); board[2][0] = 1}
    $("#outcome").text("Computer won");
} else if (((board[0][0] == 1) && (board[0][1] == 1) && (board[0][2] == 2)) || ((board[0][0] == 1) && (board[0][1] == 2) && (board[0][2] == 1)) || ((board[0][0] == 2) && (board[0][1] == 1) && (board[0][2] == 1))){
    console.log("firstrow");
    //board[0] = board[0].map(function(x){return 1});
    if(board[0][0] != 1){$("#a").addClass("fa-times"); board[0][0] = 0}
    if(board[0][1] != 1){$("#b").addClass("fa-times"); board[0][1] = 0}
    if(board[0][2] != 1){$("#c").addClass("fa-times"); board[0][2] = 0}
} else if (((board[1][0] == 1) && (board[1][1] == 1) && (board[1][2] == 2)) || ((board[1][0] == 1) && (board[1][1] == 2) && (board[1][2] == 1)) || ((board[1][0] == 2) && (board[1][1] == 1) && (board[1][2] == 1))){
    console.log("secondrow");
    //board[1] = board[1].map(function(x){return 1});
    if(board[1][0] != 1){$("#d").addClass("fa-times"); board[1][0] = 0}
    if(board[1][1] != 1){$("#e").addClass("fa-times"); board[1][1] = 0}
    if(board[1][2] != 1){$("#f").addClass("fa-times"); board[1][2] = 0}
} else if (((board[2][0] == 1) && (board[2][1] == 1) && (board[2][2] == 2)) || ((board[2][0] == 1) && (board[2][1] == 2) && (board[2][2] == 1)) || ((board[2][0] == 2) && (board[2][1] == 1) && (board[2][2] == 1))){
    console.log("thirdrow");
    //board[1] = board[1].map(function(x){return 1});
    if(board[2][0] != 1){$("#g").addClass("fa-times"); board[2][0] = 0}
    if(board[2][1] != 1){$("#h").addClass("fa-times"); board[2][1] = 0}
    if(board[2][2] != 1){$("#i").addClass("fa-times"); board[2][2] = 0}
} else if (((board[0][0] == 1) && (board[1][0] == 1) && (board[2][0] == 2)) || ((board[0][0] == 1) && (board[1][0] == 2) && (board[2][0] == 1)) || ((board[0][0] == 2) && (board[1][0] == 1) && (board[2][0] == 1))){
    console.log("firstcol");
    if(board[0][0] != 1){$("#a").addClass("fa-times"); board[0][0] = 0}
    if(board[1][0] != 1){$("#d").addClass("fa-times"); board[1][0] = 0}
    if(board[2][0] != 1){$("#g").addClass("fa-times"); board[2][0] = 0}
} else if (((board[0][1] == 1) && (board[1][1] == 1) && (board[2][1] == 2)) || ((board[0][1] == 1) && (board[1][1] == 2) && (board[2][1] == 1)) || ((board[0][1] == 2) && (board[1][1] == 1) && (board[2][1] == 1))){
    console.log("secondcol");
    if(board[0][1] != 1){$("#b").addClass("fa-times"); board[0][1] = 0}
    if(board[1][1] != 1){$("#e").addClass("fa-times"); board[1][1] = 0}
    if(board[2][1] != 1){$("#h").addClass("fa-times"); board[2][1] = 0}
} else if (((board[0][2] == 1) && (board[1][2] == 1) && (board[2][2] == 2)) || ((board[0][2] == 1) && (board[1][2] == 2) && (board[2][2] == 1)) || ((board[0][2] == 2) && (board[1][2] == 1) && (board[2][2] == 1))){
    console.log("thirdcol");
    if(board[0][2] != 1){$("#c").addClass("fa-times"); board[0][2] = 0}
    if(board[1][2] != 1){$("#f").addClass("fa-times"); board[1][2] = 0}
    if(board[2][2] != 1){$("#i").addClass("fa-times"); board[2][2] = 0}
} else if (((board[0][0] == 1) && (board[1][1] == 1) && (board[2][2] == 2)) || ((board[0][0] == 1) && (board[1][1] == 2) && (board[2][2] == 1)) || ((board[0][0] == 2) && (board[1][1] == 1) && (board[2][2] == 1))){
    console.log("first diagonal");
    if(board[0][0] != 1){$("#a").addClass("fa-times"); board[0][0] = 0}
    if(board[1][1] != 1){$("#e").addClass("fa-times"); board[1][1] = 0}
    if(board[2][2] != 1){$("#i").addClass("fa-times"); board[2][2] = 0}
} else if (((board[0][2] == 1) && (board[1][1] == 1) && (board[2][0] == 2)) || ((board[0][2] == 1) && (board[1][1] == 2) && (board[2][0] == 1)) || ((board[0][2] == 2) && (board[1][1] == 1) && (board[2][0] == 1))){
    console.log("second diagonal");
    if(board[0][2] != 1){$("#c").addClass("fa-times"); board[0][2] = 0}
    if(board[1][1] != 1){$("#e").addClass("fa-times"); board[1][1] = 0}
    if(board[2][0] != 1){$("#g").addClass("fa-times"); board[2][0] = 0}
} else if (board[1][1] == 2){
    $("#e").addClass("fa-times"); 
    board[1][1] = 0;
} else if (board[1][1] == 1){
    $("#a").addClass("fa-times"); 
    board[0][0] = 0;
} else if ((board[0][1] == 1) && (board[1][0] == 1) && (board[0][0] == 2)){
    $("#a").addClass("fa-times"); 
    board[0][0] = 0;
} else if ((board[1][0] == 1) && (board[2][1] == 1) && (board[2][0] == 2)){
    $("#g").addClass("fa-times"); 
    board[2][0] = 0;
} else if ((board[2][1] == 1) && (board[1][2] == 1) && (board[2][2] == 2)){
    $("#i").addClass("fa-times"); 
    board[2][2] = 0;
} else if ((board[0][1] == 1) && (board[1][2] == 1) && (board[0][2] == 2)){
    $("#c").addClass("fa-times"); 
    board[0][2] = 0;
} else if (board[0][1] == 2){
    $("#b").addClass("fa-times"); 
    board[0][1] = 0;
} else if (board[1][0] == 2){
    $("#d").addClass("fa-times"); 
    board[1][0] = 0;
} else if (board[1][2] == 2){
    $("#f").addClass("fa-times"); 
    board[1][2] = 0;
} else if (board[2][1] == 2){
    $("#h").addClass("fa-times"); 
    board[2][1] = 0;
} else if (board[0][0] == 2){
    $("#a").addClass("fa-times"); 
    board[0][0] = 0;
} else if (board[0][2] == 2){
    $("#c").addClass("fa-times"); 
    board[0][2] = 0;
} else if (board[2][0] == 2){
    $("#g").addClass("fa-times"); 
    board[2][0] = 0;
} else if (board[2][2] == 2){
    $("#i").addClass("fa-times"); 
    board[2][2] = 0;
} else if ((board[0].indexOf(2) == -1) && (board[1].indexOf(2) == -1) && (board[2].indexOf(2) == -1)){
    $("#outcome").text("Draw");
}
});

$("#reset").on("click", function(){
    board = [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
    ];
    $("#a").removeClass("fa-circle-o fa-times");
    $("#b").removeClass("fa-circle-o fa-times");
    $("#c").removeClass("fa-circle-o fa-times");
    $("#d").removeClass("fa-circle-o fa-times");
    $("#e").removeClass("fa-circle-o fa-times");
    $("#f").removeClass("fa-circle-o fa-times");
    $("#g").removeClass("fa-circle-o fa-times");
    $("#h").removeClass("fa-circle-o fa-times");
    $("#i").removeClass("fa-circle-o fa-times");
});