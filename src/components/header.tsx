import styled from "styled-components"

const Bar = styled.div`
    width: 100%;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: .6rem;
    font-size: 28px;
    box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.85);
`;

export default function Header() {
    return (
        <Bar>
            AnimeNext
        </Bar>
    );
}
