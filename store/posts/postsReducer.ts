import {
  GET_ALL_POSTS,
  GET_ONE_POST,
  PostsState,
  PostsActions,
} from './postsTypes';

const initialState: PostsState = {
  posts: [],
  post: {}
};

const postsReducer = (
  state: PostsState = initialState,
  action: PostsActions,
): PostsState => {
  switch (action.type) {
    case GET_ALL_POSTS: 
      return {
        ...state,
        posts: action.payload
      };
    case GET_ONE_POST: 
      return {
        ...state,
        post: action.payload
      };
    default:
      return { ...state };
  }
};

export default postsReducer;