import Header from "../components/header";
import Jumbo from "../components/jumbo";
import Results from '../components/results';
import { useState } from 'react';
import axios from "axios";
import Discord from "../components/discord";


export default function Index() {
    const [loadingState, setLoadingState] = useState(0);
    const [results, setResults] = useState([]);

    const search = (username: string) => {
        if (loadingState === 1) return alert("Please wait, currently loading your results..");
        setLoadingState(1);
        var api = 'https://api.animenext.io/';
        if (window.location.hostname === 'localhost') api = 'http://localhost:8080/';
        axios.get(api + username)
            .then(response => response.data)
            .then(data => {
                setResults(data);
                setLoadingState(2);
            })
    }

    return (
        <>
            <Header/>
            <Jumbo search={search}/>
            <Results loadingState={loadingState} results={results}/>
            <Discord/>
        </>
    );
}
