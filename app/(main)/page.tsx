"use client";

import { useState } from 'react';

//import UI
import TabBar from '../../components/ui/TabBar';
import BlogCard from '@/components/ui/BlogCard';


const blogs = [
  {
    "tags": ["FREELANCING 101", "William George"],
    "title": "07 Ways to get Consistent Clients from Social Media",
    "readTime": "15 min read",
    "date": "23-05-2023",
    "image": "https://i.ibb.co/VLHTNH8/Frame-2-1.png"
  },
  {
    "tags": ["FREELANCING 101", "Christina Morillo"],
    "title": "Enhance UX: Designing Better UX/UI",
    "readTime": "15 min read",
    "date": "23-05-2023",
    "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
  },
  {
    "tags": ["FREELANCING 101", "Smith Jack"],
    "title": "Designing Impression: The Power of First Impressions",
    "readTime": "15 min read",
    "date": "23-05-2023",
    "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
  },
  {
    "tags": ["FREELANCING 101", "Brian Smith"],
    "title": "Case Study: FlipX, an Investment Attraction Startup",
    "readTime": "15 min read",
    "date": "23-05-2023",
    "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
  },
  {
    "tags": ["FREELANCING 101", "Lilly Bella"],
    "title": "Mastering Startup Branding: Expanding Digital Presence",
    "readTime": "15 min read",
    "date": "23-05-2023",
    "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
  },
  {
    "tags": ["FREELANCING 101", "Gigi Hadid"],
    "title": "Designing for Productivity: Efficiency Rules",
    "readTime": "15 min read",
    "date": "23-05-2023",
    "image": "https://i.ibb.co/0sMDLNX/Group-1000004815.png"
  },
  {
    "tags": ["FREELANCING 101", "David Travis"],
    "title": "Kickstart your UI/UX design career?",
    "readTime": "15 min read",
    "date": "23-05-2023",
    "image": "https://i.ibb.co/d4Y23FL/3dicons.png"
  }
];

