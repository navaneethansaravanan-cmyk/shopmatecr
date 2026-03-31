import { useEffect, useState } from "react";

export const useFetch = ({apiPath, queryParam = ""}) => {
    const [data,setData] = useState([]);

    const url = queryParam ? `http://localhost:8000/${apiPath}/${queryParam}` : `http://localhost:8000/${apiPath}`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }

        fetchData();
    }, [url])

  return { data }
}
