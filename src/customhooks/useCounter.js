import { useEffect } from 'react'
import { useState } from 'react'

const useCounter = (initial) => {

    const [count,setcount] = useState(initial)
    const handleClick = () =>{

            setcount(count+1);
    }
    useEffect(()=>{

            console.log(count);

    },[count])
  return{
            count:count,
            handleClick:handleClick,
        }



}

export default useCounter