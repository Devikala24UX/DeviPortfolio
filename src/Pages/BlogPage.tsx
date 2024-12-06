import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReaction, addComment } from './blogSlice'; // Redux actions
import { RootState } from './store'; // Redux store
import './Blog.css'; // CSS

const BlogPage: React.FC = () => {
  const dispatch = useDispatch();
  const blogPosts = useSelector((state: RootState) => state.blog.blogPosts);
  const reactions = useSelector((state: RootState) => state.blog.reactions);
  const comments = useSelector((state: RootState) => state.blog.comments);

  const [newComment, setNewComment] = useState({
    postId: 0,
    title: '',
    author: '',
    content: '',
  });

  const handleReaction = (postId: number, reaction: 'heart' | 'sad' | 'happy') => {
    dispatch(addReaction({ postId, reaction }));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveComment = (e: React.FormEvent<HTMLFormElement>, postId: number) => {
    e.preventDefault();
    if (newComment.content.trim()) {
      const timestamp = new Date().toLocaleString(); // Get current date and time
      dispatch(
        addComment({
          postId,
          comment: { ...newComment, postId, timestamp },
        })
      );
      setNewComment({ postId: 0, title: '', author: '', content: '' });
    }
  };

  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      {blogPosts.map((post) => (
        <article key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p>
            <em>{post.date}</em>
          </p>
          <p>{post.content}</p>

          <div className="reactions">
            <button className="like" onClick={() => handleReaction(post.id, 'heart')}>
              ❤️
            </button>
            <span>{reactions[post.id]?.heart || 0} Hearts</span>

            <button className="sad" onClick={() => handleReaction(post.id, 'sad')}>
              😢
            </button>
            <span>{reactions[post.id]?.sad || 0} Sads</span>

            <button className="happy" onClick={() => handleReaction(post.id, 'happy')}>
              😊
            </button>
            <span>{reactions[post.id]?.happy || 0} Happys</span>
          </div>

          <h3>Comments</h3>
          <form onSubmit={(e) => handleSaveComment(e, post.id)}>
            <input
              type="text"
              name="title"
              placeholder="Comment Title"
              value={newComment.title}
              onChange={handleCommentChange}
            />
            <input
              type="text"
              name="author"
              placeholder="Your Name"
              value={newComment.author}
              onChange={handleCommentChange}
            />
            <textarea
              name="content"
              placeholder="Write your comment..."
              value={newComment.content}
              onChange={handleCommentChange}
            />
            <button type="submit">Add Comment</button>
          </form>

          {comments[post.id]?.map((comment, idx) => (
            <div key={idx} className="comment">
              <h4>{comment.title}</h4>
              <p>
                <strong>{comment.author}</strong> - <em>{comment.timestamp}</em>
              </p>
              <p>{comment.content}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};

export default BlogPage;
