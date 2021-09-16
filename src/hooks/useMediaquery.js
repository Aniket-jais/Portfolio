import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        (media.matches !== match) && setMatch(media.matches)

        const handleResize = () => {
            setMatch(media.matches)
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [query, match])

    return match;
}

export { useMediaQuery };