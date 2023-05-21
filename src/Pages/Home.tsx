import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

import image from "./../../public/james-harrison-vpOeXr5wmR4-unsplash..jpg";

function Home() {
    return (
        <>
            <TopBar />
            <NavBar />
            <div className="flex justify-around bg-cover bg-no-repeat bg-center h-96 p-24 w-screen"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                }}>
                <div className="text-green-950">
                    <h2 className="w-80">Shopping and Department Store.</h2>
                    <p>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
                    <button className="bg-green-950 text-slate-200">Learn more</button>
                </div>
                <div className="w-80 h-80"><img src={image} alt="Foods" /></div>
            </div>
        </>
    )
}

export default Home;