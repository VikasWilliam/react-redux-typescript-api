import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import {createLogger} from "redux-logger";

// Create the logger middleware with help of create logger we can use dev tools to check the previous state and current state and next state
const logger = createLogger({
  // Define logger options
  collapsed: true,  // Collapse logs for better readability change to false if expanded view not needed
  diff: true,       // Show the diff between states(previous,current and next)
});

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),  // Add logger middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
