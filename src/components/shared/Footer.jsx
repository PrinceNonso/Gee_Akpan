export default function Footer(){
    return (
        <footer className="main-container min-ht-25 mt-10">
            <div className="max-wt-60">
                <h3 className="text-3xl text-theme font-semibold">Contact</h3>
                <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad nam dolorem aspernatur, suscipit exercitationem provident ipsam!</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                <div>
                    <h2 className="text-xl text-theme font-semibold">Location</h2>
                    <p>Uyo, Akwa-ibom state, Nigeria</p>
                </div>
                <div>
                    <h2 className="text-xl text-theme font-semibold">Phone</h2>
                    <p>08000000000</p>
                </div>
                <div>
                    <h2 className="text-xl text-theme font-semibold">Email</h2>
                    <p>emailaddress2@email.com</p>
                </div> 
                <div>
                    <h2 className="text-xl text-theme font-semibold">Website</h2>
                    <p>somewebsite.com</p>
                </div>
            </div>
        </footer>
    )
}