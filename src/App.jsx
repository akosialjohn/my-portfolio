import { useState } from "react";
import ProfilePicture from "../src/assets/images/profile.JPG"
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaLinkedinIn, FaYoutubeSquare, FaSpotify } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function App(){
  const [activeTab, setActiveTab] = useState("Home");
  const Tabs = {
    Home: (
      <section className="flex justify-between items-start bg-orange-500 ">
      <div className="flex items-start gap-4 p-10">
          <h1 className="text-black text-[20rem] font-extrabold">&#123;</h1>
            <div className="flex flex-col">
            <h1 className="text-black text-8xl font-extrabold leading-tight pt-30">
              Aljohn <br /> Bareo
            </h1>
            <p className="text-black text-4xl font-extrabold leading-tight pt-6">WEB DEVELOPMENT SERVICES</p>
          </div>
      </div>

      <div className="flex flex-col justify-end">
        <img
          src={ProfilePicture}
          alt="My Profile"
          className="w-150 h-180 pt-6"
        />
        <h1 className="text-white text-center text-2xl font-sans bg-black px-4 py-25">
          Your trusted web developer <br /> for your startup business.
        </h1>
      </div>
    </section>
    ),
    About: (
      <section className="flex h-screen">
        <div className="w-3/4 bg-black">
         <img
          src={ProfilePicture}
          alt="My Profile"
          className="w-150 h-180 pt-6"
        /></div>
        <div className="w-1/3 bg-orange-500">
          <h1 className="text-white justify-end text-6xl pt-30 pl-20 font-bold font-sans">About <br /> Aljohn</h1>
          <p className="justify-center items-center text-2xl text-white p-20">Hi! I’m Aljohn Bareo, a passionate frontend developer specializing in creating modern, responsive, and user-friendly websites. 
            <br /> I enjoy turning ideas into interactive digital experiences using React, Tailwind CSS, and JavaScript. 
            <br /> My goal is to build websites that not only look great but also deliver seamless functionality for users.</p>
        </div>
      </section>
    ),
    Services: (
      <section className="max-h-1/2 w-full">
        <div className="h-screen bg-orange-50">
            <div className="flex flex-col p-20">
              <h1 className="text-6xl m-10 text-orange-500 font-mono font-extrabold text-left">Services <br /> Offered</h1>
          </div>
        </div>
        <div className="absolute w-full h-1/2 bottom-0 flex">
          <div className="w-1/3 bg-orange-500">
            <div className="p-6 text-orange-50">
              <h3 className="text-xl font-semibold mb-2">Website Development</h3>
              <p className="text-orange-50">Build responsive, visually appealing websites using HTML, CSS, and JavaScript.</p>
              <div className="flex justify-center"><CgWebsite className="h-60 text-[15rem]"/></div>
            </div>
          </div>
          <div className="w-1/3 bg-black">
            <div className="p-6 text-orange-50">
              <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
              <p className="text-orange-50">Develop interactive web apps with frameworks/libraries like React, Vue, Angular, or Svelte.</p>
              <div className="flex justify-center"><MdOutlineDeveloperMode className="h-60 text-[15rem]"/></div>
              </div>
          </div>
          <div className="w-1/3 bg-orange-500">
            <div className="p-6 text-orange-50">
              <h3 className="text-xl font-semibold mb-2">UI/UX Implementation</h3>
              <p className="text-orange-50">Transform UI/UX designs into functional web interfaces.</p>
              <div className="flex justify-center"><MdOutlineDashboardCustomize className="h-60 text-[15rem]"/></div>
            </div>
          </div>
         </div>
      </section>
    ),
    Projects: (
      <section className="h-screen bg-gray-50 flex flex-col items-center p-20">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Database Management System</h3>
            <p className="text-gray-600">A web app built with React & Tailwind.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Dog Skin Detection and Recognition System</h3>
            <p className="text-gray-600">UI/UX case study for portfolio site.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Web Design</h3>
            <p className="text-gray-600">Responsive design showcase with Tailwind.</p>
          </div>
        </div>
      </section>
    ),
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-blue-900 shadow z-50">
        <ul className="flex justify-center space-x-8 py-4 text-lg font-medium">
          <li>
            <button
              className={activeTab === "Home" ? "text-black font-extrabold" : "text-white cursor-pointer hover:text-orange-500"}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={activeTab === "About" ? "text-black font-extrabold" : "text-white cursor-pointer hover:text-orange-500"}
              onClick={() => setActiveTab("About")}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              className={activeTab === "Services" ? "text-black font-extrabold" : "text-white cursor-pointer hover:text-orange-500"}
              onClick={() => setActiveTab("Services")}
            >
              Services Offered
            </button>
          </li>
          <li>
            <button
              className={activeTab === "Projects" ? "text-black font-extrabold" : "text-white cursor-pointer hover:text-orange-500"}
              onClick={() => setActiveTab("Projects")}
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <main className="pt-5">{Tabs[activeTab]}</main>
      <footer className="bg-orange-50">
        <h2 className="text-orange-500 font-semibold text-center">KEEP IN TOUCH</h2>
        <div className="flex flex-row space-x-4 items-center justify-center">
          <div className="text-blue-800"><a href="https://web.facebook.com/jhon.bareo"><FaFacebook className="text-4xl cursor-pointer"/></a></div>
          <div className="text-blue-800"><a href="https://www.instagram.com/aljohnbareo/"><FaInstagramSquare className="text-4xl rounded-2xl cursor-pointer"/></a></div>
          <div className="text-blue-800"><a href="#"><FaSquareXTwitter className="text-4xl rounded-2xl cursor-pointer"/></a></div>
          <div className="text-blue-800"><a href="#"><FaLinkedinIn className="text-4xl rounded-2xl cursor-pointer"/></a></div>
          <div className="text-blue-800"><a href="#"><FaYoutubeSquare className="text-4xl rounded-2xl cursor-pointer"/></a></div>
          <div className="text-blue-800"><a href="#"><FaSpotify className="text-4xl rounded-2xl cursor-pointer"/></a></div>
        </div>
        <p className="text-sm flex items-center justify-center">&copy; 2025 Aljohn Bareo. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;