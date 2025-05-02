// import React, { useState } from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2, Search, Bell, Menu, X, ChevronRight, Briefcase } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     return (
//         <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
//             <div className="relative">
//                 {/* Main Navbar */}
//                 <div className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-teal-900/10">
//                     <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-500/5 rounded-2xl" />

//                     <div className="relative px-4 py-3">
//                         <div className="flex items-center justify-between gap-8">
//                             {/* Logo Section */}
//                             <Link to="/" className="flex items-center gap-3 group">
//                                 <div className="relative">
//                                     <div className="h-10 w-10 rounded-xl bg-gradient-to-b from-teal-500/10 to-teal-600/10 border border-teal-500/20 flex items-center justify-center">
//                                         <Briefcase className="w-5 h-5 text-teal-500" />
//                                     </div>
//                                 </div>
//                                 <h1 className="text-xl font-medium text-white">
//                                     Hired<span className="text-teal-400">Up</span>
//                                 </h1>
//                             </Link>

//                             {/* Center Navigation */}
//                             <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-xl">
//                                 {user && user.role === 'recruiter' ? (
//                                     <>
//                                         <NavButton to="/admin/companies">Companies</NavButton>
//                                         <NavButton to="/admin/jobs">Jobs</NavButton>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <NavButton to="/">Home</NavButton>
//                                         <NavButton to="/jobs">Jobs</NavButton>
//                                         <NavButton to="/browse">Browse</NavButton>
//                                     </>
//                                 )}
//                             </div>

//                             {/* Right Section */}
//                             <div className="flex items-center gap-3">
//                                 <button 
//                                     onClick={() => setIsSearchOpen(!isSearchOpen)}
//                                     className="p-2 text-gray-400 hover:text-teal-400 transition-colors"
//                                 >
//                                     <Search size={20} />
//                                 </button>

//                                 {!user ? (
//                                     <div className="flex items-center gap-2">
//                                         <Link to="/login">
//                                             <Button variant="ghost" 
//                                                 className="text-gray-300 hover:text-white hover:bg-teal-500/5"
//                                             >
//                                                 Login
//                                             </Button>
//                                         </Link>
//                                         <Link to="/signup">
//                                             <Button className="bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/20 text-teal-400 hover:text-teal-300 transition-colors">
//                                                 Join Now
//                                             </Button>
//                                         </Link>
//                                     </div>
//                                 ) : (
//                                     <div className="flex items-center gap-3">
//                                         <button className="relative p-2 text-gray-400 hover:text-teal-400 transition-colors">
//                                             <Bell size={20} />
//                                             <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-teal-500 rounded-full" />
//                                         </button>

//                                         <Popover>
//                                             <PopoverTrigger asChild>
//                                                 <div className="relative">
//                                                     <Avatar className="cursor-pointer ring-2 ring-teal-500/20 hover:ring-teal-500/40 transition-all">
//                                                         <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                                     </Avatar>
//                                                 </div>
//                                             </PopoverTrigger>
//                                             <PopoverContent className="w-80 p-0 bg-black/40 backdrop-blur-md border border-teal-900/20 rounded-xl shadow-xl">
//                                                 <div className="p-4 space-y-4">
//                                                     <div className="flex gap-4 items-start">
//                                                         <Avatar className="ring-2 ring-teal-500/20 h-12 w-12">
//                                                             <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
//                                                         </Avatar>
//                                                         <div className="flex-1 min-w-0">
//                                                             <h4 className="font-medium text-white truncate">{user?.fullname}</h4>
//                                                             <p className="text-sm text-gray-400 font-light line-clamp-1">{user?.profile?.bio}</p>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className="border-t border-teal-900/20 p-1.5">
//                                                     {user && user.role === 'student' && (
//                                                         <Button
//                                                             variant="ghost"
//                                                             className="w-full flex items-center justify-between text-gray-300 hover:text-teal-400 hover:bg-teal-500/5"
//                                                             onClick={() => navigate('/profile')}
//                                                         >
//                                                             <div className="flex items-center gap-2">
//                                                                 <User2 size={16} />
//                                                                 View Profile
//                                                             </div>
//                                                             <ChevronRight size={16} />
//                                                         </Button>
//                                                     )}
//                                                     <Button
//                                                         variant="ghost"
//                                                         className="w-full flex items-center justify-between text-gray-300 hover:text-red-400 hover:bg-red-500/5"
//                                                         onClick={logoutHandler}
//                                                     >
//                                                         <div className="flex items-center gap-2">
//                                                             <LogOut size={16} />
//                                                             Logout
//                                                         </div>
//                                                         <ChevronRight size={16} />
//                                                     </Button>
//                                                 </div>
//                                             </PopoverContent>
//                                         </Popover>
//                                     </div>
//                                 )}

