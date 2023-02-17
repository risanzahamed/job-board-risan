import React from 'react';
import Companies from './AllSection/Companies';
import Hero from './AllSection/Hero';
import JobCategory from './AllSection/JobCategory/JobCategory';
import JobsSection from './AllSection/JobsSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <Companies />
            <JobCategory/>
            <JobsSection/>
        </div>


    );
};

export default Home;