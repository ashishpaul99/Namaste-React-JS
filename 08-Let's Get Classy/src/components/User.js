import {useEffect} from "react"
const User=(props)=>{

    // useEffect(()=>{
    //     const timer= setInterval(()=>{
    //         console.log("React")
    //     },1000)
    //     console.log("useEffect")
    //     return()=>{
    //         clearInterval(timer);
    //         console.log("useEffect return")
    //     }
    // },[]);
    console.log("render")

    return(
        <div className="user-card">
            <h2>Name:{props.name}</h2>
            <h3>Location:Hyderabad</h3>
            <h4>Contact: @ashishpaul99</h4>
        </div>
    )
}

export default User;

