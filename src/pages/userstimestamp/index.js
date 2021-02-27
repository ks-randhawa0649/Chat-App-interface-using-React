import React, { useEffect, useState } from "react";

let pre;

export default function Timer()
{
    const [ timer, setTimer ] = useState(0);
    const [ counter, setCounter ] = useState(0);


    console.log("inside function");

    useEffect(()=>
    {
        console.log("inside effect");

        // setTimeout(()=>
        // {
            
        //     setTimer(timer+1);

            
        // },1000)

           
    },[])


    useEffect(()=>
    {
        console.log("inside effect");

        // setTimeout(()=>
        // {
            
        //     setTimer(timer+1);

            
        // },1000)

           
    })
    

    function incrementValue()
    {
        pre = counter;
        setCounter(counter+1);
    }

    function decrementValue()
    {
        pre = counter
        setCounter(counter-1);
    }

    return(
        <>
            <h1>{timer} dsf</h1>
            <h1>{counter}</h1>
            <button onClick={incrementValue} >+</button>
            <button onClick={decrementValue} >-</button>
        </>
    )   
      
    
}