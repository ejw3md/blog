module.exports = app => {
    const blogPosts = require("../controllers/blogPost.controller.js");

    app.get("/blogPosts", blogPosts.findAll);

    app.get("/blogPosts/:blogPostID", blogPosts.findOne);

    app.get("/blogPostContent/:blogPostID", blogPosts.findBlogPostContent);
}