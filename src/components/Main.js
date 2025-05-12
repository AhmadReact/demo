import React, { useEffect, useState } from 'react'
import useCounter from '../customhooks/useCounter'
import { Typewriter } from 'react-simple-typewriter'

const Main = () => {
    
    const {count,handleClick}=useCounter(5)
    // const [text, helper] = useTypewriter({
    //   /* Hook Config */
    // })
  
    // const { isType, isDelete, isDelay, isDone } = helper
    const anchorTag = 'hi  here is link <a href="https://example.com">Visit Example</a>';
    const [apiResponse] = useState("Yes, of course! Here is a link to the Toyota Prius page on our website: <a href='https://www.toyota.com/prius/'>Toyota Prius</a>");

    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const startTypewriterEffect = () => {
      const interval = 50; // Adjust the interval as needed
  
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          const newDisplayedText = apiResponse.slice(0, newIndex);
  
          if (newIndex === apiResponse.length) {
            clearInterval(timer);
          }
  
          setDisplayedText(newDisplayedText);
          return newIndex;
        });
      }, interval);
    };
    useEffect(() => {
      startTypewriterEffect();
    }, []);
  
    
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col'>
        <h2>Counter: {count}</h2>
        <button className='bg-slate-200' onClick={handleClick}>Increment </button>

    <div dangerouslySetInnerHTML={{ __html: displayedText }}>


    </div>

    </div>
  )
}

export default Main