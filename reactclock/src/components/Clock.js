import React, { useEffect, useState } from 'react'
import Circle from './Circle';

const Clock = () => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [pm, setPm] = useState(false);

    useEffect(()=>{
        setInterval (()=>{
          let h = new Date().getHours();
          let m = new Date().getMinutes();
          let s = new Date().getSeconds();

          if(h >= 12){
            setPm(true);
            h = h-12;
          }
          else{
            setPm(false);
          }

          h !== 0 ? h = h : h = 12 ;

          setHour(h);
          setMinute(m);
          setSecond(s);
        } , 1000);
    },[])
  return (
    <div className='flex h-[100vh] items-center justify-center bg-[#f9c6cc]'>
      <div className='flex p-10 rounded-3xl bg-[#181918] shadow-2xl'>
        <div className='flex'>
          <Circle val={hour} hour={true}/>
          <Circle val={minute} hour={false}/>
          <Circle val={second} hour={false}/>
        </div>
        <div>
          <div className= {`font-bold text-[white] ${pm? "opacity-20" : ""}`}>AM</div>
          <div className= {`font-bold text-[white] ${pm? "" : "opacity-20"}`}>PM</div>
        </div>
      </div>
    </div>
  )
}

export default Clock
