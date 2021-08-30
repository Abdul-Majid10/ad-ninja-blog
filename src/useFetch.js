import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPandding, setIsPandding] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("We could find data at this resourse");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPandding(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPandding(false);
                        setError(err.message);
                        setData(null);
                    }
                });
        }, 1000);
        return () => abortCont.abort();
    }, [url]);
    return { data, isPandding, error };
}

export default useFetch;