import styled from 'styled-components';

export const Block = styled.header`
    width: 100%;
    background: ${props => props.theme.headerBg};
    height: 80px;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    color: ${props => props.theme.headerTitleColor};
`;