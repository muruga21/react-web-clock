import React from 'react'

const Circle = (props) => {
    let val = props.val;
    let hour = props.hour;
    console.log(val);
  return (
    <div className='flex h-[200px] w-[200px]'>
        <svg width={200} height={200}>
            <g transform='rotate(-90, 100, 100)'>
                <circle 
                    r="70" 
                    cx='100' 
                    cy='100' 
                    fill='transparent'
                    stroke='currentColor'
                    strokeWidth='1rem'
                    strokeDasharray={439.8}
                    strokeDashoffset={0}
                    className='text-gray-100'
                ></circle>
                <circle
                    r="70" 
                    cx='100' 
                    cy='100' 
                    fill='transparent'
                    stroke='currentColor'
                    strokeWidth='1rem'
                    strokeDasharray={439.8}
                    strokeDashoffset={440 - (440 * val) / (hour ? 12 : 60)}
                    className=' text-[#5B6EF7] blur-sm'
                >
                </circle>
                <circle
                    r="70" 
                    cx='100' 
                    cy='100' 
                    fill='transparent'
                    stroke='currentColor'
                    strokeWidth='1rem'
                    strokeDasharray={439.8}
                    strokeDashoffset={440 - (440 * val) / (hour ? 12 : 60)}
                    className=' text-[#5B6EF7]'
                >
                </circle>
            </g>
            <text className='text-xl font-bold' x='50%' y='50%' dominantBaseline="central" textAnchor='middle'>
                {val.toString().padStart(2,'0')}
            </text>
        </svg>
      
    </div>
  )
}

export default Circle
