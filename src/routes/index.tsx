import Header from "../components/header";
import Jumbo from "../components/jumbo";
import Results from '../components/results';
import { useState } from 'react';
import axios from "axios";


export default function Index() {
    const [loadingState, setLoadingState] = useState(0);
    const [results, setResults] = useState([]);

    const search = (username: string) => {
        if (loadingState === 1) return alert("Please wait, currently loading your results..");
        setLoadingState(1);
        axios.get('https://api.animenext.io/' + username)
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
        </>
    );
}
