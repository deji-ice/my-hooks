import image from "../assets/bg-mobile-light.jpg"


function Navbar (){
    return(
        <nav className="fixed w-screen flex">

        <img src={image} alt="" className="absolute -z-10" />

        <div className="flex justify-between w-full p-5"><p>Todo</p> <p>O</p></div>
    
        </nav>
    )
}
export default Navbar