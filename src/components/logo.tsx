import styled from "styled-components"

const Holder = styled.div`
    width: 100%;
    transition: all 500ms ease-out;
`;

const Title = styled.div`
    font-family: 'Automatic';
    color: #fff;
    font-size: 5rem;
    margin-left: auto;
    margin-right: auto;
    width: max-content;
    margin-top: 35vh;
    transition: all 500ms ease-out;
`;

export default function Logo(props: {
    style?: React.CSSProperties
}) {
    const style = {...props.style}

    return (
        <Holder style={style}>
            <Title>AnimeNext</Title>
        </Holder>
    );
}
