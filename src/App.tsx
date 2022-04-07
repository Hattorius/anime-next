import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        background: #121212;
        overflow-x: hidden;
    }
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
`;

export const App = () => {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
        </>
    )
};