//                                 {/* Mobile Menu Button */}
//                                 <button 
//                                     className="md:hidden p-2 text-gray-400 hover:text-teal-400 transition-colors"
//                                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                                 >
//                                     {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Search Overlay */}
//                 {isSearchOpen && (
//                     <div className="absolute inset-x-0 top-full mt-2">
//                         <div className="bg-black/40 backdrop-blur-md rounded-xl border border-teal-900/20 shadow-lg p-4">
//                             <div className="relative">
//                                 <input
//                                     type="text"
//                                     placeholder="Search jobs, companies, or keywords..."
//                                     className="w-full bg-white/5 border border-teal-900/20 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/30 focus:ring-1 focus:ring-teal-500/30"
//                                     autoFocus
//                                 />
//                                 <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className="absolute inset-x-0 top-full mt-2 md:hidden">
//                         <div className="bg-black/40 backdrop-blur-md rounded-xl border border-teal-900/20 shadow-lg p-2">
//                             <nav className="flex flex-col gap-1">
//                                 {user && user.role === 'recruiter' ? (
//                                     <>
//                                         <MobileNavButton to="/admin/companies">Companies</MobileNavButton>
//                                         <MobileNavButton to="/admin/jobs">Jobs</MobileNavButton>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <MobileNavButton to="/">Home</MobileNavButton>
//                                         <MobileNavButton to="/jobs">Jobs</MobileNavButton>
//                                         <MobileNavButton to="/browse">Browse</MobileNavButton>
//                                     </>
//                                 )}
//                             </nav>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// const NavButton = ({ to, children }) => (
//     <Link to={to}>
//         <button className="px-4 py-1.5 text-sm text-gray-300 hover:text-teal-400 hover:bg-teal-500/5 rounded-lg transition-colors">
//             {children}
//         </button>
//     </Link>
// );

// const MobileNavButton = ({ to, children }) => (
//     <Link to={to}>
//         <button className="w-full px-4 py-2.5 text-left text-gray-300 hover:text-teal-400 hover:bg-teal-500/5 rounded-lg transition-colors">
//             {children}
//         </button>
//     </Link>
// );

// export default Navbar


import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User2, Bell, Menu, X, ChevronRight, Briefcase } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <header className="p-4fixed top-0 left-0 right-0 z-50 px-4 py-3">
            <div className="max-w-7xl mx-auto">
                <nav className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg">
                    <div className="px-4 sm:px-6 py-3">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <Link to="/" className="flex items-center gap-2 group">
                                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                                    <Briefcase className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Talent<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Sphere</span>
                                </span>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex md:items-center md:space-x-4">
                                {user && user.role === 'recruiter' ? (
                                    <>
                                        <NavLink to="/admin/companies">Companies</NavLink>
                                        <NavLink to="/admin/jobs">Jobs</NavLink>
                                    </>
                                ) : (
                                    <>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/jobs">Jobs</NavLink>
                                        <NavLink to="/browse">Browse</NavLink>
                                    </>
                                )}
                            </div>

                            {/* User Actions */}
                            <div className="flex items-center gap-3">
                                {!user ? (
                                    <div className="hidden sm:flex items-center gap-2">
                                        <Link to="/login">
                                            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                                                Join Now
                                            </Button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        {/* Notification Bell */}
                                        <button className="relative p-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-white/5">
                                            <Bell size={18} />
                                            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-blue-500 rounded-full ring-2 ring-black" />
                                        </button>

                                        {/* User Profile Dropdown */}
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <div className="cursor-pointer transition-transform duration-200 hover:scale-105">
                                                    <Avatar className="h-8 w-8 ring-2 ring-white/20 hover:ring-blue-500/50 transition-all duration-200">
                                                        <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
                                                    </Avatar>
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-64 p-0 bg-black/80 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl">
                                                <div className="p-4">
                                                    <div className="flex gap-3 items-center">
                                                        <Avatar className="h-10 w-10 ring-2 ring-white/20">
                                                            <AvatarImage src={user?.profile?.profilePhoto} alt="Profile" />
                                                        </Avatar>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="font-medium text-white truncate">{user?.fullname}</h4>
                                                            <p className="text-xs text-gray-400 truncate">{user?.profile?.bio || "No bio yet"}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border-t border-white/10 p-1">
                                                    {user?.role === 'student' && (
                                                        <Button
                                                            variant="ghost"
                                                            className="w-full justify-start text-sm text-gray-300 hover:text-blue-400 hover:bg-white/5"
                                                            onClick={() => navigate('/profile')}
                                                        >
                                                            <User2 size={16} className="mr-2" />
                                                            View Profile
                                                            <ChevronRight size={14} className="ml-auto" />
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="ghost"
                                                        className="w-full justify-start text-sm text-gray-300 hover:text-red-400 hover:bg-white/5"
                                                        onClick={logoutHandler}
                                                    >
                                                        <LogOut size={16} className="mr-2" />
                                                        Logout
                                                        <ChevronRight size={14} className="ml-auto" />
                                                    </Button>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                )}

                                {/* Mobile menu button */}
                                <button
                                    className="md:hidden p-2 text-gray-400 hover:text-blue-400 rounded-lg hover:bg-white/5"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-expanded={isMobileMenuOpen}
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu, show/hide based on menu state */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden px-2 pt-2 pb-3 border-t border-white/10">
                            {user && user.role === 'recruiter' ? (
                                <>
                                    <MobileNavLink to="/admin/companies">Companies</MobileNavLink>
                                    <MobileNavLink to="/admin/jobs">Jobs</MobileNavLink>
                                </>
                            ) : (
                                <>
                                    <MobileNavLink to="/">Home</MobileNavLink>
                                    <MobileNavLink to="/jobs">Jobs</MobileNavLink>
                                    <MobileNavLink to="/browse">Browse</MobileNavLink>
                                </>
                            )}

                            {!user && (
                                <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-white/10">
                                    <Link to="/login">
                                        <Button variant="ghost" className="w-full justify-center text-gray-300 hover:text-white hover:bg-white/5">
                                            Login
                                        </Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button className="w-full justify-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                                            Join Now
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
    >
        {children}
    </Link>
);

const MobileNavLink = ({ to, children }) => (
    <Link
        to={to}
        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
        onClick={() => setIsMobileMenuOpen(false)}
    >
        {children}
    </Link>
);

export default Navbar;