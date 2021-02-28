import {
  CREATE_POST,
  GET_ALL_POSTS,
  GET_ONE_POST,
  PostsActions,
  PostType,
} from './postsTypes';
import { AppThunk } from 'store';
import axios from 'axios';

export const getAllPosts = (payload: PostType[]): PostsActions => ({
  type: GET_ALL_POSTS,
  payload
})

export const getPost = (payload: PostType): PostsActions => ({
  type: GET_ONE_POST,
  payload
});

export const createPostAction = (payload: PostType): PostsActions => ({
  type: CREATE_POST,
  payload
})

export const createPost = (formData: {title: string, body: string }): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.post('https://simple-blog-api.crew.red/posts', {
      title: formData.title,
      body: formData.body,
    })
    console.log(data);
    dispatch(createPostAction(data));
  } catch (error) {
    console.log(error);
  }
}

export const getPosts = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.get('https://simple-blog-api.crew.red/posts');
    dispatch(getAllPosts(data));
  } catch (error) {
    console.log(error);
  }
};
