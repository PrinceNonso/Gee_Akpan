import OtherProjects from "../components/project_details/OtherProjects";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function ProjectDetails(){
    return (
        <div>
            <header className="bg-white">
               <Navbar/> 
               <p className="text-2xl text-theme mt-4 pb-7 text-center font-semibold">Project Name</p>
            </header>
            <section className="grid main-container gap-3 md:grid-cols-5 min-ht-45">
                <div className="col-span-4">
                    <img className="ht-45 w-full object-cover" src="/images/portfolio1.svg" alt="portfolio1" />
                </div>
                <div className="flex w-full justify-center md:block col-span-1">
                  <div className="ml-2 md:ml-0 mb-5"><img className="h-24 object-cover w-full" src="/images/portfolio2.svg" alt="" /></div>
                  <div className="ml-2 md:ml-0 mb-5"><img className="h-24 object-cover w-full" src="/images/portfolio3.svg" alt="" /></div>
                  <div className="ml-2 md:ml-0 mb-5"><img className="h-24 object-cover w-full" src="/images/portfolio4.svg" alt="" /></div>
                  <div className="ml-2 md:ml-0 mb-5"><img className="h-24 object-cover w-full" src="/images/portfolio5.svg" alt="" /></div>
                </div>
            </section>
            <section className="details py-7 bg-white">
               <div className="main-container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni ad rem provident debitis, aliquam iusto illum placeat temporibus dicta voluptas voluptatibus, blanditiis vero aut quibusdam earum repellendus delectus nemo necessitatibus corporis dolorem! Aut, amet dolorum. Consequatur cumque molestias rem! Autem alias architecto at! Et ducimus quasi asperiores hic porro ad corrupti numquam voluptatibus atque facilis explicabo, aut natus voluptate esse accusamus fuga incidunt aliquid deleniti tempora earum animi? Voluptatum quia porro nam. Rem maiores, nisi dolorum dignissimos provident iusto illum corporis soluta et tenetur tempora aliquid dolores incidunt, nesciunt vero sequi eligendi harum similique totam! Eos a sed doloremque.
                <p className="my-7"></p>
               </div>
               <OtherProjects/>
            </section>
            <Footer/>
        </div>
    )
}