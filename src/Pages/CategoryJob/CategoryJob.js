import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const CategoryJob = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(data);
    return (
        <div className='grid items-center grid-cols-1 gap-5 lg:grid-cols-2 mx-auto lg:w-[1400px]'>
            
            {
                data.map(data => <>

                    <div>
                        <div class="flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <div class="w-[200px] h-full mt-4 bg-cover">
                                <img className='p-5' src={data.img} alt="" srcset="" />
                            </div>
                            <div class="w-2/3 p-4 mt-5 md:p-4">

                                <p className='lg:text-xl text-md mb-2 font-bold text-gray-800 dark:text-white'>{data.position ? data.position : data.companyName}</p>
                                <h1 class="lg:text-md text-sm font-medium mb-2 text-gray-800 dark:text-white">Company : {data.company ? data.company : data.details.slice(0,150)}</h1>

                                <div class="lg:flex mt-5    item-center">
                                    <button class="px-2 py-1 mt-5 text-sm text-black text-left transition-colors duration-300 transform bg-[#7dffd4] rounded dark:bg-gray-700  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 mr-10">{data.location}</button>
                                    {
                                        data.budegt ? <button class="px-2 py-1 mt-5 text-sm text-black text-left transition-colors duration-300 transform bg-[#7dffd4] rounded dark:bg-gray-700  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">{data.budegt}</button> : <></>
                                    }
                                </div>



                                {
                                    user?.uid && data.company ?
                                        <>
                                            <Link
                                                to="/apply-forum"
                                            ><button className='btn btn-primary mt-6 px-10'>Apply</button></Link>
                                        </>
                                        : <>
                                        {
                                            data.company ? <Link to="/login"><button className=' btn btn-primary mt-6 px-10'>Apply</button></Link> : <Link to={data._id}><button className=' btn btn-primary mt-6 px-10'>View Details</button></Link>
                                        }
                                        </>
                                }

                            </div>
                        </div>
                    </div>

                </>)
            }
        </div>
    );
};

export default CategoryJob;