import {useEffect, useState} from "react"
const User=()=>{
    const [userInfo,setUserInfo]=useState({})

    useEffect(()=>{
        fetchData()
    },[]);
    
    const fetchData=async ()=>{
        const data=await fetch("https://api.github.com/users/ashishpaul99")
        const json=await data.json();
        console.log(json);
        setUserInfo(json);
    }
    const {name,location,login,avatar_url}=userInfo;

    return(
       
        <div className="m-10 p-10 border border-solid border-black w-[700px] flex bg-gray-100 rounded-lg">

            <img className="w-52  rounded-full" src={avatar_url}/>
            <div className="ml-6 flex flex-col justify-center">
                <h2 className="text-lg">Name : {name}</h2>
                <h3 className="text-lg">Location : {location}</h3>
                <h4 className="text-lg">Contact : {login}</h4>
            </div>
            
        </div>
    )
}

export default User;

