import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { wrapper } from '../../store';
import { H1 } from '../../components/Ui/Typography';
import { getPost } from '../../store/posts/postsActions';

type Post = {
  title: string
  body: string
}

interface IPost {
  post: Post
}

const PostPage: React.FC<IPost> = ({ post }) => (
  <>
    <H1>{post.title}</H1>
    <div>{post.body}</div>
  </>
);

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  try {
    const { postId } = query;
    const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${postId}`);
    await store.dispatch(getPost(data))
    return {props: { post: data }}
  } catch (error) {
    console.log(error);
    return {props: { error }};
  }
});

export default PostPage;
