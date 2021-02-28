export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ONE_POST = 'GET_ONE_POST';
export const CREATE_POST = 'CREATE_POST';

export interface PostType {
  id: number
  title: string
  body: string
}
export interface PostsState {
  posts: PostType[]
  post: PostType
}

interface GetAllPostsAction {
  type: typeof GET_ALL_POSTS,
  payload: PostType[]
}

interface GetPostAction {
  type: typeof GET_ONE_POST,
  payload: PostType
}

interface CreatePostAction {
  type: typeof CREATE_POST,
  payload: PostType
}

export type PostsActions = GetAllPostsAction | GetPostAction | CreatePostAction;
