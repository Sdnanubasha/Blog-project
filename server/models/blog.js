const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const BlogSchema = new mongoose.Schema({
  blog: {
    type: String,
    required: true,
  }
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog