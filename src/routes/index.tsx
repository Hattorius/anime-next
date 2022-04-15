import { useEffect, useState } from "react";
import Logo from "../components/logo";
import styled from 'styled-components';
import ListOptions from "../components/listoptions";
import SubTitle from "../components/subtitle";

const Flex = styled.div`
    display: flex;
`;

const Item = styled.div`
    width: 50%;
`;

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: max-content;
`;
const InfoButton = styled.button`
    background: transparent;
    color: #fff;
    border: 0;
    border-bottom: solid #fff 2px;
    font-size: 18px;
    cursor: pointer;
    padding-bottom: 5px;
    margin-top: 15px;
`;

const ExtraInfo = styled.div`
    max-width: 560px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    font-weight: 300;
    text-align: justify;
`;

export default function Index() {
    const [pageState, setPageState] = useState(0);
    const [logoWidth, setLogoWidth] = useState(100);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        setTimeout(() => setLogoWidth(50), 300);
        setTimeout(() => {
            setPageState(1);
        }, 800);
    }, []);

    return (
        <>
            {pageState === 0 && <Logo style={{width: logoWidth.toString() + '%'}}/>}
            {pageState === 1 && (
                <Flex>
                    <Item style={{overflowY: 'auto'}}>
                        <Logo/>
                        <SubTitle>Pick your Anime tracking website</SubTitle>
                        <Wrapper>
                            <InfoButton onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Less' : 'More'} information</InfoButton>
                        </Wrapper>
                        <ExtraInfo style={showInfo ? {} : {height: 0}}>
                            AnimeNext helps you find the next anime to watch based on your watching history.
                            Create an account on one of the supported anime tracking list websites and fill in your username.
                            AnimeNext will automatically find all the anime's you watched and find new anime's to watch based on what other people have watched!
                        </ExtraInfo>
                    </Item>
                    <Item>
                        <ListOptions/>
                    </Item>
                </Flex>
            )}
        </>
    );
}
