# Blog

This is my personal blog project built with:

- React + Vite frontend
- Node.js + Express backend
- MySQL database
- Features: posting blogs, user comments, contact page

Learning goal of this project:
-learning how to route
-Creating API in backend
-Calling API in front end
-

Updates:
-Added Admin route to add remove.
-Admin feature to edit post.


personal-blog/
backend/
    server.js          # Express server with API routes
    db.js              # MySQL connection
    package.json       # Node dependencies and scripts
    .env               # Database credentials and PORT

frontend/
    package.json       # Frontend dependencies and scripts
    vite.config.js     # Vite configuration
    src/
        main.jsx       # React entry point
        App.jsx        # Routing setup
        index.css      # CSS
        pages/
            Home.jsx      # CV / homepage
            Blog.jsx      # Blog + comments page
            Contact.jsx   # Contact page
            Admin.jsx     # Admin page to post blogs
        components/
            Header.jsx       # Navigation bar
            Footer.jsx       # Footer
            CommentForm.jsx  # Form for submitting comments

README.md             
