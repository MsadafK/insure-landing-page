import { useState } from "react"

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="p-4 lg:p-8">
      <div className="flex justify-between items-center relative ">
        <img src="./logo.svg" alt="logo image" />
        <img className="lg:hidden" src="./icon-hamburger.svg"
          onClick={() => setToggle(!toggle)} 
        alt="hamburger-icon" />
        <img className={`${toggle ? 'block' : 'hidden'} absolute top-0 right-0 z-11 lg:hidden`} 
        onClick={() => setToggle(!toggle)}
        src="./icon-close.svg" alt="close-icon" />
        {/* mobile navbar */}
        <ul className="lg:hidden flex flex-col items-center justify-center bg-blue-900 gap-8 text-xs text-gray-400 absolute top-0 left-0 w-full h-screen z-10 transform translate-x-full transition-transform duration-300 ease-in-out overflow-hidden" style={{transform: toggle ? "translateX(-100%)" : "translateX(100%)"}}>
          <li>
            <a href="">HOW WE WORK</a>
          </li>
          <li>
            <a href="">BLOG</a>
          </li>
          <li>
            <a href="">ACCOUNT</a>
          </li>
          <li className="border-2 px-4 py-2 text-black">
            <a href="">VIEW PLANS</a>
          </li>
        </ul>
        {/* desktop navbar */}
        <ul className="hidden lg:flex items-center gap-8 text-xs text-gray-400">
          <li>
            <a href="">HOW WE WORK</a>
          </li>
          <li>
            <a href="">BLOG</a>
          </li>
          <li>
            <a href="">ACCOUNT</a>
          </li>
          <li className="border-2 px-4 py-2 text-black">
            <a href="">VIEW PLANS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}