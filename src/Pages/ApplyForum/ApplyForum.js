import React from 'react';
import { Link } from 'react-router-dom';

const ApplyForum = () => {
    return (
        <div>
            <section class="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/2/woman-working-laptop.jpg" alt="" />
    </div>
    <div class="absolute inset-0 bg-gray-900/20"></div>

    <div class="relative max-w-lg px-4 mx-auto sm:px-0">
        <div class="overflow-hidden bg-white rounded-md shadow-md">
            <div class="px-4 py-6 sm:px-8 sm:py-7">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-900">Apply Now</h2>
                    
                </div>

                <form action="#" method="POST" class="mt-8">
                    <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> First & Last name </label>
                            <div class="mt-2.5">
                                <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                            <div class="mt-2.5">
                                <input type="email" name="" id="" placeholder="Enter email to get started" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Your Whatsapp Number </label>
                            <div class="mt-2.5">
                                <input type="text" name="" id="" placeholder="type your whatsapp number" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> About Yourself </label>
                            <div class="mt-2.5">
                                <input type="text" name="" id="" placeholder="tell us about yourself" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>



                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Submit your resume link </label>
                            <div class="mt-2.5">
                                <input type="text" name="" id="" placeholder="give your resume link" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Cover Letter </label>
                            <div class="mt-2.5">
                            <textarea className="textarea w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" placeholder="cover letter"></textarea>
                            </div>
                        </div>



                        <div>
                           <Link to="/"> <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Apply Now</button></Link>
                        </div>
                    </div>
                </form>

                
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default ApplyForum;