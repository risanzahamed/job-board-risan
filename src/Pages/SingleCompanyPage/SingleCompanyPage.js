import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCompanyPage = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div className='lg:w-[1200px] mx-auto justify-center align-middle text-center'>
                <div class="overflow-hidden bg-white rounded shadow align-middle justify-center mx-auto">
                    <div class="p-5 align-middle justify-center mx-auto">
                        <div class="relative align-middle justify-center mx-auto">
                            <Link title="" class="block text-center align-middle justify-center mx-auto aspect-w-4 aspect-h-3">
                                <img class="object-cover text-center align-middle justify-center mx-auto w-[400px] lg:w-[600px] " src={data.img} alt="" />
                            </Link>

                            <div class="relative top-4 mt-10 mb-10 text-center align-middle justify-center mx-auto">
                                <span class="px-4 py-2 text-center align-middle justify-center mx-auto text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {data.category} </span>
                            </div>
                        </div>
                        <p class="mt-5 items-center text-center align-middle justify-center text-2xl font-semibold">
                            Name : {data.companyName}
                        </p>
                        <p class="mt-5 items-center text-center align-middle justify-center text-2xl font-semibold">
                         Location :    {data.location}
                        </p>
                        <p class="mt-5 items-center text-center align-middle justify-center ">
                        Details :   {data.details}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCompanyPage;