import React, { useEffect } from 'react';
import { Image } from 'next/image';
// import  {GlobalApi}  from './_utils/GlobalApi.js';  // Correct the import
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem';


function CourseList() {
        const data =[
            {"lecture_name":"Java","rating":4,"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4mu9EnwjY4-3XIzbIum06aUzH1e3LGS2Gw&s","tags":["easy","open-source"]},
            {"lecture_name":"C++","rating":3,"url":"https://media.geeksforgeeks.org/wp-content/uploads/20230629144356/Best-CPP-Courses-with-Certificates.png","tags":["easy","open-source"]},
            {"lecture_name":"MERN","rating":5,"url":"https://www.creativeitinstitute.com/images/course/course_1662795698.jpg","tags":["easy","open-source"]},
            {"lecture_name":"ML AI Full Course","rating":2,"url":"https://kvch.in/assets-new/img/banner/machine_learning_training.webp","tags":["easy","open-source"]},
            {"lecture_name":"Python","rating":5,"url":"https://www.aruviinstituteoflearning.com/Style/images/Python-image.jpg","tags":["easy","open-source"]},
            {"lecture_name":"Cybersecurity","rating":4,"url":"https://images.shiksha.com/mediadata/images/articles/1711693577phpvyaDal.jpeg","tags":["easy","open-source"]},
            {"lecture_name":"BlockChain","rating":3,"url":"https://www.qtreetechnologies.in/images/block-chain-training-in-coimbatore.jpg","tags":["easy","open-source"]},
        ]
    // useEffect(() => {
    //     const fetchData = () => {
    //         const courses = GlobalApi.getCourses();  // Fetch courses from GlobalApi
    //         console.log(courses);  // Log the courses
    //     };
    //     fetchData();
    // }, []);


    return (
        <div className='p-5 bg-white rounded-lg mt-3 hover:shadow-grey-600/40 '>
            {/* Title and Filter */}
            <div className='flex justify-between items-center'>
                <h2 className='text-[25px] font-bold text-primary mb-2'>All Courses</h2>
                <Select className='text-[30px]' >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">All</SelectItem>
                        <SelectItem value="dark">Paid</SelectItem>
                        <SelectItem value="system">Free</SelectItem>
                    </SelectContent>
                </Select>


            </div>
            {/* Courses List */}
            <div className='grid grid-cols-2 lg:grid-cols-3'>
                
                {data.map((item,index)=>(
                    <div key={index}>
                        <CourseItem course={item}/>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default CourseList;
