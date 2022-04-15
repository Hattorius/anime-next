import styled from 'styled-components';

const Wrapper = styled.div`
    width: max-content;
    margin-left: auto;
    margin-right: auto;
`;

const Title = styled.h3`
    width: max-content;
    font-weight: 400;
`;

export default function SubTitle(props: {
    children: string
}) {
    return (
        <Wrapper>
            <Title>{props.children}</Title>
        </Wrapper>
    );
}
