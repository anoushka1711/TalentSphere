// import React, { useEffect, useState } from 'react'
// import { Badge } from './ui/badge'
// import { Button } from './ui/button'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
// import { setSingleJob } from '@/redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';

// const JobDescription = () => {
//     const {singleJob} = useSelector(store => store.job);
//     const {user} = useSelector(store=>store.auth);
//     const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
//     const [isApplied, setIsApplied] = useState(isIntiallyApplied);

//     const params = useParams();
//     const jobId = params.id;
//     const dispatch = useDispatch();

//     const applyJobHandler = async () => {
//         try {
//             const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            
//             if(res.data.success){
//                 setIsApplied(true); // Update the local state
//                 const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
//                 dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
//                 toast.success(res.data.message);

//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     useEffect(()=>{
//         const fetchSingleJob = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setSingleJob(res.data.job));
//                     setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync with fetched data
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchSingleJob(); 
//     },[jobId,dispatch, user?._id]);

//     return (
//         <div className='max-w-7xl mx-auto my-10'>
//             <div className='flex items-center justify-between'>
//                 <div>
//                     <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
//                     <div className='flex items-center gap-2 mt-4'>
//                         <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.postion} Positions</Badge>
//                         <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
//                         <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
//                     </div>
//                 </div>
//                 <Button
//                 onClick={isApplied ? null : applyJobHandler}
//                     disabled={isApplied}
//                     className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
//                     {isApplied ? 'Already Applied' : 'Apply Now'}
//                 </Button>
//             </div>
//             <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
//             <div className='my-4'>
//                 <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
//                 <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
//                 <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
//                 <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
//                 <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
//                 <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
//                 <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
//             </div>
//         </div>
//     )
// }

// export default JobDescription


import React, { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { Briefcase, MapPin, Calendar, Users, DollarSign, Clock, Building2 } from 'lucide-react';

const JobDescription = () => {
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);
    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
            
            if(res.data.success) {
                setIsApplied(true);
                const updatedSingleJob = {...singleJob, applications:[...singleJob.applications, { applicant: user?._id }]};
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if(res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
                    
                    <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                    {singleJob?.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{singleJob?.postion} Positions</Badge>
                                    <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-200">{singleJob?.jobType}</Badge>
                                    <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">{singleJob?.salary} LPA</Badge>
                                </div>
                            </div>
                            
                            <Button
                                onClick={isApplied ? null : applyJobHandler}
                                disabled={isApplied}
                                className={`w-full md:w-auto px-8 py-6 text-lg rounded-xl transition-all duration-300 ${
                                    isApplied 
                                        ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transform hover:scale-105'
                                }`}
                            >
                                {isApplied ? 'Already Applied' : 'Apply Now'}
                            </Button>
                        </div>

                        <div className="space-y-6">
                            <div className="border-b border-slate-200 pb-6">
                                <h2 className="text-xl font-semibold mb-4">Job Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-slate-500">Role</p>
                                            <p className="font-medium">{singleJob?.title}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-slate-500">Location</p>
                                            <p className="font-medium">{singleJob?.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-slate-500">Experience</p>
                                            <p className="font-medium">{singleJob?.experience} years</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-slate-500">Salary</p>
                                            <p className="font-medium">{singleJob?.salary} LPA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-slate-500">Total Applicants</p>
                                            <p className="font-medium">{singleJob?.applications?.length}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="text-sm text-slate-500">Posted Date</p>
                                            <p className="font-medium">{singleJob?.createdAt.split("T")[0]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold">Job Description</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {singleJob?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;