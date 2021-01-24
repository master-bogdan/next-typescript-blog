import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { wrapper } from '../store';
import axios from 'axios';
import Container from '../components/Ui/container';
import PostItem from '../components/PostItem';
import { H1 } from '../components/Ui/Typography';
import { getAllPosts } from '../store/posts/postsActions';

type Home = {
  posts: []
}

const Home: React.FC<Home> = ({ posts }) => (
    <>
      <Head>
      <title>Typescript nextjs blog</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <H1>Latest Posts</H1>
      <Container
        display="flex"
        justify="space-around"
      >
        {posts.map(({ id, title, body }) => (
          <PostItem key={id}
            id={id}
            title={title}
            descr={body}
          />
        ))}
      </Container>
    </>
);

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  try {
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    await store.dispatch(getAllPosts(response.data))
    return {props: { posts: response.data}}
  } catch (error) {
    console.log(error);
    return {props: { error }};
  }
});

export default Home;
