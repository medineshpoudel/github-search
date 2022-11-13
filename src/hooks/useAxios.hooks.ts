import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://api.github.com';

const useAxios = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState<boolean>(true);

    const fetchData = () => {
        axios[method](url, JSON.parse(headers ?? ''), JSON.parse(body ?? ''))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};

export default useAxios;
