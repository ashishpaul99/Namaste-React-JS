import UserClass from "./UserClass";
import User from "./User"
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent constructor")
    }

    componentDidMount(){
        // console.log("Parent componentDidMount")
    }
    componentWillUnmount(){
        // console.log("parent componentWillUnmount")
    }
    render(){
        // console.log("Parent render")
        return(
            <div>
                 <h1>About</h1>
                <h2>this is Namaste React Web Series🚀</h2>

                <UserClass name={"First"} location={"Hyderabad (Class)"} contact={"@ashishpaul99"}/>

                {/* <User name={"Ashish"} location={"Hyderabad (Class)"} contact={"@ashishpaul99"} /> */}
            </div>
        )
    }
} 

export default About;



