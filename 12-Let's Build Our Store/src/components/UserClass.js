import React from "react";


class UserClass extends React.Component{
   constructor(props){
      super(props);
      console.log("child constructor")
      // state variable
      this.state={
          userInfo:{
            name:"Dummy",
            location:"Default",
            avatar_url:"https://dummy-photo.com"
          }
       }
   }
   async componentDidMount(){
      const data=await fetch("https://api.github.com/users/ashishpaul99")
      const json=await data.json();
      console.log(json);
      // update state variable
      this.setState({
          userInfo:json,
      });
      // console.log("child componentDidMount is called")
   }

   componentDidUpdate(){
      // console.log("child componentDidUpdate is called")
   }

   componentWillUnmount(){
      // console.log("child componentWillUnmount is called")
   }

   render(){
      console.log( "Child render")
      const {name,location,login,avatar_url}=this.state.userInfo;

     return(
        <div className="user-card border border-black w-[500px] mx-10 my-10 p-8 flex items-center">
            <img className="avatar rounded-full w-32 h-32 p-3 object-cover" src={avatar_url}/>
            <div> 
            <h2 className="font-semibold">Name: {name}</h2>
            <h3 className="font-semibold">Location: {location}</h3>
            
            <h3 className="font-semibold">Contact:@{login}</h3>
            </div>

           
        </div>
     )
   
   }
};

export default UserClass;


/*
  --Mounting life cycle--
  Constructor() is called
  Render() is called - it updates the state with dummy data
  component has dummy data for instance
  componenentDidMount() is called.
  <API Call>
  <this.setState> --> state variable is updated
  Mouting cycle finished

  --Updating--
   render(API data)
   <HTML ( new API data)
   componentDidUpdate 

*/







