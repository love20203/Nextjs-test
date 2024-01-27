import { useState } from 'react';

const Tab = ({ isActive, text, handleClick, index}) => {
    return(
      <div className={`px-5 py-3 text-xl cursor-pointer rounded-full hover:bg-[#acc6d78b] ${isActive? 'bg-[#acc6d7] text-[#294F74] \
                    border border-slate-600' : 'text-[#98A2B3]'}`} onClick={(e) => {
                      handleClick(index);
                    }}>
        {text}
      </div>
    )
  }
  
  const TabBar = ({ options } : {options: any}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleToggle = (index) => {
      setActiveIndex(index);
    }
    return(
      <div className='flex gap-x-5 w-fit'>
      {
        options.map((option : any, index : number) => (
          <Tab isActive={activeIndex == index} text={option} index={index} 
              handleClick={handleToggle}/>
        ))
      }
      </div>
    )
  }

  export default TabBar;