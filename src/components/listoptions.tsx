import styled from "styled-components";
import { useEffect, useState } from 'react';
import ListOption from "./listoption";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Holder = styled.div`
    height: 100vh;
    transition: all 500ms ease-out;
    width: 0;
    opacity: 0;
    right: 0;
    position: absolute;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

export default function ListOptions() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setWidth(100);
        }, 50);
    }, []);

    return (
        <Wrapper>
            <Holder style={{width: width.toString() + '%', opacity: width === 0 ? 0 : 1}}>
                <ListOption background="#2e51a2"/>
            </Holder>
        </Wrapper>
    );
}