const Page = () => {
  return (
    <div className='bg-[#F4F4F4]'>
      {/*header secion*/}
      <div className='header relative'>
        <div className='h-[75px] bg-center'
          style={{
            'background-image': "url('/images/Union.png')",
            'background-size': '200% 100%',
            'transform': 'scaleY(-1)'
          } as React.CSSProperties}>
        </div>
        <div className='pt-16 px-20 max-[600px]:px-5'>
          <div className='flex gap-x-[100px] max-[1228px]:flex-col'>
            <div className='flex flex-col  text-[#344054] font-bold text-[96px] 
              max-[1440px]:text-[64px] max-[1228px]:text-[32px] max-[1228px]:items-center'>
              <span>Atlas Premier</span>
              <span>Knowledge Blogs:</span>
            </div>
            <div className='flex-1 text-[#667085] font-medium leading-10 flex justify-end text-[32px]
              max-[1440px]:text-[24px] max-[1228px]:text-[16px]'>
              <span className='leading-[48px] max-[1228px]:text-center'>Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals.</span>
            </div>
          </div>
          <div className='grid grid-cols-2 rounded-[40px] bg-white p-2
            max-[1228px]:grid-cols-1'>
            <div>
              <img src='/images/MacBook.png' alt='' className='rounded-l-[35px] h-[588px] w-full
                max-[1440px]:h-[441px] max-[1228px]:h-[300px] max-[1228px]:rounded-t-[35px]'/>
            </div>
            <div className='bg-[#F4F4F4] rounded-lg rounded-r-[35px] flex flex-col justify-center pl-16
              max-[1228px]:pl-0'>
              <div className='flex font-medium text-[20px] text-[#667085] gap-x-5 items-center
                max-[1440px]:text-[14px] max-[1228px]:justify-center'>
                <span>FREELANCING 101</span>
                <div className='w-[10px] h-[10px] bg-[#667085] rounded-full'></div>
                <span>Joseph Patrick</span>
              </div>
              <div className='flex flex-col font-medium gap-y-[10px] mt-[15px] 
                text-[56px] max-[1440px]:text-[40px] max-[1440px]:leading-[53px] max-[1228px]:text-[32px]
                max-[1228px]:text-center'>
                <span>07 Ways to get</span>
                <span>Consistent Clients from</span>
                <span>Social Media</span>
              </div>
              <div className='pt-20 text-[#475467] font-medium flex gap-x-5 items-center text-[20px]
                max-[1440px]:text-[14px]'>
                <span>15 Min Read</span>
                <div className='w-[10px] h-[10px] bg-[#667085] rounded-full'></div>
                <span>23-05-2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[75px] bg-center'
          style={{
            'background-image': "url('/images/Union.png')",
            'background-size': '200% 100%'
          } as React.CSSProperties
          }>
        </div>
      </div>


      {/**navbar */}
      <div className='navbar absolute left-1/2 -translate-x-1/2 top-[40px] 
                                    flex flex-row items-centergap-x-5 py-4 px-6'>
        <div className='rounded-l-3xl border border-gray-600 px-5 py-3 cursor-pointer'>
          <img src='/images/nav-icon2.png' alt='' className='w-[40px] h-[40px]' />
        </div>
        <div className='rounded-r-3xl border border-gray-600 px-5 py-3 cursor-pointer'>
          <img src='/images/nav-icon1.png' alt='' className='w-[40px] h-[40px]' />
        </div>
      </div>
      {/*blog section*/}
      <div className='blog-section p-20'>

        {/**first section */}
        <div className=''>
          <span className='text-[64px] max-[1440px]:text-[50px] font-bold flex-1'>Blogs</span>
          <div className='flex gap-x-5 flex-1 justify-end items-center'>
            <TabBar options={[
              'All Blogs', 'Trends', 'Research', 'In-house Knowledge'
            ]} />
          </div>
        </div>

        {/**second section */}
        <div className='grid grid-cols-2 rounded-[40px] bg-white p-2 mt-10'>
          <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F4F4F4] h-[488px] rounded-l-[35px] flex items-center justify-center'>
            <img src='/images/Facebook.png' alt='' className='w-[110px] max-[1440px]:w-[95px] aspect-square cursor-pointer' />
            <img src='/images/Linkedin.png' alt='' className='w-[110px] max-[1440px]:w-[95px] aspect-square cursor-pointer' />
            <img src='/images/Instagram.png' alt='' className='w-[110px] max-[1440px]:w-[95px] aspect-square cursor-pointer' />
            <img src='/images/Behance.png' alt='' className='w-[110px] max-[1440px]:w-[95px] aspect-square cursor-pointer' />
            <img src='/images/Dribble.png' alt='' className='w-[110px] max-[1440px]:w-[95px] aspect-square cursor-pointer' />
          </div>
          <div className='bg-[#F4F4F4] rounded-r-[35px] flex flex-col justify-center pl-16 '>
            <div className='flex font-medium text-[20px] text-[#667085] gap-x-5 items-center'>
              <span>FREELANCING 101</span>
              <div className='w-[10px] h-[10px] bg-[#667085] rounded-full'></div>
              <span>William George</span>
            </div>
            <div className='flex flex-col text-[40px] max-[1440px]:text-[35px] font-medium gap-y-[10px] mt-[15px]'>
              <span>07 Ways to get Consistent</span>
              <span>Clients from Social Media</span>
            </div>
            <div className='pt-32 text-[#475467] font-medium text-[20px] max-[1440px]:text-[18px] flex gap-x-5 items-center'>
              <span>15 Min Read</span>
              <div className='w-[10px] h-[10px] bg-[#667085] rounded-full'></div>
              <span>23-06-2023</span>
            </div>
          </div>
        </div>

        {/**third section */}
        <div className='grid grid-cols-3 max-[1100px]:grid-cols-2 max-[824px]:grid-cols-1 gap-x-2 gap-y-2'>
          {
            blogs.map((blog, index) => (
              <BlogCard blogData={blog} key={index}/>
            ))
          }
        </div>

        {/**4 nd section */}
        <div className='bg-gradient-to-b from-[#2F5478] to-[#22405C] rounded-[40px] mt-20'>
          <div className='h-[75px] bg-center'
            style={{ 
              'background-image': "url('/images/Union.png')", 
              'background-size': '200% 100%', 
              'transform': 'scaleY(-1)' } as React.CSSProperties
              }>
          </div>
          <div className='px-10 flex justify-between items-center py-2 pl-36'>
            <div className='w-2/5 text-[60px] text-white'>
              <span className='font-medium'>Transforming your </span>
              <span className='font-bold'>Ideas into reality</span>
              <div className='text-[#EAECF0] text-xl mt-10'>
                Lets build something extraordinary together to  captivate your audience.
              </div>
            </div>
            <div className='w-[330px] aspect-square rounded-full border border-white 
      bg-transparent flex flex-col gap-y-3 justify-center items-center text-white text-2xl'>
              <span>Let&apos;s Work</span>
              <span>Together!</span>
            </div>
          </div>
          <div className='h-[75px] bg-center'
            style={{ 
              'background-image': "url('/images/Union.png')", 
              'background-size': '200% 100%' } as React.CSSProperties
              }>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;