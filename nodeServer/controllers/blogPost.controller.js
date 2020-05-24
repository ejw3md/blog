const BlogPost = require("../models/blogPost.model");

exports.findAll = (req, res) => {
    BlogPost.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    BlogPost.getByID(req.params.blogPostID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Blog Post with id ${req.params.blogPostID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Blog Post with id " + req.params.blogPostID
          });
        }
      } else res.send(data);
    });
  };

  exports.findBlogPostContent = (req, res) => {
    BlogPost.getBlogPostContent(req.params.blogPostID, (err, data) => {
      if(err) {
        res.status(404).send({
          message: `Not found Blog Post content with id ${req.params.blogPostID}.`
        });
      } else {
        console.log("Found file: blogPost" +req.params.blogPostID);
        res.send(data);
      }
    });
  };