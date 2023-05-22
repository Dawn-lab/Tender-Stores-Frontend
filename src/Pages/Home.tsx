import  "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

import image from "./../../public/james-harrison-vpOeXr5wmR4-unsplash..jpg";

function Home() {
    return (
        <>
            <TopBar />
            <NavBar />
            <div className="flex justify-around bg-cover bg-no-repeat bg-center h-[43%] p-24 w-screen"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                }}>
                <div className="text-slate-200">
                    <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-200 md:text-5xl lg:text-6xl dark:text-white">Shopping and Department Store.</h2>
                    <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <button className="bg-green-950  p-2 px-3 m-[2%] rounded-full text-slate-200">Learn more</button>
                </div>
                <div className="w-80 h-80"><img src={image} alt="Foods" /></div>
            </div>
            <div className="px-[10%] py-[2%] items-center h-96">
                <div>
                    <h2 className="text-gray-950 text-2xl">Shop our top categories</h2>
                </div>
                <div className="flex justify-center  h-full">
                <div className="flex gap-8 p-6">
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    {/* <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div> */}
                </div>
                </div>
            </div>
            <div className="px-[10%] py-[2%] items-center h-screen bg-slate-900">
                <div>
                    <h2 className="text-gray-950 text-2xl">Todays Best Deals</h2>
                </div>
                <div className="flex justify-center  h-full">
                <div className="flex gap-8 p-6">
                    <div className="h-4/5 w-96 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-96 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-96 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    {/* <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div>
                    <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div> */}
                    {/* <div className="h-4/5 w-36 bg-black text-slate-200 rounded-3xl flex items-center justify-center">hello</div> */}
                </div>
                </div>
            </div>
        </>
    )
}

export default Home;