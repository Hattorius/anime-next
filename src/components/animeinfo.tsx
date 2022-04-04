import styled from "styled-components";
import YoutubeEmbed from "./youtube";

type someTypeThatGetsUsedALot = {
    mal_id: number,
    type: string,
    name: string,
    url: string
};

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
    flex-direction: column;
    background: #141519;
    padding: 1rem;
    margin-top: 1rem;
`;

const Title = styled.div`
    color: #fff;
    margin: 0;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: baseline;
    width: 100%;
    height: max-content;
    gap: 7px;
`;

const LittleBlox = styled.div`
    height: 4px;
    width: 20px;
    background: #f47521;
    margin-top: 12px;
    margin-bottom: 12px;
`;

const Description = styled.div`
    max-width: 690px;
    flex-grow: 1;
    height: max-content;
`;

const RatingDivider = styled.div`
    height: 2px;
    width: 15px;
    background: #f47521;
    display: inline-block;
`;

const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const ViewOnAnimeList = styled.a`
    width: max-content;
    background: #f06a11;
    border: 0;
    color: #fff;
    padding: .4rem 1rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: 150ms;
    text-decoration: none;

    &:hover {
        background: #fa7116;
    }
    &:active {
        background: #ff7d26;
    }
`;

export default function AnimeInfo(props: {
    info: {
        mal_id: number,
        url: string,
        images: {
            jpg: {
                image_url: string,
                small_image_url: string,
                large_image_url: string
            },
            webp: {
                image_url: string,
                small_image_url: string,
                large_image_url: string
            }
        },
        trailer: {
            youtube_id: string,
            url: string,
            embed_url: string
        },
        title: string,
        title_english: string,
        title_japanese: string,
        title_synonyms: string[],
        type: string,
        source: string,
        episodes: number,
        status: string,
        airing: boolean,
        aired: {
            from: string,
            to: string,
            prop: {
                from: {
                    day: number,
                    month: number,
                    year: number
                },
                to: {
                    day: number,
                    month: number,
                    year: number
                },
                string: string
            }
        },
        duration: string,
        rating: string,
        score: number,
        scored_by: number,
        rank: number,
        popularity: number,
        members: number,
        favorites: number,
        synopsis: string,
        background: string,
        season: string,
        year: number,
        broadcast: {
            day: string,
            time: string,
            timezone: string,
            string: string
        },
        producers: someTypeThatGetsUsedALot[],
        licensors: someTypeThatGetsUsedALot[],
        studios: someTypeThatGetsUsedALot[],
        genres: someTypeThatGetsUsedALot[],
        explicit_genres: someTypeThatGetsUsedALot[],
        themes: someTypeThatGetsUsedALot[],
        demographics: someTypeThatGetsUsedALot[]
    }
}) {
    return (
        <Wrapper>
            <Title>{props.info.title_english != null ? props.info.title_english : props.info.title} {props.info.score !== null && <><RatingDivider/> <span style={{fontSize: '18px'}}>{props.info.score}/10 rating</span></>}</Title>

            <LittleBlox/>
            
            <Holder>
                <Description>
                    {props.info.synopsis}<br /><br />
                    <span style={{fontSize: '17px', fontWeight: '500'}}>{props.info.episodes} episode{props.info.episodes == 1 ? '' : 's'} {props.info.episodes != 0 && <>of ~{props.info.duration}</>}</span>
                </Description>
                <div style={{flexGrow: 1, height: 'max-content'}}>
                    {typeof props.info.trailer !== 'undefined' && props.info.trailer.youtube_id !== null && <YoutubeEmbed embedId={props.info.trailer.youtube_id}/>}
                </div>
            </Holder>

            <ViewOnAnimeList href={props.info.url} target="_blank">View on MyAnimeList</ViewOnAnimeList>
        </Wrapper>
    );
}
