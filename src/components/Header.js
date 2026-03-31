import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Header = () => {

    const [hidden, setHidden] = useState(true);
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        if(darkMode){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[darkMode])
    const { cartCount } = useCart();



  return (
    <header>
        <nav className="bg-white border-b px-2 sm:px-2 border-default dark:bg-gray-800 dark:border-gray-600">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center gap-3">
                    <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-blue-400 rounded-lg blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300"/>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg" className="relative transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 animate-[fadeIn_0.6s_ease-out]">
                            <rect width="48" height="48" rx="0" fill="#3B82F6" className="transition-all duration-300 group-hover:fill-[#2563EB]"></rect>
                            <g className="animate-[slideIn_0.8s_ease-out]" >
                                <path d="M14 19.5C14 18.5 14.5 17 16.5 17C18 17 18.5 18 18.5 18.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-300 group-hover:stroke-[#FCD34D]"></path>
                                <path d="M14 20C14 19.5 14 18.5 16.5 18.5C18.5 18.5 18.5 19.5 18.5 20.5C18.5 21.5 18 22 16.5 22.5C15 23 14 23.5 14 25C14 26.5 14.5 27.5 16.5 27.5C18.5 27.5 18.5 26.5 18.5 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-300 group-hover:stroke-[#FCD34D]"></path>
                                <path d="M23 17V27.5L30 17V27.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:stroke-[#FCD34D]"></path>
                                <path d="M34 17V27.5M34 17H38C39 17 40 18 40 19C40 20 39 21 38 21H34M34 21H38.5C39.5 21 40.5 22 40.5 23.5C40.5 25 39.5 26 38.5 26H34" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:stroke-[#FCD34D]"></path>
                            </g>
                        </svg>
                        <div className="absolute inset-0 rounded-lg ring-2 ring-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/></div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300 hover:text-blue-600 hover:dark:text-blue-300">SNB Store</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300" >Premium Online Shopping</p>
                    </div>
                </div>
                <div className="flex items-center md:order-2">
                    <button onClick={() => setDarkMode(!darkMode)} id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 m-2">
                        { darkMode ? 
                           <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                        :   
                           <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        }
                    </button>
                    <Link to="/cart" className="relative">
                        <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-6 h-6">
                                <circle cx="8" cy="21" r="1"></circle>
                                <circle cx="19" cy="21" r="1"></circle>
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">{cartCount}</path>
                            </svg>
                        </button>
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
                    </Link>
                    <button onClick = {() => setHidden(!hidden)}data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </button>
                </div>
                <div className={` ${hidden? "hidden": ""} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <NavLink to="/" className="block py-2 px-3 text-blue-600 dark:textg- bg-brand rounded-sm md:bg-transparent md:text-blue-600 md:p-0 dark:text-gray-100 md:hover:dark:text-blue-600" aria-current="page">Home</NavLink>             
                        </li>
                        <li>
                            {/* <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent dark:text-gray-100 md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:bg-transparent">Cart</a>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
