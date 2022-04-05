import { useEffect, useState } from "react";
import styled, { css } from "styled-components"

const Holder = styled.div`
    width: 100%;
    margin-top: 2rem;

    @media (max-width: 600px) {
        margin-top: 0;
    }
`;

interface UsernameInputProps {
    borderRight: boolean;
}

const UsernameInput = styled.input<UsernameInputProps>`
    width: 50%;
    min-width: 340px;
    border: #23252b solid 2px;
    border-radius: 5px;
    font-size: 22px;
    padding: .4rem;

    ${props => props.borderRight && css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
    `};

    @media (max-width: 740px) {
        width: 100%;
        border-radius: 5px;
        border: #23252b solid 2px;
        margin-top: .3rem;
    }
`;

const UsernameText = styled.h4`
    max-width: max-content;
    text-align: right;
    color: #fff;
    margin-bottom: 5px;
`;

const InputHolder = styled.div`
    display: flex;

    @media (max-width: 740px) {
        flex-direction: column;
    }
`;

const UsernameButton = styled.button`
    border: #23252b solid 2px;
    border-left: 0;
    font-size: 20px;
    background: #f06a11;
    color: #fff;
    transition: 150ms;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;

    &:hover {
        background: #fa7116;
    }
    &:active {
        background: #ff7d26;
    }

    @media (max-width: 740px) {
        margin-top: 1.2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100%;
        border-radius: 5px;
        border: #23252b solid 2px;
    }
`;

export default function UsernameSearch(props: {search: (username: string) => void}) {
    const [showButton, setShowButton] = useState(false);
    const [username, setUsername] = useState('');

    const keyPress = (e: React.FormEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const lookForEnter = (e: React.KeyboardEventHandler<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.search(username);
        }
    }

    useEffect(() => {
        window.ttq.track('ClickButton');
        if (username.length >= 2 && username.length <= 16 && username.match(/^(\w|\d|_|-)+$/)) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [username]);

    return (
        <Holder>
            <UsernameText>Fill in your MyAnimeList username</UsernameText>
            <InputHolder>
                <UsernameInput borderRight={showButton} value={username} onChange={keyPress} onKeyDown={lookForEnter}/>
                <UsernameButton onClick={() => props.search(username)} style={showButton ? {} : {display: 'none'}}>
                    Search
                </UsernameButton>
            </InputHolder>
        </Holder>
    );
}
