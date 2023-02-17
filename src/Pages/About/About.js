import React from 'react';

const About = () => {
    return (
        <div>
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-xl mx-auto text-center">
                        <div class="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                            <p class="text-xs font-semibold tracking-widest text-white uppercase">About Our Company</p>
                        </div>
                        <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">OUR MISSION</h2>
                        <p class="mt-4 text-base leading-relaxed text-gray-600">We mission is to empower every healthcare professional to find their perfect job opportunity, faster and easier than ever before.</p>
                    </div>



                    <section class="  sm:py-16 lg:py-24">
                        <div class="max-w-5xl  mx-auto">


                            <div class="grid grid-cols-1 gap-8  text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                                <div>
                                    <h3 class="font-bold text-7xl">
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                                    </h3>
                                    <p class="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                                    <p class="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                                </div>

                                <div>
                                    <h3 class="font-bold text-7xl">
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                                    </h3>
                                    <p class="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                                    <p class="text-base mt-0.5 text-gray-500">In last 6 years</p>
                                </div>

                                <div>
                                    <h3 class="font-bold text-7xl">
                                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                                    </h3>
                                    <p class="mt-4 text-xl font-medium text-gray-900">Team members</p>
                                    <p class="text-base mt-0.5 text-gray-500">Working for your success</p>
                                </div>
                            </div>
                        </div>
                    </section>





                    <div class="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
                        <div class="transition-all duration-200 bg-white hover:shadow-xl">
                            <div class="py-10 px-9">
                                <svg class="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                                <p class="mt-4 text-base text-gray-600">Welcome to our website! We understand that security is a top concern for our customers, which is why we offer a variety of secured payment options to ensure your transactions are safe and secure.

                                    Our payment processing system uses the latest encryption technology to protect your personal and financial information, so you can shop with confidence knowing that your data is always secure.</p>
                            </div>
                        </div>

                        <div class="transition-all duration-200 bg-white hover:shadow-xl">
                            <div class="py-10 px-9">
                                <svg class="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                                <h3 class="mt-8 text-lg font-semibold text-black">Best Support</h3>
                                <p class="mt-4 text-base text-gray-600">At our company, we believe that providing the best support is just as important as offering quality products or services. That's why our team of support specialists is available to assist you with any questions or concerns you may have. Our goal is to provide fast and efficient solutions to any issues you encounter, so you can get back to what's important - running your business or enjoying our products. </p>
                            </div>
                        </div>

                        <div class="transition-all duration-200 bg-white hover:shadow-xl">
                            <div class="py-10 px-9">
                                <svg class="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                                <p class="mt-4 text-base text-gray-600">At our company, we take great pride in the expertise of our team members. Each and every one of our staff is carefully selected based on their knowledge, experience, and dedication to excellence. Our team is made up of experts in their respective fields, and we provide ongoing training to ensure that they stay up-to-date with the latest industry trends and technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;