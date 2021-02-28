import {
  GET_ALL_POSTS,
  GET_ONE_POST,
  CREATE_POST,
  PostsState,
  PostsActions,
} from './postsTypes';

const initialState: PostsState = {
  posts: [],
  post: null
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
    case CREATE_POST: 
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return { ...state };
  }
};

export default postsReducer;