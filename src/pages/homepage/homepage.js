import React from 'react';
import './homepage.scss';

import Directory from '../../components/directory/directory';

const HomePage = () => {
    console.log("HomePage render")
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}

export default HomePage;