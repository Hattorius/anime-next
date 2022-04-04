import styled, { css } from "styled-components";
import { useState } from 'react';

interface WrapperProps {
    active: boolean;
}

const Wrapper = styled.div<WrapperProps>`
    background: #141519;
    padding: 10px;
    cursor: pointer;
    transform: rotateX(180deg);
    position: relative;

    ${props => props.active && css`
        padding: 8px;
        border: #f47521 solid 2px;
    `};
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: 150ms;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default function Anime(props: {
    active: boolean,
    onClick: (e:any) => void,
    id: number,
    anime: {
        animeId: number,
        title: string,
        image: string
    }
}) {
    const [overlayActive, setOverlayActive] = useState(false);

    return (
        <Wrapper active={props.active} onMouseEnter={() => setOverlayActive(true)} onMouseLeave={() => setOverlayActive(false)} onClick={() => props.onClick(props.id)}>
            <img style={{maxHeight: '310px'}} src={props.anime.image}/>
            <Overlay style={overlayActive ? {opacity: '1'} : {}}>
                {props.anime.title}
            </Overlay>
        </Wrapper>
    );
}
