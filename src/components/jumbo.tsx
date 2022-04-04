import styled from "styled-components";
import UsernameSearch from "./usernameSearch";

const Background = styled.div`
    padding: 1rem;
    position: relative;
`;

const Wrapper = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 600px) {
        max-width: 480px;
    }

    @media (max-width: 1020px) {
        max-width: 600px;
    }

    @media (max-width: 1420px) {
        max-width: 1020px;
    }

    max-width: 1420px;
    padding-top: 3rem;
    padding-bottom: 3rem;

    display: flex;
    min-height: 600px;
    flex-direction: column;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 2.5em;

    @media (max-width: 600px) {
        text-align: center;
        margin-bottom: 0;
    }
`;
const SubTitle = styled.h2`
    color: #fff;
    font-size: 22px;
    margin-top: 0;
    font-weight: 500;
    margin-bottom: 9px;

    @media (max-width: 600px) {
        display: none;
    }
`;
const Text = styled.div`
    color: #fff;
    font-size: 18px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export default function Jumbo(props: {search: (username: string) => void}) {

    return (
        <Background>
            <Wrapper>
                <div style={{maxWidth: '700px'}}>
                    <Title>What anime to watch next?</Title>
                    <Text>
                        <SubTitle>How many times did you have to ask yourself this exact question?</SubTitle>
                        AnimeNext does exactly this. Fill in your MyAnimeList username, and based on your watch history we'll select the next anime you should watch.
                    </Text>

                    <UsernameSearch search={props.search}/>
                </div>
            </Wrapper>
        </Background>
    );
}
