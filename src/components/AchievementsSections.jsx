"use client";
import dynamic from 'next/dynamic';
import React from 'react'
 

const AnimatedNumbers = dynamic(() => {return import ('react-animated-numbers')}, {ssr:false})

const achievementsList=[{
    metric:"Projects",
    value:"100",
    postfix:"+",
},
{
    prefix:"~",
    metric:"users",
    value:"100,000+",
},
{
    metric:"Awards",
    value:"7",
},
{
    metric:"Years",
    value:"5",
},
];

const AchievementsSections = () => {
  return (
    <div className='py-8 px-4  xl:gap-16 sm:py-16 xl:px-16'>
        <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between'> 
        {achievementsList.map((acheivement,index)=>{
        return(
            <div key={index} className='flex flex-col items-center justify-center mx-4'>
                <h2 className='text-white text-4xl font bold '>
                    {acheivement.prefix}
                    <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(acheivement.value)}
                locale='en-Us'
                className="text-white text-4xl font-bold"
                configs={((_, index)=>{
                    return{
                        mass:1,
                        friction:100,
                        tension:140 * (index+1),
                    
                    };
                })}
                />
                </h2>
                <p className='text--[#ADB7BE] text-base'>{acheivement.metric  }</p>
        </div>
                );
        })}
     </div>
    </div>    
  )
}

export default AchievementsSections