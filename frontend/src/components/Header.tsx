import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-green-600 py-6 ">
        <div className="container mx-auto flex justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">
                <Link to={"/"}>ROOMSCAPE</Link>
            </span>
            <span className="flex space-x-2">
                <Link to={"/sign-in"} className="flex items-center border text-white px-3 font-bold hover:bg-gray-100 hover:text-green-500">Sign in</Link>
            </span>
        </div>
    </div>
  )
}

export default Header