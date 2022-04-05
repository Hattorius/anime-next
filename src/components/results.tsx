import styled from "styled-components";
import { useState, useEffect, useRef } from 'react';
import loader from 'url: ~/./../../assets/loader.svg';
import Anime from "./anime";
import axios from "axios";
import AnimeInfo from "./animeinfo";

const Background = styled.div`
    background: #000;
    color: #fff;
    padding: 1rem;
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
    min-height: 700px;
    flex-direction: column;
`;

const LoaderHolder = styled.div`
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 18px;
`;

const Title = styled.h2`
    font-size: 1.8rem;
`;

const ResultHolder = styled.div``;

const Resultinner = styled.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    transform: rotateX(180deg);
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background: #f06a11;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #fa7116;
    }
    &::-webkit-scrollbar-thumb:active {
        background: #ff7d26;
    }
`;

export default function ResultsHolder(props: {
    loadingState: number,
    results: {
        animeId: number,
        title: string,
        image: string
    }[]
}) {
    const [active, setActive] = useState(0);
    const [extraInfo, setExtraInfo] = useState({});
    const loadingRef = useRef(null);

    const showExtraInfo = (id: number) => {
        axios.get('https://api.jikan.moe/v4/anime/' + id.toString())
            .then(response => response.data)
            .then(data => {
                setExtraInfo(data.data);
            });
    };

    useEffect(() => {
        if (typeof props.results[active] === 'undefined') {
            setExtraInfo({});
        } else {
            window.ttq.track('ViewContent');
        }
    }, [active]);

    useEffect(() => {
        setActive(0);
        if (typeof props.results[0] !== 'undefined') {
            showExtraInfo(props.results[0].animeId);
        }
    }, [props.results]);

    useEffect(() => {
        if (props.loadingState == 1) {
            loadingRef.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, [props.loadingState]);



    return (
        <Background style={props.loadingState == 0 ? {display: 'none'} : {}}>
            <Wrapper ref={loadingRef}>
                {props.loadingState == 1 && <LoaderHolder>
                    <img src={loader} style={{width: '128px'}}/><br />
                    searching for animes<br />
                    <small>(This can take up to 30 seconds, please have patience)</small>
                </LoaderHolder>}
                {props.loadingState == 2 && 
                    <>
                        <Title>Results</Title>
                        {props.results.length === 0 && <p>No results shown, your username does not exist or we had no permission to see your list.</p>}
                        <ResultHolder>
                            <Resultinner>
                                {props.results.map((anime, id) => <Anime id={id} anime={anime} key={id} active={id == active} onClick={(clicked: number) => {
                                    setActive(clicked);
                                    showExtraInfo(anime.animeId);
                                }}/>)}
                            </Resultinner>
                        </ResultHolder>
                        {typeof extraInfo.url === 'string' && props.results.length > 0 && <AnimeInfo info={extraInfo}/>}
                    </>
                }
            </Wrapper>
        </Background>
    );
}
