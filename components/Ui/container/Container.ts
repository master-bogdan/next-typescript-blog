import styled from 'styled-components';

const Container = styled.div`
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: ${({ display }: any) => display};
    margin: 0 auto;
    justify-content: ${({ justify }: { justify: string }) => justify};
    align-items: ${({ align }: { align: string }) => align};
    flex-wrap: wrap;
`;

export default Container;