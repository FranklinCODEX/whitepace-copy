
import logo from "../assets/whitepace-logo.png";


export default function Footer() {
    return (
    <footer className="bg-mainbg p-5 text-white ">
        <div className="container flex flex-col items-start justify-start mx-auto  gap-10 p-3">
            <div className="flex small:items-center sm:items-center lg:flex-row small:flex-col sm:flex-col md:flex-row  gap-12  items-start justify-center">
                <div className="flex flex-col sm:items-center small:items-center lg:items-start justify-start gap-5">
                    <img
                    src={logo}
                    alt=""
                    />
                    <p className="lg:w-[20vw] small:w-[100%] sm:w-[100%] small:text-center sm:text-center text-base">
                    whitepace was created for the new ways we live and work. We make a
                    better workspace around the world
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="font-bold text-lg"> Product</p>
                    <p className="text-base">Overview</p>
                    <p className="text-base">Pricing</p>
                    <p className="text-base">Customer Stories </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="font-bold text-lg"> Resources</p>
                    <p className="text-base">Blog</p>
                    <p className="text-base">Guides & tutorials</p>
                    <p className="text-base">Help center </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="font-bold text-lg"> Product</p>
                    <p className="text-base">Overview</p>
                    <p className="text-base">Pricing</p>
                    <p className="text-base">Customer Stories </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-2">
                    <p className="font-bold text-lg"> Company</p>
                    <p className="text-base">About us </p>
                    <p className="text-base">Careers</p>
                    <p className="text-base">Media kit </p>
                </div>
                <div className="flex flex-col small:items-center sm:items-center lg:items-start justify-start gap-5">
                    <p className="font-bold text-2xl"> Try it today</p>
                    <p className="text-base">
                    Get started for free. Add your whole team as your needs grow.{" "}
                    </p>
                    <a
                    href="#"
                    className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md text-white hover:scale-105  duration-300 ease-in-out"
                    >
                    <span>Start today</span>
                    <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <hr className="border-[#2E4E73] w-full my-10" />
            <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-between gap-10 w-full p-1">
                <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-start gap-7 w-full">
                    <div className="flex flex-row items-center justify-start gap-2 ">
                    <i className="fa-solid fa-globe"></i>
                    <span>English</span>
                    <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="flex lg:flex-row sm:flex-col small:flex-col items-center gap-10">
                    <p>Terms & privacy</p>
                    <p>Security</p>
                    <p>Status</p>
                    <p>©2021 Whitepace LLC.</p>
                    </div>
                </div>
                <div className="flex gap-5 flex-row ">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    </footer>
    );
}
