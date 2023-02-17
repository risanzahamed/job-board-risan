import React from 'react';
import { Link } from 'react-router-dom';

const JobsCard = ({job}) => {
    console.log(job);
    return (
        <div>
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <Link to={job.category} title="" class="block aspect-w-4 aspect-h-3">
                            <img class="object-cover w-full h-full" src={job.img} alt="" />
                        </Link>

                        <div class="absolute top-4 left-4">
                            <span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {job.name} </span>
                        </div>
                    </div>
                    <p class="mt-5 items-center text-center align-middle justify-center text-2xl font-semibold">
                        <Link to={job.category} title="" class="text-black"> <button className='btn btn-primary'>See Details</button> </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;