import { Image } from "antd";

function Project(props){
    const {icon,role,details} = props
    return (
        <div className="mr-3 hover:text-white hover-bg-theme min-wt-25 min-ht-35 p-3 rounded-lg bg-white">
        <div className="rounded-lg bg-white ht-25 border border-gray-200 flex items-center justify-center">
            <Image
            alt="icon-1"
            src={icon}
            preview={false}
            />
        </div>
        <div className="mt-3">
            <h2 className="font-semibold text-lg">{role}</h2>
            <p>{details}</p>
        </div>
    </div>
    )
}
Project.propTypes={
    icon:"",
    role:"",
    details:""
}

export default function Experience(){
    return (
        <section className="main-container min-ht-40">
            <h3 className="font-semibold text-theme text-center text-4xl my-5">Experience</h3>
            <div className="flex overflow-x-auto">
               <Project
                icon={"/icons/icon1.svg"}
                role={"Role 1"}
                details={"Project Details 1"}
               />  
               <Project
                icon={"/icons/icon2.svg"}
                role={"Role 2"}
                details={"Project Details 2"}
               />  
               <Project
                icon={"/icons/icon3.svg"}
                role={"Role 3"}
                details={"Project Details 3"}
               />  
               <Project
                icon={"/icons/icon4.svg"}
                role={"Role 4"}
                details={"Project Details 4"}
               />
            </div>
        </section>
    )
}