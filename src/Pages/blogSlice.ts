import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string[];
  date: string;
}

interface Comment {
  title: string;
  author: string;
  content: string;
  image: string | null;
  timestamp: string;
}

interface Reactions {
  heart: number;
  sad: number;
  happy: number;
}

interface BlogState {
  blogPosts: BlogPost[];
  comments: Record<number, Comment[]>;
  likes: Record<number, number>;
  reactions: Record<number, Reactions>;
}

const initialState: BlogState = {
  blogPosts: [
    {
      id: 1,
      title: 'Sample Blog Post',
      content: 'This is a sample blog post.',
      author: 'Admin',
      image: [],
      date: new Date().toLocaleDateString(),
    },
  ],
  comments: {},
  likes: {},
  reactions: {},
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      if (!state.likes[postId]) {
        state.likes[postId] = 0;
      }
      state.likes[postId]++;
    },
    addComment: (state, action: PayloadAction<{ postId: number; comment: Comment }>) => {
      const { postId, comment } = action.payload;
      if (!state.comments[postId]) {
        state.comments[postId] = [];
      }
      state.comments[postId].push(comment);
    },
    addReaction: (
      state,
      action: PayloadAction<{ postId: number; reaction: 'heart' | 'sad' | 'happy' }>
    ) => {
      const { postId, reaction } = action.payload;
      if (!state.reactions[postId]) {
        state.reactions[postId] = { heart: 0, sad: 0, happy: 0 };
      }
      state.reactions[postId][reaction]++;
    },
  },
});

export const { likePost, addComment, addReaction } = blogSlice.actions;
export default blogSlice.reducer;
