export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ONE_POST = 'GET_ONE_POST'

export interface PostsState {
  posts: []
  post: unknown
}

interface GetAllPosts {
  type: typeof GET_ALL_POSTS,
  payload: []
}

interface GetPost {
  type: typeof GET_ONE_POST,
  payload: unknown
}

export type PostsActions = GetAllPosts | GetPost;
