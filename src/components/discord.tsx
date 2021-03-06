import styled from "styled-components";
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Holder = styled.div`
    position: fixed;
    right: 5px;
    bottom: 5px;
    border-radius: 5px;
    font-size: 60px;
    text-align: center;
    height: 64px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 150ms;
`;

const Text = styled.div`
    font-size: 22px;
    display: inline-block;
    padding-left: 10px;
    padding-right: 6px;
    color: #fff;

    @media (max-width: 680px) {
        display: none;
    }
`;

export default function Discord() {
    return (
        <a href="https://discord.gg/FEBAjU8nKz" target="_blank" onClick={() => window.ttq.track('Contact')}>
            <Holder>
                <Text>Join the Discord!</Text>
                <Icon icon="cib:discord" color="white"/>
            </Holder>
        </a>
    );
}
