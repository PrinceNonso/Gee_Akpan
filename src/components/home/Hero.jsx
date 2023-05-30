import { Image } from "antd";
import Navbar from "../shared/Navbar";

export default function Hero(){
    return (
        <div className="bg-white">
           <Navbar/>
           <section className="hero-wrapper border-t border-gray-300">
            <div className="main-container  lg:flex w-full items-center min-h-screen">
              <div className="w-8/12 md:w-1/2 mx-auto lg:mx-0 lg:w-full lg:flex-1">
                <Image
                className=""
                alt="Name of owner"
                src="/banner.png"
                preview={false}
                />
              </div>
              <div className="text-center lg:text-left lg:ml-10  flex-1">
                 <h3 className="text-2xl hover-theme mt-5 md:text-4xl lg:text-6xl italic font-semibold text-theme">Firstname <br/> Last Name  <span className="text-2xl">title</span></h3>
                 <button className="mt-5 lg:mt-16 text-lg px-7 text-white bg-theme py-2 rounded-md">Hire me</button>
              </div>
            </div>
           </section>
        </div>
    )
}