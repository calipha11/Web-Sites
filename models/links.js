var mongoose = require("mongoose");

var linkSchema = new mongoose.Schema({
    original_url: String,
    short_url: String,
    tag: String
});

module.exports = mongoose.model("Link", linkSchema);