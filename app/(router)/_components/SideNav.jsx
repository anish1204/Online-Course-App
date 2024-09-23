import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen
    },
    {
      id: 2,
      name: "MemberShip",
      icon: BadgeIcon
    },
    {
      id: 3,
      name: "Be Instructor",
      icon: GraduationCap
    }
  ]
  return (
    <div className='p-5 bg-white shadow-sm border h-screen'>
      <Image src='/logo.png'
        width={170}
        height={80}
      />
      <div className=''>
        {menu.map((item, index) => (
          <div className='flex flex-row gap-3 mt-6 p-3 text-[18px] items-center bg-white text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md '>
            <item.icon className='group-hover:animate-bounce' />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
    // Menu List

  )
}

export default SideNav