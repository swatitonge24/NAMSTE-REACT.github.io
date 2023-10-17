const Contact =()=>{
    return(
        <div className="w-6/12">
            <h1 className="font-bold text-3xl text-center m-4 p-4">Contact Us</h1>
            <form>
                <input type="text"
                className= "border border-black p-2 m-2" placeholder="Your Name"/>
                <input type="text"
                className= "border border-black p-2 m-2" placeholder="Write message here"/>
                <button 
                className="border border-black p-2 m-2 bg-lime-200 rounded-lg">Submit</button>


            </form>
        </div>
    )
}
export default Contact;
