import React from 'react';

// import Header from '../../Shared/Header/Header';
import Banner from './Banner';

import Section1 from './Section1';
import Services from './Services';
// import Services from './Services';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Section1></Section1>
            <Services></Services>
           
        </div>
    );
};

export default Home;