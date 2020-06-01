var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postsSchema = new Schema ({
    text: String,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Posts", postsSchema);
