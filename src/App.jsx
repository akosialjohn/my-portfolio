import { useState } from "react";
import ProfilePicture from "../src/assets/images/profile.JPG"
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaLinkedinIn, FaYoutubeSquare, FaSpotify } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({activeTab, setActiveTab}){
  const [menuOpen, setMenuOpen] = useState (false);
  const tabs = [
    {name: "Home", label:"Home"},
    {name: "About", label:"About Me"},
    {name: "Services", label:"Services Offered"},
    {name: "Projects", label:"Projects"},
  ];
  
  return(
    <nav className="fixed top-0 left-0 w-full bg-blue-950">
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu className="text-white w-8 h-8" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-8 text-lg font-medium w-full">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <button className={activeTab === tab.name ? "text-blue-500 font-extrabold underline underline-offset-4" : "text-white cursor-pointer hover:text-orange-500"}
              onClick={() => setActiveTab(tab.name)}>{tab.label}</button>
            </li>
          ))}
        </ul>
      </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col md:hidden space-y-2 px-4 pb-4">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <button className={activeTab === tab.name ? "text-blue-500 font-extrabold underline underline-offset-4" : "text-white cursor-pointer hover:text-orange-500"}
                  onClick={() => {setActiveTab(tab.name); setMenuOpen(false);}}>{tab.label}</button>
              </li>
            ))}
          </ul>
        )}
    </nav>
  )
}

function App(){
  const [activeTab, setActiveTab] = useState("Home");
  const Tabs = {
    Home: (
      <section className="flex flex-col md:flex-row min-h-screen justify-between items-start bg-orange-500 ">
      <div className="flex md:items-start p-10 min-h-screen">
          <h1 className="text-black text-[10rem] md:text-[20rem] font-extrabold">&#123;</h1>
            <div className="flex flex-col md:items-start pt-16">
            <h1 className="text-black text-4xl md:text-8xl font-extrabold leading-tight md:pt-14">
              Aljohn <br /> Bareo
            </h1>
            <p className="text-black text-xl pt-2 md:text-4xl font-extrabold leading-tight">WEB DEVELOPMENT SERVICES</p>
          </div>
      </div>

      <div className="md:justify-end">
        <img
          src={ProfilePicture}
          alt="My Profile"
          className="hidden md:block w-120 h-160 md:pt-6 md:w-120 md:h-180"
        />
        <h1 className="text-white text-center text-2xl font-sans bg-black px-18 py-25  -mt-60 md:mt-0 md:px-4 md:py-25">
          Your trusted web developer <br /> for your startup business.
        </h1>
      </div>
    </section>
    ),
    About: (
      <section className="md:flex md:h-screen">
        <div className="md:w-3/4 md:flex-col bg-black md:flex justify-center pt-8">
         <img
          src={ProfilePicture}
          alt="My Profile"
          className="md:pt-4 md:w-120 md:h-180 h-90 w-60"
        /></div>
        <div className="md:w-1/3 bg-orange-500">
          <h1 className="text-white justify-end text-4xl md:text-6xl pt-10 pl-10 md:pt-30 md:pl-20 font-bold font-sans">About <br /> Aljohn</h1>
          <p className="justify-center items-center text-xl md:text-2xl text-white p-10">Hi! I’m Aljohn Bareo, a passionate frontend developer specializing in creating modern, responsive, and user-friendly websites. 
            <br /> I enjoy turning ideas into interactive digital experiences using React, Tailwind CSS, and JavaScript. 
            <br /> My goal is to build websites that not only look great but also deliver seamless functionality for users.</p>
        </div>
      </section>
    ),
    Services: (
      <section className="w-full bg-orange-50">
            <div className="flex flex-col md:p-20 pt-20">
              <h1 className="text-6xl m-10 text-orange-500 font-mono font-extrabold text-center md:text-left ">Services <br /> Offered</h1>
          </div>

        <div className="w-full flex flex-col md:flex-row pt-20">
          <div className="w-full md:w-1/3 bg-orange-500">
            <div className="p-6 text-orange-50">
              <h3 className="text-xl font-semibold mb-2">Website Development</h3>
              <p className="text-orange-50">Build responsive, visually appealing websites using HTML, CSS, and JavaScript.</p>
              <div className="flex justify-center"><CgWebsite className="h-60 md:text-[15rem] text-9xl"/></div>
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-black">
            <div className="p-6 text-orange-50">
              <h3 className="text-xl font-semibold mb-2">Web Application Development</h3>
              <p className="text-orange-50">Develop interactive web apps with frameworks/libraries like React, Vue, Angular, or Svelte.</p>
              <div className="flex justify-center"><MdOutlineDeveloperMode className="h-60 md:text-[15rem] text-9xl"/></div>
              </div>
          </div>
          <div className="w-full md:w-1/3 bg-orange-500">
            <div className="p-6 text-orange-50">
              <h3 className="text-xl font-semibold mb-2">UI/UX Implementation</h3>
              <p className="text-orange-50">Transform UI/UX designs into functional web interfaces.</p>
              <div className="flex justify-center"><MdOutlineDashboardCustomize className="h-60 md:text-[15rem] text-9xl"/></div>
            </div>
          </div>
         </div>
      </section>
    ),
    Projects: (
      <section className="md:h-screen bg-orange-50 flex flex-col items-center p-20">
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
    )
  };
  return (
    <div>
      {/* Navbar */}
      <Navbar activeTab = {activeTab} setActiveTab = {setActiveTab} />

      {/* Sections */}
      <main className="pt-2">{Tabs[activeTab]}</main>
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