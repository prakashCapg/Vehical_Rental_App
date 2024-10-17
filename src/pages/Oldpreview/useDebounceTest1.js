import React,{useState,useEffect} from 'react';

const useDebounce = () =>{
    // const[debounceValue,setDebounceValue]=useState(value);
    // useEffect(()=>{
    //     const handler = setTimeout(()=>{
    //       setDebounceValue(value)
    //     },delay);
    //     return ()=>{
    //         clearTimeout(handler);
    //     }
    // },[value,delay])

    // return debounceValue;

    const [isReversed, setIsReversed] = React.useState(false);

    return (
        <div className='container ' >
            <div className="first">First Div</div>
            <div className="second">Second Div</div>
        </div>
    );
}
export default useDebounce;