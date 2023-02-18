import React from 'react';

const Hero = () => {
    return (
        <div>
            <div>
            <div class="bg-gradient-to-b from-green-50 to-green-100">
                <section class="py-10 sm:py-16 lg:py-24">
                    <div class="px-4 mx-auto lg:max-w-7xl sm:px-6 ">
                        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                Find the perfect job for you
                                </h1>

                                <p class="mt-8 text-base text-black sm:text-xl">Fill your job in hours, not weeks. Search for free.</p>

                                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                                    <a href="#jobseeker" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start Exploring Job</a>

                                    
                                </div>
                            </div>

                            <div>
                                <img class="" src="https://civi.uxper.co/wp-content/uploads/2022/11/image-home-10.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
        </div>
    );
};

export default Hero;