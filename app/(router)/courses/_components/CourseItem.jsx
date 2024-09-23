import React from 'react'
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {Youtubeicon} from '../../../../public/youtube.png';


function CourseItem({ course }) {
  return (
    <div className=' p-2 mb-3 rounded-md justify-evenly gap-2 ml-4 border-2 border-slate-750'>

      <img className='rounded-md h-900 ' src={course.url} alt="lec-logo" />
      <div className=' mt-5 flex justify-between'>
        <h1 className='text-black text-[20px]'>{course.lecture_name}</h1>
        <h3 className='flex'>{course.rating}<Star /></h3>
      </div>
      <div className=''>
      <img src="https://cdn-icons-png.flaticon.com/128/174/174883.png" width={25} height={25} alt="youtube"  />
        <p className='text-gray-400' >CodeBuzzy Tutorials</p>
        
      </div>
      <div>
        
         
          
      </div>
      <Button className='bg-primary mt-5 mb-3'>Free</Button>
    </div>
  )
}
export default CourseItem