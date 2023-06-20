import React from 'react';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'This is the content of Blog Post 1' },
    { id: 2, title: 'Blog Post 2', content: 'This is the content of Blog Post 2' },
    { id: 3, title: 'Blog Post 3', content: 'This is the content of Blog Post 3' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
