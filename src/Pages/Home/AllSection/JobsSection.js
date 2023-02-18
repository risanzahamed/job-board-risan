import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const JobsSection = ({ color }) => {

    const { user } = useContext(AuthContext)

    const [fresherData, setfresherData] = useState([])

    useEffect(() => {
        fetch(`https://job-board-risan-server.vercel.app/fresher-jobs`)
            .then(res => res.json())
            .then(data => {
                setfresherData(data.data)
            })
    }, [])

    const [expertData, setExpertData] = useState([])

    useEffect(() => {
        fetch(`https://job-board-risan-server.vercel.app/expert-jobs`)
            .then(res => res.json())
            .then(data => {
                setExpertData(data.data)
            })
    }, [])

    const [companies, setCompanies] = useState([])

    useEffect(() => {
        fetch(`https://job-board-risan-server.vercel.app/companies`)
            .then(res => res.json())
            .then(data => {
                setCompanies(data.data)
            })
    }, [])

    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
        <h2 class="text-2xl font-bold text-gray-800 p-20 text-center mt-10  sm:text-4xl sm:leading-tight">Features Job and Companies</h2>
            <div className="flex flex-wrap px-4 mx-auto max-w-[1400px] sm:px-6">

            
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "lg:text-2xl font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-orange-400"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Fresher Jobs
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "lg:text-2xl font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-orange-400"
                                        : "text-" + color + "-600 bg-white")
                                }

                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Experienced Jobs
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "lg:text-2xl lg:m-0 m-5 font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-orange-400"
                                        : "text-" + color + "-600 bg-white")
                                }

                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Top IT Companiess
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">

                                <div >
                                    <div className={openTab === 1 ? "grid items-center grid-cols-1 gap-5 lg:grid-cols-2" : "hidden"} id="link1">


                                        {
                                            fresherData.map(fresherData => <>

                                                <div>
                                                    <div class="lg:flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                                        <div class="lg:w-[100px] h-full mt-4 bg-cover">
                                                            <img className='p-5' src={fresherData.img} alt="" srcset="" />
                                                        </div>
                                                        <div class="lg:w-2/3 p-4 mt-5 md:p-4">

                                                            <p className='lg:text-xl text-md mb-2 font-bold text-gray-800 dark:text-white'>{fresherData.position}</p>
                                                            <h1 class="lg:text-md text-sm font-medium mb-2 text-gray-800 dark:text-white">Company : {fresherData.company}</h1>
                                                            <div class="lg:flex mt-5    item-center">
                                                                <button class="px-2 py-1 mt-5 text-sm text-black text-left transition-colors duration-300 transform bg-[#7dffd4] rounded dark:bg-gray-700  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 mr-10">{fresherData.location}</button>
                                                                <button class="px-2 py-1 mt-5 text-sm text-black text-left transition-colors duration-300 transform bg-[#7dffd4] rounded dark:bg-gray-700  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">{fresherData.budegt}</button>
                                                            </div>

                                                            {
                                                                user?.uid ? 
                                                                <>
                                                                <Link 
                                                                 to="/apply-forum"
                                                                ><button className='btn btn-primary mt-6 px-10'>Apply</button></Link>
                                                                </>
                                                                : <Link to="/login"><button className='btn btn-primary mt-6 px-10'>Apply</button></Link>
                                                            }
                                                           
                                                        </div>
                                                    </div>
                                                </div>

                                            </>)
                                        }

                                    </div>
                                </div>


                                <div className={openTab === 2 ? "grid items-center grid-cols-1 gap-12 lg:grid-cols-2" : "hidden"} id="link2">
                                {
                                            expertData.map(expertData => <>

                                                <div>
                                                    <div class="lg:flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                                        <div class="lg:w-[100px] h-full mt-4 bg-cover">
                                                            <img className='p-5' src={expertData.img} alt="" srcset="" />
                                                        </div>
                                                        <div class="lg:w-2/3 p-4 mt-5 md:p-4">

                                                            <p className='lg:text-xl text-md mb-2 font-bold text-gray-800 dark:text-white'>{expertData.position}</p>
                                                            <h1 class="lg:text-md text-sm font-medium mb-2 text-gray-800 dark:text-white">Company : {expertData.company}</h1>
                                                            <div class="lg:flex mt-5   item-center">
                                                                <button class="px-2 py-1 mt-5 text-sm text-black text-left transition-colors duration-300 transform bg-[#7dffd4] rounded dark:bg-gray-700  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 mr-10">{expertData.location}</button>
                                                                <button class="px-2 py-1 mt-5 text-sm text-black text-left transition-colors duration-300 transform bg-[#7dffd4] rounded dark:bg-gray-700  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">{expertData.budegt}</button>
                                                            </div>

                                                            {
                                                                user?.uid ? 
                                                                <>
                                                                <Link  to="/apply-forum"><button className='btn btn-primary mt-6 px-10'>Apply</button></Link>
                                                                </>
                                                                : <Link to="/login"><button className='btn btn-primary mt-6 px-10'>Apply</button></Link>
                                                            }

                                                         
                                                           
                                                        </div>
                                                    </div>
                                                </div>

                                            </>)
                                        }
                                </div>
                                <div className={openTab === 3 ? "grid items-center grid-cols-1 gap-12 lg:grid-cols-2" : "hidden"} id="link3">
                                {
                                            companies.map(companies => <>

                                                <div>
                                                    <div class="lg:flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                                        <div class="lg:w-[200px] h-full mt-4 bg-cover">
                                                            <img className='p-5' src={companies.img} alt="" srcset="" />
                                                        </div>
                                                        <div class="lg:w-2/3 p-4 mt-5 md:p-4">

                                                            <p className='lg:text-xl text-md mb-2 font-bold text-gray-800 dark:text-white'>{companies.companyName}</p>
                                                            <h1 class="lg:text-md text-sm font-medium mb-2 text-gray-800 dark:text-white">{companies.details}</h1>
                                                            <div class="lg:flex mt-5 justify-between   item-center">
                                                                <button class="px-2  md:mr-5 py-1 text-sm text-left text-black  transition-colors duration-300 transform bg-[#F2F8F6] rounded dark:bg-gray-700  focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">{companies.location}</button>
                                                                
                                                            </div>
                                                           
                                                        </div>
                                                    </div>
                                                </div>

                                            </>)
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobsSection;
