import React from 'react';
import Link from 'next/link';
import {
  Post,
  PostTitle,
  PostDescription,
} from './styles';

interface IPost {
  id: string
  title: string
  descr: string
}

const PostItem: React.FC<IPost> = ({ id, title, descr }) => {
  return (
    <Link href={`/posts/${id}`}>
      <Post>
        <PostTitle>
          {title}
        </PostTitle>
        <PostDescription>
          {descr}
        </PostDescription>
      </Post>
    </Link>
  )
}

export default PostItem;
