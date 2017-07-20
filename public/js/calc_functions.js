$("#zero").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "0");
});

$("#one").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "1");
});

$("#two").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "2");
});

$("#three").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "3");
});

$("#four").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "4");
});

$("#five").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "5");
});

$("#six").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "6");
});

$("#seven").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "7");
});

$("#eight").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "8");
});

$("#nine").on("click", function() {
   $('[name="display"]').val($('[name="display"]').val() + "9");
});

$("#equal").on("click", function() {
   /*$('[name="display"]').val($('[name="display"]').val() + "seven");*/
    $('[name="display"]').val(eval($('[name="display"]').val()));   
});

$("#plus").on("click", function() {
    $('[name="display"]').val($('[name="display"]').val() + "+")
});

$("#minus").on("click", function() {
    $('[name="display"]').val($('[name="display"]').val() + "-")
});

$("#times").on("click", function() {
    $('[name="display"]').val($('[name="display"]').val() + "*")
});

$("#divide").on("click", function() {
    $('[name="display"]').val($('[name="display"]').val() + "/")
});

$("#point").on("click", function() {
    $('[name="display"]').val($('[name="display"]').val() + ".")
});

$("#clear").on("click", function() {
   $('[name="display"]').val("");
});