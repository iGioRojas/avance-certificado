import React, { useEffect  } from 'react';

const AdsComponent = (props) => {
    const { dataAdSlot } = props;  
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
        catch (e) {
        }
    },[]);
    return (
        <>
            <ins className="adsbygoogle"
                style={{display:'inline',width:'300px',height:'250px'}}
                data-ad-client="ca-pub-4201128940872811"
                data-ad-slot={dataAdSlot}
                >
            </ins>
        </>
    );
};

export default AdsComponent;