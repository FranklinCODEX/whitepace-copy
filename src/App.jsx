import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import heroImg from "./assets/hero-image.png"
import vector from "./assets/Vector.png"
import circleImg from "./assets/circule-hero-img.jpg"
import apple from "./assets/Apple.png"
import microsoft from "./assets/Microsoft.png" 
import slack from "./assets/Slack.png" 
import google from "./assets/Google.png" 
import dataImg from "./assets/data.png"
import appsImg from "./assets/Apps.png"
import quoteImg from "./assets/Quote.png"
import quote from "./assets/Quote blanc.png"
import avatar1 from "./assets/Avater.png"
import avatar2 from "./assets/Avate2r.png"
import avatar3 from "./assets/Avate3r.png"


function App() {
  return (
    < >
      <Navbar />

       <section className="bg-mainbg min-h-[80vh] py-3 text-white bg-contain bg-[url('./assets/Element.png')] bg-no-repeat  ">
        <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-center container mx-auto lg:gap-3 sm:gap-10 small:gap-14 my-5 p-3">
            <div className="flex flex-col justify-center lg:items-start sm:items-center small:items-center lg:gap-14 sm:gap-14 small:gap-14 relative">
                <h1 className="text-[4rem] font-bold sm:text-center small:text-center lg:text-start">Get More Done with whitepace</h1>
                <p className="text-lg sm:text-center small:text-center lg:text-start ">Project management software that enables your teams to collaborate, plan, analyze and
                    manage everyday tasks</p>
                <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md hover:scale-105  duration-300 ease-in-out ">
                    <span>Try Whitepace for free</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div>
                <img src={heroImg} className="md:w-[60vw] md:h-[60vh]  lg:w-[60vw] lg:h-[77vh] sm:w-auto small:w-auto sm:h-[50vh] small:h-[50vh] " alt=""/>
            </div>
        </div>
      </section>

      <section className="flex flex-col gap-28 my-32 ">
        <div className="mx-auto gap-5 flex sm:flex-col small:flex-col lg:flex-row items-center container justify-center ">
            <div className=" flex flex-col justify-center sm:items-center small:items-center lg:items-start gap-16 p-7">
              <div className="relative" >
                  <h1 className="text-7xl font-bold sm:text-center small:text-center lg:text-start ">Project Management</h1>
                  <img className="absolute -bottom-2 bg-no-repeat -z-[999] " src={vector}alt="Vector" />
              </div>
                <p className="text-lg sm:text-center small:text-center lg:text-start">
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly
                    from the app. Take photos with the mobile app and save them to a note.
                </p>
                <a href="#" className="bg-[#4F9CF9] hover:scale-105  duration-300 ease-in-out px-7 py-3 flex flex-row gap-2 items-center rounded-md text-white ">
                    <span>Get Started</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="lg:block small:flex small:items-center small:justify-center" >
                <img src={heroImg} className=" lg:w-[88vw] lg:h-[75vh] sm:w-auto small:w-[90%] sm:h-[50vh] small:h-[50vh] " alt=""/>
            </div>
        </div>

        <div className="w-full mx-auto gap-5 flex container sm:flex-col-reverse small:flex-col-reverse lg:flex-row items-center justify-center ">
            <div className="lg:block small:flex small:items-center small:justify-center">
                <img src={circleImg} className=" lg:w-[88vw] sm:w-[90%] small:w-[70%] " alt=""/>
            </div>
            <div className=" flex flex-col sm:items-center small:items-center lg:items-start justify-center items-start gap-16 p-7">
                <h1 className="text-7xl font-bold sm:text-center small:text-center lg:text-start relative">
                    Work together
                    <img className="absolute -bottom-3 bg-no-repeat -z-[999] " src={vector}alt="Vector" />
                </h1>
                <p className="text-lg sm:text-center small:text-center lg:text-start">
                    With whitepace, share your notes with your colleagues and collaborate on them.
                    You can also publish a note to the internet and share the URL with others.
                </p>
                <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md text-white hover:scale-105  duration-300 ease-in-out ">
                    <span>Try it now</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
      </section>

      <section className="bg-mainbg p-10 text-white my-10">
        <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-center w-[88vw] mx-auto gap-3 py-7">
            <div className="flex flex-col justify-center lg:items-start sm:items-center small:items-center lg:gap-14 sm:gap-14 small:gap-14 gap-16">
                <h1 className="text-8xl font-bold sm:text-center small:text-center lg:text-start">
                    Use as {" "}
                    <span className="bg-[url('./assets/Vector.png')] bg-no-repeat bg-bottom" >
                        Extension
                    </span>
                </h1>
                <p className="text-lg sm:text-center small:text-center lg:text-start ">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take
                    screenshots as notes.
                </p>
                <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md hover:scale-105  duration-300 ease-in-out ">
                    <span>Let&apos;s Go</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div>
                <img src={heroImg} className="lg:w-[60vw] lg:h-[75vh] sm:w-auto sm:h-[50vh] small:w-auto small:h-[50vh] " alt="hero image"/>
            </div>
        </div>
    </section>

    <section className="p-10 my-10 ">
        <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-center w-[88vw] mx-auto gap-16 p-3">
            <div>
                <img src={heroImg} className=" w-[100vw] h-[75vh] " alt="" />
            </div>
            <div className="flex flex-col justify-center lg:items-start sm:items-center small:items-center lg:gap-14 sm:gap-14 small:gap-14 gap-16">
                <h1 className="text-7xl font-bold sm:text-center small:text-center lg:text-start relative">
                    Customise it to your needs
                  <img className="absolute -bottom-2 bg-no-repeat -z-[999] " src={vector}alt="Vector" />

                </h1>
                <p className="text-lg sm:text-center small:text-center lg:text-start">
                    Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or
                    create your own scripts and plugins using the Extension API.
                </p>
                <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md text-white hover:scale-105  duration-300 ease-in-out">
                    <span>Let&apos;s Go</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>

      <section className="p-10 my-10">
        <div className="flex flex-col items-center justify-center w-[88vw] mx-auto gap-14 py-7">
            <div className="flex flex-col items-center justify-center gap-5 text-center">
                <h1 className="text-7xl font-bold sm:text-center small:text-center lg:text-start">
                    Choose {" "}
                    <span className="hidden lg:block small:hidden sm:hidden bg-[url('./assets/Vector.png')] bg-no-repeat bg-bottom bg-contain " >Your Plan</span>
                    <span className="hidden sm:block small:block md:hidden" >Your <span className="bg-[url('./assets/Vector.png')] bg-no-repeat bg-bottom bg-contain" >Plan</span> </span> 
                </h1>
                <p className="text-lg lg:w-[88%] small:w-[10] sm:text-center small:text-center lg:text-start">
                    Whether you want to get organized, keep your personal life on track, or boost workplace
                    productivity, Evernote has the right plan for you.
                </p>
            </div>

            <div className="grid md:grid-cols-3 items-center gap-5 w-full">
                <div className="p-10 border-solid border-2 border-yellow-200 flex flex-col items-start rounded-lg gap-5 ">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-base font-extrabold">Free</h1>
                        <span className="text-3xl font-bold">$0</span>
                        <p className="text-base">Capture ideas and find them quickly</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl"></i>
                            Sync unlimited devices
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            10 GB monthly uploads
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            200 MB max. note size
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            Customize Home dashboard and access extra widgets
                        </div>
                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            Connect primary Google Calendar account
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            Add due dates, reminders, and notifications to your tasks
                        </div>
                    </div>
                    <button className="p-3 px-7 rounded-md border-solid border-2 border-yellow-200">Get Started</button>
                </div>
                <div
                    className=" bg-mainbg text-white p-10 h-[100vh] self-stretch flex flex-col items-start rounded-lg gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-base font-extrabold">Personnal</h1>
                        <span className="text-3xl font-bold text-yellow-300">$11.99</span>
                        <p className="text-base">Capture ideas and find them quickly</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl text-yellow-300"></i>
                            Sync unlimited devices
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl text-yellow-300"></i>
                            10 GB monthly uploads
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl text-yellow-300"></i>
                            200 MB max. note size
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl text-yellow-300"></i>
                            Customize Home dashboard and access extra widgets
                        </div>
                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl text-yellow-300"></i>
                            Connect primary Google Calendar account
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl text-yellow-300"></i>
                            Add due dates, reminders, and notifications to your tasks
                        </div>
                    </div>
                    <button className="py-3 px-8 rounded-md bg-[#4F9CF9] text-white mt-5 hover:scale-105  duration-300 ease-in-out">Get Started</button>
                </div>
                <div className="border-solid border-2 border-yellow-200 flex flex-col items-start rounded-lg gap-5 p-10">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-base font-extrabold">Organazation</h1>
                        <span className="text-3xl font-bold">$49.99</span>
                        <p className="text-base">Capture ideas and find them quickly</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl"></i>
                            Sync unlimited devices
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            10 GB monthly uploads
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            200 MB max. note size
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            Customize Home dashboard and access extra widgets
                        </div>
                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            Connect primary Google Calendar account
                        </div>

                        <div className="flex flex-row items-center gap-3 text-base">
                            <i className="fa-regular fa-circle-check text-xl "></i>
                            Add due dates, reminders, and notifications to your tasks
                        </div>
                    </div>
                    <button className="p-3 px-7 rounded-md border-solid border-2 border-yellow-200">Get Started</button>
                </div>
            </div>
        </div>
      </section>

     <section className="p-10 bg-mainbg text-white bg-contain my-20 bg-[url('./assets/BACKGROUND.png')] bg-no-repeat">
        <div className="flex flex-col items-center justify-center mx-auto gap-16 py-10">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-7xl sm:text-center small:text-center lg:text-center">Your work, everywhere you are</h1>
                <p className="text-base sm:text-center small:text-center lg:text-center">
                    Access your notes from your computer, phone or tablet by synchronising
                    with various services, including whitepace, Dropbox and OneDrive.
                    The app is available on Windows, macOS, Linux, Android and iOS.
                    A terminal app is also available!
                </p>
            </div>
            <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md text-white hover:scale-105  duration-300 ease-in-out ">
                <span>Try Taskey</span>
                <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    </section>

    <section className=" p-10">
        <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-center mx-auto gap-10 p-3 ">
            <div className="flex flex-col sm:items-center small:items-center lg:items-start gap-16 ">
                <h1 className="text-7xl font-bold lg:text-start sm:text-center small:text-center">100% <span className="bg-[url('./assets/Vector.png')] bg-no-repeat bg-bottom bg-contain" >your data</span> </h1>
                <p className="text-lg lg:text-start sm:text-center small:text-center">
                    The app is open source and your notes are saved to an open format,
                    so you&apos;ll always have access to them. Uses End-To-End Encryption
                    (E2EE) to secure your notes and ensure no-one but yourself can access them.
                </p>
                <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md text-white hover:scale-105  duration-300 ease-in-out ">
                    <span>Read more</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div>
                <img src={dataImg} className=" w-[88vw] h-[65vh]" alt="data" />
            </div>
        </div>
    </section>

    <section className=" p-10 my-14 ">
      <div className="flex lg:flex-row items-center justify-center w-[88vw] mx-auto gap-10 p-3 ">
      <div className="flex flex-col justify-center items-center gap-16 ">
                <h1 className="text-7xl font-bold lg:text-start small:text-center sm:text-center">Our <span className="bg-[url('./assets/Vector.png')] bg-no-repeat bg-bottom bg-contain" >sponsors</span></h1>
                <div className="flex lg:grid lg:grid-cols-4 small:grid small:grid-cols-2 sm:grid sm:grid-cols-2 justify-items-center items-center justify-center gap-20">
                    <img src={apple} alt="Apple"/>
                    <img src={microsoft} alt="Microsoft"/>
                    <img src={slack} alt="Slack"/>
                    <img src={google} alt="Google"/>
                </div>
            </div>
      </div>
    </section>

     <section className="p-10 bg-mainbg text-white">
        <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-center w-[88vw] mx-auto gap-10 sm:gap-16 small:gap-16 p-3">
            <img src={appsImg} alt="" />
            <div className="flex flex-col sm:items-center small:items-center sm:gap-16 small:gap-16 lg:items-start justify-center gap-14 ">
                <h1 className="text-7xl font-bold">Work with Your Favorite Apps Using whitepace</h1>
                <p className="text-base">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with
                    Zapier to have all the tools you need for your project success.</p>
                <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md text-white hover:scale-105  duration-300 ease-in-out ">
                    <span>Read more</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>

    <section className="p-10">
        <div className="flex flex-col items-center justify-center w-[88vw] mx-auto gap-10 p-3">
            <h1 className="text-6xl lg:text-center sm:text-center small:text-center ">What Our Clients Says</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 small:grid-cols-1 justify-items-center gap-5 w-full">

                <div className=" flex flex-col gap-5 w-full p-10 rounded-xl shadow-xl">
                    <div className="flex flex-col justify-start items-start gap-5">
                        <img src={quoteImg} className="w-[rem]" alt=""/>
                        <p className="text-base">
                            Whitepate is designed as a collaboration tool for businesses that is a
                            full project management solution.
                        </p>
                    </div>
                    <hr className="border-black mb-7 " />
                    <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-start gap-10 mb-5">
                        <img src={avatar1} className="w-16"  alt="" />
                        <div className="flex flex-col gap-3 " >
                            <h1 className="text-xl font-bold lg:text-start sm:text-center small:text-center " >Oberne Shaw, MCH </h1>
                            <span className="text-base lg:text-start sm:text-center small:text-center" >Head of Talent Acquisition, North America</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#4F9CF9] flex flex-col gap-5 w-full p-10 rounded-xl shadow-xl text-white">
                <div className="flex flex-col justify-start items-start gap-5">
                        <img src={quote} className="w-[rem]" alt=""/>
                        <p className="text-base">
                            Whitepate is designed as a collaboration tool for businesses that is a
                            full project management solution.
                        </p>
                    </div>
                    <hr className="border-white mb-7 " />
                    <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-start gap-10 mb-5">
                        <img src={avatar2} className="w-16"  alt="" />
                        <div className="flex flex-col gap-3 " >
                            <h1 className="text-xl font-bold lg:text-start sm:text-center small:text-center " >Oberne Shaw, MCH </h1>
                            <span className="text-base lg:text-start sm:text-center small:text-center" >Head of Talent Acquisition, North America</span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#4F9CF9] flex flex-col gap-5 w-full p-10 rounded-xl shadow-xl text-white">
                <div className="flex flex-col justify-start items-start gap-5">
                        <img src={quote} className="w-[rem]" alt=""/>
                        <p className="text-base">
                            Whitepate is designed as a collaboration tool for businesses that is a
                            full project management solution.
                        </p>
                    </div>
                    <hr className="border-white mb-7 " />
                    <div className="flex lg:flex-row sm:flex-col small:flex-col items-center justify-start gap-10 mb-5">
                        <img src={avatar3} className="w-16"  alt="" />
                        <div className="flex flex-col gap-3 " >
                            <h1 className="text-xl font-bold lg:text-start sm:text-center small:text-center " >Oberne Shaw, MCH </h1>
                            <span className="text-base lg:text-start sm:text-center small:text-center" >Head of Talent Acquisition, North America</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="p-10 bg-mainbg min-h-[70vh] text-white">
        <div className="flex flex-col items-center justify-center mx-auto w-[50%] gap-10 p-3 my-14">
            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-7xl text-center">Try Whitepace today</h1>
                <div>
                    <p className="text-base text-center">Get started for free.</p>
                    <p className="text-base text-center">Add your whole team as your needs grow.</p>
                </div>
                <a href="#" className="bg-[#4F9CF9] px-7 py-3 flex flex-row gap-2 items-center rounded-md hover:scale-105  duration-300 ease-in-out ">
                    <span>Try Taskey free</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
                <p>On a big team? Contact sales</p>

                <div className="flex flex-row gap-5 items-start justify-center">
                    <a href="#" className="flex flex-row gap-5 items-center justify-center">
                        <img src="./assets/App-icon.png" className="w-[2rem]" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>


      <Footer />
    </>
  );
}

export default App;
