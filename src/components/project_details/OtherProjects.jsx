import { NavLink } from "react-router-dom";
import { projects } from "../../constants";



// eslint-disable-next-line react/prop-types
function Project({img,id,name}){
    return (
    <div>
        <div className="relative h-60">
        <img src={img} className="h-full object-cover w-full"  alt={img} />
        <NavLink to={`/${id}`}>
        <button style={{bottom:"10px",left:"35%"}} className="absolute min-wt-10 py-2 px-1 bg-theme text-white rounded-lg">View</button>
        </NavLink>
         </div>
         <p className="text-lg font-medium text-center">{name}</p>
    </div>
    )
}

export default function OtherProjects(){
    return (
        <div className="main-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
          {projects.map((project)=>(
            <Project key={project.id} {...project}/>
          ))}
        </div>
    )
}