const BlogCard = ({ blogData }) => {
    return(
        <div className='rounded-[40px] bg-white p-2 mt-10 flex flex-col'>
          <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F4F4F4]'>
            <img src={blogData.image} alt='' className='rounded-t-[35px] w-full h-[250px] max-[1440px]:h-[210px]'/>
          </div>
          <div className='bg-gradient-to-b from-[#FFFFFF] to-[#F4F4F4] 
            rounded-b-[35px] flex-1 flex flex-col px-8 py-5 gap-y-8'>
            <div className='flex items-center gap-x-4 max-[1440px]:gap-x-2 text-xl max-[1440px]:text-lg font-medium text-[#667085]'>
                <span>{blogData.tags[0]}</span>
                <span className='w-[8px] aspect-square bg-[#667085] rounded-full'/>
                <span>{blogData.tags[1]}</span>
            </div>
            <div className='flex-1 text-[30px] max-[1440px]:text-[26px] font-medium'>
                {blogData.title}
            </div>
            <div className='flex gap-x-5 text-[#667085] font-medium text-xl max-[1440px]:text-lg 
                items-center'>
                <span>{blogData.readTime}</span>
                <span className='w-[8px] aspect-square bg-[#667085] rounded-full'/>
                <span>{blogData.date}</span>
            </div>
          </div>
        </div>
    )
}

export default BlogCard;