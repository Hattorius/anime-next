import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Index from './routes';

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
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
                    <Route path="/" element={<Index/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};