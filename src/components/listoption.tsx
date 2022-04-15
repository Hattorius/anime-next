import styled from "styled-components";

const Holder = styled.div`
    position: relative;
    width: 100%;
    height: 33%;
`;

const Wrapper = styled.div`
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    min-height: 230px;
    max-width: 870px;
    max-height: 270px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 300;
    cursor: pointer;
    transition: 150ms;
    box-shadow: inset 0px 0px 4px 0px rgba(0,0,0,0.85);

    &:hover {
        padding: -10px;
        box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.85);
    }
`;

export default function ListOption(props: {
    background: string,

}) {

    return (
        <Holder>
            <Wrapper style={{background: props.background}}>
                MyAnimeList
            </Wrapper>
        </Holder>
    );
}
