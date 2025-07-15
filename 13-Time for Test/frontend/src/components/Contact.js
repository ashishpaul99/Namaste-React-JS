const Contact=()=>{
  return(
    <div>
       <h1 className="font-bold  text-3xl">Contact Us</h1>
       <form>
          <input type="text" className="border border-black p-2 m-2" placeholder="name"></input><br></br>
          <input type="text" className="border border-black p-2 m-2" placeholder="message"></input><br></br>
          <div>
            <button className="border border-black px-2 py-1 m-2 bg-gray-300">Submit</button>
            
          </div>
          
       </form>
       <h2>developer@react.com</h2>
    </div>
  )
}

export default Contact;