import React from 'react';

const Donation = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className="bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content Section */}
                    <div className="p-8 lg:p-12" data-aos="fade-right" data-aos-duration="800">
                        <div className="flex items-center mb-6">
                            <div className="bg-orange-500 p-3 rounded-full mr-4">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Help Pets in Need</h2>
                        </div>

                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Your donation makes a real difference in the lives of pets who need medical care, shelter, and love.
                            Every contribution helps us provide essential veterinary services, emergency care, and support for pet families in crisis.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="bg-orange-200 p-2 rounded-full mr-4 mt-1">
                                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Emergency Medical Care</h3>
                                    <p className="text-gray-600">Provide life-saving treatments for injured and sick pets</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-orange-200 p-2 rounded-full mr-4 mt-1">
                                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Shelter & Food</h3>
                                    <p className="text-gray-600">Support homeless pets with safe shelter and nutritious meals</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-orange-200 p-2 rounded-full mr-4 mt-1">
                                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Family Support</h3>
                                    <p className="text-gray-600">Help families keep their beloved pets during financial hardship</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-8 py-3 text-lg font-semibold">
                                Donate Now
                            </button>
                            <button className="btn btn-outline border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative h-full min-h-[400px] lg:min-h-[500px]" data-aos="fade-left" data-aos-duration="800">
                        <img
                            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Happy rescued pets"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>

                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
                                <div className="text-sm text-gray-600">Pets Helped This Year</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Choose Your Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    <div className="bg-white rounded-lg shadow-md p-4 border-2 border-transparent hover:border-orange-300 transition-all cursor-pointer">
                        <div className="text-2xl font-bold text-orange-600 mb-1">$25</div>
                        <div className="text-sm text-gray-600">Feeds 5 pets for a day</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 border-2 border-transparent hover:border-orange-300 transition-all cursor-pointer">
                        <div className="text-2xl font-bold text-orange-600 mb-1">$50</div>
                        <div className="text-sm text-gray-600">Vaccination for 1 pet</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 border-2 border-transparent hover:border-orange-300 transition-all cursor-pointer">
                        <div className="text-2xl font-bold text-orange-600 mb-1">$100</div>
                        <div className="text-sm text-gray-600">Emergency medical care</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 border-2 border-transparent hover:border-orange-300 transition-all cursor-pointer">
                        <div className="text-2xl font-bold text-orange-600 mb-1">$250</div>
                        <div className="text-sm text-gray-600">Surgery for 1 pet</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;