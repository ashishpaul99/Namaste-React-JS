// import UserClass from "./UserClass";
import User from "./User"
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About=()=>{
 return(
     <div>
         {/* <User/> */}
         <UserClass/>
         <div className="px-10 font-semibold">
               {/* loggedInUser */}
               <p>below data is extracted from userContext ⬇</p>
               <UserContext.Consumer>
                    {(data)=> <h2>{data.loggedInUser}</h2>}
               </UserContext.Consumer>
          </div>
    </div>
  )
}
export default About;





