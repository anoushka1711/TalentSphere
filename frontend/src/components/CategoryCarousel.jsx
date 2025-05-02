import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { Sparkles, Code, Database, LineChart, Paintbrush, Globe, LucideMonitor, Cpu, Shield, Cloud } from 'lucide-react';

// Expanded categories with icons
const categories = [
    { name: "Frontend Developer", icon: <Code size={20} />, count: 845 },
    { name: "Backend Developer", icon: <Database size={20} />, count: 763 },
    { name: "Data Science", icon: <LineChart size={20} />, count: 521 },
    { name: "Graphic Designer", icon: <Paintbrush size={20} />, count: 492 },
    { name: "FullStack Developer", icon: <Globe size={20} />, count: 934 },
    { name: "UI/UX Designer", icon: <LucideMonitor size={20} />, count: 457 },
    { name: "DevOps Engineer", icon: <Cloud size={20} />, count: 389 },
    { name: "AI Engineer", icon: <Cpu size={20} />, count: 312 },
    { name: "Cybersecurity", icon: <Shield size={20} />, count: 276 }
];

// Featured companies
const featuredCompanies = ["TechNova", "QuantumWave", "Stellar Systems", "NexGen Solutions"];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 py-16 px-4 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Futuristic background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>

            {/* Grid patterns for futuristic feel */}
            <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-20"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Sparkles className="text-cyan-300" size={24} />
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 text-center">Explore Future Careers</h2>
                    <Sparkles className="text-cyan-300" size={24} />
                </div>

                <p className="text-blue-100 text-center mb-12 max-w-lg mx-auto">
                    Discover trending tech roles powering tomorrow's innovations. Find your perfect position in the digital frontier.
                </p>

                <Carousel className="w-full max-w-4xl mx-auto">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {categories.map((category, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="backdrop-blur-sm bg-white/10 border border-white/20 p-6 rounded-xl h-full flex flex-col items-center justify-center transition-all hover:bg-white/20 group">
                                    <div className="mb-3 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                                        {category.icon}
                                    </div>
                                    <Button
                                        onClick={() => searchJobHandler(category.name)}
                                        variant="outline"
                                        className="rounded-full bg-white/10 text-white border border-purple-300/50 hover:bg-white/20 font-medium px-5 py-2 text-sm shadow-lg transition-all transform hover:scale-105 backdrop-blur-sm w-full mb-2"
                                    >
                                        {category.name}
                                    </Button>
                                    <span className="text-xs text-blue-200">{category.count} open positions</span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-8 space-x-4">
                        <CarouselPrevious className="bg-white/10 text-white hover:bg-white/20 border-purple-300/50 backdrop-blur-sm" />
                        <CarouselNext className="bg-white/10 text-white hover:bg-white/20 border-purple-300/50 backdrop-blur-sm" />
                    </div>
                </Carousel>

                {/* Featured section */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Featured Companies</h3>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {featuredCompanies.map((company, index) => (
                            <div key={index} className="bg-white/10 px-4 py-2 rounded-full text-white text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 cursor-pointer transition-all">
                                {company}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Button
                        onClick={() => navigate("/browse")}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 font-semibold px-8 py-2 rounded-full shadow-lg transition-all transform hover:scale-105"
                    >
                        Explore All Opportunities
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCarousel;