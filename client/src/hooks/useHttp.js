import {useCallback, useState} from "react";

const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        if (body) {
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }

        setLoading(true);

        try {
            const response = fetch(url, {method, body, headers});
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong...');
            }

            setLoading(false);

            return data;
        } catch (e) {
            setError(e.message);
        }
    }, []);

    return {loading, error, request}
}
