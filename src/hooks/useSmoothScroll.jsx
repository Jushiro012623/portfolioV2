import React from 'react'
const useSmoothScroll = () => {
    const smoothScroll = React.useCallback(el => {
        setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    }, []);
    
    return { smoothScroll };
};
export default useSmoothScroll
