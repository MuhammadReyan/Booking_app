import React, { useState, useEffect } from 'react';
import './loader.css'; // Import the CSS file

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Set a delay of 2 seconds to simulate website loading time

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-container ${loading ? '' : 'hidden'}`}>
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
