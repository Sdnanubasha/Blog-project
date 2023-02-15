let express = require('express');
let app = express();
let cors = require('cors');
// let mongo = require('mongodb');
// let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const Blogs = require('./Router');


app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/add_blog',Blogs.AddBlog);
app.get('/api/blogs',Blogs.GetBlog);
app.get('/api/blogs/:id',Blogs.OneBlog);

//connection
mongoose.connect('mongodb://localhost:27017/blogs',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", function (err) {
    console.log("ERROR OCCURRED"+err);
  });
db.on("connected", function () {
  console.log("Connected successfully");
});


app.listen(5000, () => {
  console.log(`Server is running at port http://localhost:5000`);
});
