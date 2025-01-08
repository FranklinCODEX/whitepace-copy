
import { useState } from "react";
import logo from "../assets/whitepace-logo.png";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    return (
        <nav className="bg-mainbg flex flex-row items-center justify-center w-full text-white p-3 border border-t-0 border-r-0 border-l-0 border-[#1f5da383]  relative ">
            <div className="container flex items-center p-2 justify-between w-full " >
                <img src={logo} alt="Logo"/>
                <div className="flex flex-row flex-wrap justify-center items-center gap-8">
                    <div className="lg:flex md:hidden sm:hidden small:hidden flex-row gap-5 p-2">
                        <div className="group cursor-pointer flex flex-row gap-2 items-center relative ">
                            <span>Product</span>
                            <i className="fa-solid fa-chevron-down"></i>
                            <div className="w-[20vw] bg-red-600 h-[10vh] absolute top-6 hidden group-hover:block" ></div>
                        </div>

                        <div className="cursor-pointer flex flex-row gap-2 items-center ">
                            <span>Solution</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>

                        <div className="cursor-pointer flex flex-row gap-2 items-center ">
                            <span>Resources</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>

                        <div className="cursor-pointer flex flex-row gap-2 items-center ">
                            <span>Pricing</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>

                    <div className="md:flex justify-center items-stretch gap-5 small:hidden sm:hidden">
                        <button className="bg-yellow-300 px-5 py-3 rounded-md text-black hover:scale-105  duration-300 ease-in-out ">Login</button>
                        <a href="#" className="bg-[#4F9CF9] px-5 py-3 flex flex-row gap-2 items-center rounded-md w-auto hover:scale-105  duration-300 ease-in-out">
                            <span>Try Whitepace for free</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} hidden sm:block small:block lg:hidden`} onClick={openMenu} ></i>

                    <div className={` ${isMenuOpen ? "block" : "hidden"} h-[25vh]  bg-mainbg w-[100%] absolute top-20 left-0 z-10 `} >
                        <div className="flex flex-col items-start justify-center gap-5 px-10" >
                            <div className="group cursor-pointer flex flex-row gap-2 items-center relative ">
                                <span>Product</span>
                                <i className="fa-solid fa-chevron-down"></i>
                                <div className="w-[20vw] bg-red-600 h-[10vh] absolute top-6 hidden group-hover:block" ></div>
                            </div>

                            <div className="cursor-pointer flex flex-row gap-2 items-center ">
                                <span>Solution</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>

                            <div className="cursor-pointer flex flex-row gap-2 items-center ">
                                <span>Resources</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>

                            <div className="cursor-pointer flex flex-row gap-2 items-center ">
                                <span>Pricing</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>

                            <div className="flex flex-row gap-5" >
                                <button className="bg-yellow-300 px-5 py-3 rounded-md text-black hover:scale-105  duration-300 ease-in-out ">Login</button>
                                <a href="#" className="bg-[#4F9CF9] px-5 py-3 flex flex-row gap-2 items-center rounded-md w-auto hover:scale-105  duration-300 ease-in-out">
                                    <span>Try Whitepace for free</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}
