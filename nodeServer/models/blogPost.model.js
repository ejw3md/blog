const sql = require('./db.js');
const fs = require('fs');

const BlogPost = function(blogPost) {
    this.ID=  blogPost.ID;
    this.Title = blogPost.Title;                /* title of post                */
    this.DatePosted = blogPost.DatePosted;      /* date of post                 */
    this.ContentPath = blogPost.ContentPath;    /* content filepath on server   */
    this.PhotoPath = blogPost.PhotoPath;        /* photo filepath on server     */
    this.Category = blogPost.Category;          /* content shown on main page   */
    this.Username = blogPost.Username;          /* username of poster           */
};

BlogPost.getAll = result => {
    sql.query(` SELECT ID, Title, PhotoPath, date_format(DatePosted, '%m/%d/%Y') as DatePosted, Category, Username
                FROM BlogPost;`, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("blogPost: ", res);
        result(null, res);
    });
};

BlogPost.getByID = (blogPostID, result) => {
    sql.query(` SELECT ID, Title, PhotoPath, date_format(DatePosted, '%m/%d/%Y') as DatePosted, Category, Username
                FROM BlogPost
                WHERE ID = ?`, blogPostID, (err, res) => {
                    
                    if(err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }
                    
                    if(res.length) {
                        console.log("Found blog Post: ", res[0]);
                        result(null, res[0]);
                        return;
                    }

                    result({ kind: "not_found" }, null);
                });
};

BlogPost.getBlogPostContent = (blogPostID, result) => {
    fs.readFile('./blogPostContent/blogPost' + blogPostID, 'utf-8', (err, data) => {
        if(err) {
            console.log(err);
            result({ kind: "not_found" }, null);
            return;
        }

        result(null, JSON.stringify(data))
    });
};

module.exports = BlogPost;