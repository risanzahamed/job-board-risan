import React from 'react';
import { Link } from 'react-router-dom';

const JobSeekerPoster = ({ color }) => {

    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <>

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
                                    Job Seeker
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
                                    Job Poster
                                </a>
                            </li>

                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                            <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">

                                    <div >
                                        <div className={openTab === 1 ? "grid items-center grid-cols-1 gap-5 lg:grid-cols-1" : "hidden"} id="link1">


                                            <div>
                                                <div class="flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                                    <div class=" mt-4 bg-cover">
                                                        <img className='p-5' src="https://jobzilla.wprdx.com/demo/wp-content/uploads/2022/08/ab-1.png" alt="" srcset="" />
                                                    </div>
                                                    <div class="w-2/3 p-4 mt-5 md:p-4">

                                                        <p className='lg:text-5xl loading mb-4 text-md  font-bold text-gray-800 dark:text-white'>Millions of jobs. Find the one that’s right for you.</p>
                                                        <h1 class="lg:text-2xl text-sm font-medium mb-2 text-gray-800 dark:text-white">
                                                            <ol>
                                                                <li>1. Full lifetime access</li>
                                                                <li>2. 20+ downloadable resources</li>
                                                                <li>3. Certificate of completion</li>
                                                                <li>4. Free Trial 7 Days</li>
                                                            </ol>
                                                        </h1>

                                                        <a href="#jobseeker"> <button className='btn btn-primary mt-6'>See Jobs</button> </a>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className={openTab === 2 ? "grid items-center grid-cols-1 gap-12 lg:grid-cols-1" : "hidden"} id="link2">
                                        <div>
                                            <div class="flex  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                                                <div class=" mt-4 bg-cover">
                                                    <img className='p-5 ' src="https://jobzilla.wprdx.com/demo/wp-content/uploads/2022/08/main-bg.png" alt="" srcset="" />
                                                </div>
                                                <div class="w-2/3 p-4 mt-5 md:p-4">

                                                    <p className='lg:text-5xl loading mb-4 text-md  font-bold text-gray-800 dark:text-white'>For Employers</p>
                                                    <h1 class="lg:text-2xl text-sm font-medium mb-2 text-gray-800 dark:text-white">
                                                        Find professionals from around the world and across all skills.
                                                    </h1>
                                                    <p>We’re the world’s largest startup community. We help startups change the world. At AngelList, we fundamentally believe in startups. We’re building the definitive platform for startups — where they raise money, build their team, and launch their products.

                                                        AngelList is a remote-first company – you can choose to work remotely or work from one of our offices in hub cities: San Francisco, Seattle, and New York City. While AngelList offices are only partially open at this time in accordance with local health guidance, you choose how and where you’d like to work even in a post-COVID world.</p>
                                                    <Link><button className='btn btn-primary mt-6'>Post jobs for Free</button></Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default JobSeekerPoster;