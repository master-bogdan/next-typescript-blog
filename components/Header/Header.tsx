import React, { FC } from 'react';
import Container from '../Ui/container';
import { Block, Title } from './styles';

const Header: FC = () => {
    return (
        <Block>
            <Container
                display='flex'
                align='center'
            >
                <Title>Typescript blog</Title>
            </Container>   
        </Block>
    )
}

export default Header;
