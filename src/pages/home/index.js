import React, { useState } from "react";

export default function Home()
{
    // const [ a, b ] = React.useState({
    //     counter:0,
    //     timer:0
    // });

    //b({ ...a, counter: a.counter+1   })

    const [ counter, setCounter ] = useState(0);
    const [ timer, setTimer ] = useState(true);
    const [ timer_id, setTimerId ] = useState(123456);

    console.log(counter, timer, timer_id)



    // state = {
    //     counter:0,
    //     time:0,
    //      timer_id:false
    // }

    function incrementValue()
    {
        setCounter(counter+1);
    }

    function decrementValue()
    {
        setCounter(counter-1);
    }

    return(
        <>
            <h1>{counter}</h1>
            <button onClick={incrementValue} >+</button>
            <button onClick={decrementValue} >-</button>
        </>
    )   
}