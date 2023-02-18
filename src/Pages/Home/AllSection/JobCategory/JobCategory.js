import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JobsCard from '../JobsCard/JobsCard';

const JobCategory = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('https://job-board-risan-server.vercel.app/job-categorioes')
            .then(res => res.json())
            .then(data => {
                setJobs(data.data)
            })
    }, [])

    console.log(jobs);
    return (
        <div id='jobseeker'>
      <h2  class="text-2xl font-bold text-center mt-10 text-gray-800 sm:text-4xl sm:leading-tight">Our Jobs Category and Companies</h2>
                
                <div class="grid md:w-[1100px] lg:w-[1400px] max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                {
                    jobs.map(jobs => <JobsCard
                        key={jobs._id}
                        job={jobs}
                    ></JobsCard>)
                }
            </div>
        </div>
    );
};

export default JobCategory;