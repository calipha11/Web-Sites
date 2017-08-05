var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/projects", function(req, res){
    var projects = [
        {name: "Todo App", image: "https://static.comicvine.com/uploads/original/8/82727/1525513-the_moutain____by_vincentfavre.jpg", link: "/todo"},
        {name: "p3", image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/34/36/55/svanati-moutain.jpg"}
    ];
   res.render("projects", {projects: projects}); 
});

app.get("/project_list", function(req, res){
   res.render("project_list"); 
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/todo", function(req, res){
   res.render("todo"); 
});

app.get("/todoabout", function(req, res){
   res.render("todoabout"); 
});

app.get("/campsite", function(req, res){
   res.render("campsite"); 
});

app.get("/weather", function(req, res){
   res.render("weather"); 
});

app.get("/twitchtv", function(req, res){
    res.render("twitchtv");
});

app.get("/calc_app", function(req, res){
    res.render("calcapp"); 
});

app.get("/calculator", function(req, res){
    res.render("calculator");
});

app.get("/pomodoro_app", function(req, res){
    res.render("pomodoro_app");
});

app.get("/pomodoro", function(req, res){
    res.render("pomodoro");
});

app.get("/tictactoeapp", function(req, res){
    res.render("tictactoeapp");
});

app.get("/tictactoe", function(req, res){
   res.render("tictactoe"); 
});

app.get("/simongameapp", function(req, res){
    res.render("simongameapp");
});

app.get("/simongame", function(req, res){
    res.render("simongame");
});

app.get("/timestampapp", function(req, res){
    res.render("timestampapp");
});

app.get("/timestamp", function(req, res){
    res.render("timestamp");
});

app.get("/timestamp/:input", function(req, res){
    var d = new Date(+(req.params.input));
    var e = {"unix": +d, "natural": d.toDateString()};
    if(e.natural == 'Invalid Date'){
        e.natural = null;
    }
    res.render("timestampOutput", {date: e});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("the port_site server has started");
});