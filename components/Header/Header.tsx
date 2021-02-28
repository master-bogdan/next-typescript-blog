import React from 'react';
import Link from 'next/link';
import Container from '../Ui/container';
import {
  Block,
  Title,
  AddPostButton,
} from './styles';

const Header: React.FC = () => (
  <Block>
    <Container
        display='flex'
        align='center'
        justify='space-between'
    >
        <Title>Typescript blog</Title>
        <Link href="/posts/add">
          <AddPostButton>
            Add Post
          </AddPostButton>
        </Link>
    </Container>   
  </Block>
)

export default Header;
