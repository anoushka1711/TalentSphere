// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);

//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs

import React, { useState, useEffect } from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { Sparkles, ArrowRight, RefreshCw, Zap, Search, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-16 px-4 rounded-2xl shadow-xl relative overflow-hidden">
     
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-gradient)" />
                    <path d="M0,20 L100,20" stroke="#4f46e5" strokeWidth="0.1" />
                    <path d="M0,40 L100,40" stroke="#4f46e5" strokeWidth="0.1" />
                    <path d="M0,60 L100,60" stroke="#4f46e5" strokeWidth="0.1" />
                    <path d="M0,80 L100,80" stroke="#4f46e5" strokeWidth="0.1" />
                    <path d="M20,0 L20,100" stroke="#4f46e5" strokeWidth="0.1" />
                    <path d="M40,0 L40,100" stroke="#4f46e5" strokeWidth="0.1" />
                    <path d="M60,0 L60,100" stroke="#4f46e5" strokeWidth="0.1" />
                    <path d="M80,0 L80,100" stroke="#4f46e5" strokeWidth="0.1" />
                </svg>
            </div>

            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-10 animate-pulse"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute h-px w-px bg-blue-500 top-1/4 left-1/4 shadow-glow animate-ping"></div>
                <div className="absolute h-px w-px bg-blue-500 top-3/4 left-2/3 shadow-glow animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute h-px w-px bg-blue-500 top-1/2 left-1/3 shadow-glow animate-ping" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute h-px w-px bg-blue-500 top-1/3 left-3/4 shadow-glow animate-ping" style={{ animationDelay: '0.8s' }}></div>
            </div>

            <div className={`max-w-7xl mx-auto relative z-10 transition-all duration-1000 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
     
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12 relative">
                    <div className="relative">
                        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 h-12 w-2 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full"></div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">Latest & Top</span>
                            <span className="text-white"> Job Openings</span>
                        </h1>
                        <div className="flex items-center gap-2 mt-2">
                            <Zap size={14} className="text-cyan-400" />
                            <span className="text-cyan-400 text-sm">Updated hourly</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-6 md:mt-0">
                        <Button
                            variant="outline"
                            className="bg-white/5 border-0 text-white hover:bg-white/10 rounded-full flex items-center gap-2 px-6 backdrop-blur-sm"
                            onClick={() => navigate("/search")}
                        >
                            <Search size={14} />
                            <span>Search</span>
                        </Button>

                        <Button
                            onClick={() => navigate("/browse")}
                            className="bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600 rounded-full flex items-center gap-2 px-6 shadow-lg shadow-blue-500/20"
                        >
                            <span>View All</span>
                            <ArrowRight size={14} />
                        </Button>
                    </div>
                </div>

                {/* Futuristic filter tabs */}
                <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
                    <Button variant="outline" className="bg-white/5 border-0 text-white hover:bg-white/10 rounded-full flex items-center gap-2 px-4 py-2 backdrop-blur-sm">
                        <Filter size={14} />
                        <span>All Opportunities</span>
                    </Button>
                    <Button variant="outline" className="bg-white/5 border-0 text-white hover:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">Remote</Button>
                    <Button variant="outline" className="bg-white/5 border-0 text-white hover:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">Hybrid</Button>
                    <Button variant="outline" className="bg-white/5 border-0 text-white hover:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">Full-time</Button>
                    <Button variant="outline" className="bg-white/5 border-0 text-white hover:bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">Contract</Button>
                </div>

                {allJobs.length <= 0 ? (
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-cyan-500/5"></div>
                        <RefreshCw className="mx-auto mb-4 text-blue-400" size={40} />
                        <h3 className="text-2xl font-semibold text-white mb-2">No Jobs Available</h3>
                        <p className="text-gray-300 max-w-md mx-auto">
                            There are currently no job openings available. Please check back later or browse our career resources.
                        </p>
                        <Button
                            onClick={() => navigate("/resources")}
                            className="mt-6 bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600 rounded-full px-6 shadow-lg shadow-blue-500/20"
                        >
                            Explore Resources
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allJobs?.slice(0, 6).map((job, index) => (
                            <div
                                key={job._id}
                                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all hover:bg-white/10 group relative"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Border gradient animation on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                {/* Futuristic corner accent */}
                                <div className="absolute top-0 right-0 w-16 h-16">
                                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500 to-violet-500 transform rotate-45 translate-x-3/4 -translate-y-1/4"></div>
                                    </div>
                                </div>

                                <div className="p-6 relative z-10">
                                    <LatestJobCards job={job} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {allJobs.length > 0 && (
                    <div className="flex justify-center mt-10">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-3">
                            <span className="text-white text-sm">{allJobs.length} total opportunities available</span>
                            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LatestJobs;