var express     = require("express"),
    Link        = require("./models/links"),
    mongoose    = require("mongoose"),
    app         = express();

// mongoose.connect("mongodb://localhost/short_url_app");    
mongoose.connect("mongodb://port_site:Fredrick0@ds133231.mlab.com:33231/portfolio_site");    

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

app.get("/requestheaderapp", function(req, res){
   res.render("requestheaderapp"); 
});

app.get("/requestheader", function(req, res){
    res.render("requestheader");
});

app.get("/urlshortenerapp", function(req, res){
    res.render("urlshortenerapp");
});

app.get("/urlshortener", function(req, res){
    res.render("urlshortener");
});

app.get("/urlshortener/new/*", function(req, res){
    var url = req.params[0];
    console.log(req.rawHeaders[1]);
    var rand = Math.floor(Math.random()*1000);
        
    var newLink = {original_url: url, short_url: 'https://' + req.rawHeaders[1] + '/' + 'urlshortener' + "/" + JSON.stringify(rand), tag: JSON.stringify(rand)};
        
    Link.create(newLink, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.render("output", {newLink: newLink});
        }
    });
});

app.get("/urlshortener/:tag", function(req, res){
    Link.find({tag: req.params.tag}).exec(function(err, foundLink){
        if(err){
            console.log(err);
        } else {
            var link = foundLink[0].original_url;
            console.log(link);
            res.redirect(link);
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("the port_site server has started");
});