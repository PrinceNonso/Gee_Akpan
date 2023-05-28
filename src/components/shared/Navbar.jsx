import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <header className="main-container flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to={'/'} className={"text-xl font-medium"}>
                LOGO
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink className={"font-medium mx-3"} to={"/about"}>About</NavLink>
            <NavLink className={"font-medium mx-3"} to={"/about"}>Experience</NavLink>
            <NavLink className={"font-medium mx-3"} to={"/about"}>Contact</NavLink>
          </div>
        </header>
    )
}