import React from "react";

export default class About extends React.Component
{
    state = {
        error:""
    }

    componentDidMount()
    {
        console.log("after mount")

        setTimeout(()=>
        {
            this.setState({error : "we have an error"})
        },3000)
    }

    // componentWillMount()
    // {
    //     console.log("before mount")

    // }

    componentDidUpdate()
    {
        if(this.state.error)
        {
            setTimeout(()=>
            {
                this.setState({error:""});
            },5000);
        }
    }

    render()
    {
        return (
                <>
                { this.state.error && <Error/> }
                data
                </>
        )
    }   
}


function Error()
{
    return <h1>Error</h1>
}

