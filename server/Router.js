const Blog = require('./models/blog');
const blogModel = require('./models/blog');

const AddBlog = async (request, response) => {
    const blog = new blogModel(request.body);
  
    try {
      await blog.save();
      response.send(blog);
    } catch (error) {
      response.status(500).send(error);
    }
}

const GetBlog = async (req,res)=>{
  const blogs = await blogModel.find({});

  try {
    res.send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
}

const OneBlog = async(req,res)=>{
  const blogId = req.params.id;
  try {
    const result = await Blog.findById(blogId);
    res.send(result);
  } catch (error) {
    res.status(404).send({message:"something went wrong"})
  }
}

module.exports = {
  AddBlog,GetBlog,OneBlog
}