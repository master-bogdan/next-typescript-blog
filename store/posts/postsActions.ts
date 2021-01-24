import {
  GET_ALL_POSTS,
  GET_ONE_POST,
  PostsActions
} from './postsTypes';
import { AppThunk } from '../../store';
import axios from 'axios';

export const getAllPosts = (payload: []): PostsActions => ({
  type: GET_ALL_POSTS,
  payload
})

export const getPost = (payload: unknown): PostsActions => ({
  type: GET_ONE_POST,
  payload
});

export const getPosts = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    dispatch(getAllPosts(response.data))
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
