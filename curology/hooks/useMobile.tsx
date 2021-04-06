import {useEffect, useState} from 'react';

export default function useMobile() {
    const [isMobile, setMobile]  = useState(false);
    
    useEffect(() => {
        handleRezise()
            window.addEventListener('resize', handleRezise)
        return () => {
            window.removeEventListener('resize', handleRezise)
        }
    }, [])

    const handleRezise = () => {
        (window.innerWidth < 780 ) ? setMobile(true) : setMobile(false)
    }

    return [
        isMobile
    ]
}