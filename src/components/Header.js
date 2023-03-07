import React from 'react'
import Button from './Button'

export default function Header() {
  return (
    <>
     <header className="lg:py-3 bg-[#ECFDEE] md:shadow-2xl md:shadow-[#4AA529]/20">
          <nav className="">
            <div className="md:block hidden max-w-7xl mx-auto xl:px-0 lg:px-4 px-3 sm:py-3">
                <div className="">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-2 xl:col-span-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img loading="lazy" src="./assets/img/logo.png" height="46" width="196" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-span-10 xl:col-span-9">
                            <ul
                                className="flex flex-col sm:flex-row items-center justify-center gap-x-2 lg:gap-x-4 xl:gap-x-7">
                                <li className="">
                                    <a href="index.html" className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                        <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                            HOME
                                        </span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="about-us.html" className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                        <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                            ABOUT US</span>
                                    </a>
                                </li>
                                <li className="relative group">
                                    <div>
                                        <a href="services.html" className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                            <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                                SERVICES
                                            </span>
                                            <svg fill="currentColor" viewBox="0 0 20 20"
                                                className="inline w-4 h-4 mt-0 group-hover:rotate-180">
                                                <path fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div
                                        className="absolute left-0 z-40 hidden w-full pt-3 transition duration-150 ease-out group-hover:block group-hover:ease-in md:w-60 ">
                                        <a href="services.html" className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                        </a>
                                        <ul
                                            className="xl:px-2 py-2 bg-[#F6FEF6] drop-shadow-md shadow-[#151642] rounded-2xl relative z-50 ">
                                            <li>
                                                <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                    href="#">
                                                    Accounting Service
                                                </a>
                                            </li>
                                            <li>
                                                <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                    href="#">
                                                    POS Service
                                                </a>

                                            </li>
                                            <li className="relative group2">
                                                <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent text-[#22587A] hover:text-[#FFFFFF] focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                    href="#">
                                                    <span>
                                                        ATM Service
                                                    </span>
                                                    <svg fill="currentColor" viewBox="0 0 20 20"
                                                        className="inline w-5 h-5 mt-0 group2-hover-rotate float-right">
                                                        <path fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"></path>
                                                    </svg>
                                                </a>
                                                <div
                                                    className="absolute w-full md:w-60 top-0 left-[100%] invisible group2-hover:visible">
                                                    <ul
                                                        className="xl:px-2 py-2 bg-[#F6FEF6] drop-shadow-md shadow-[#151642] rounded-2xl relative z-50 ">
                                                        <li>
                                                            <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                href="#">
                                                                Desktop Terminal
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                href="#">
                                                                Wireless Terminal
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                href="#">
                                                                Ecommerce
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                href="#">
                                                                Restaurant
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                href="#">
                                                                Pay At The Table
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                href="#">
                                                                Mobile Payment
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li className="">
                                    <a href="features.html" className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                        <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                            FEATURES
                                        </span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="referrel-program.html" className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                        <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                            REFERRAL PROGRAM
                                        </span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="contact.html" className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                        <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                            CONTACT US
                                        </span>
                                    </a>
                                </li>
                                <li className="p-1 relative">
                                  <Button>Get Started</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden px-4 lg:px-0 py-4">
                <div className="block lg:hidden" x-data="{ open: false }">
                    <div className="grid items-center grid-cols-12 sm:gap-5 gap-3 place-self-center md:py-3 md:pt-0">
                        <div className="col-span-11">
                            <div className="md:col-span-3 col-span-12">
                                <div className="logo">
                                    <img className="inline w-6/12" src="./assets/img/logo.png" height="35" width="150"
                                        alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center justify-center">
                                    <button data-collapse-toggle="mobile-menu" type="button"
                                        className="navbtn inline-flex justify-center items-center ml-3 rounded-lg lg:hidden focus:outline-none focus:ring-0 focus:ring-blue-300"
                                        aria-controls="mobile-menu" aria-expanded="false">
                                        <svg fill="#22587A" viewBox="0 0 20 20" className="w-10 h-10 pr-3">
                                            <path className="minus block" fillRule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                                clipRule="evenodd"></path>
                                            <path className="plus hidden" fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div id="mobile-menu"
                                    className="flex-col hidden flex-grow pb-4 md:pb-0 p-5 absolute top-[7%] sm:top-[10%] left-0 bg-[#ECFDEE] drop-shadow-md w-full z-50 py-5 xl:px-2 mt-2">
                                    <ul className="flex flex-col gap-y-3">
                                        <li className="">
                                            <a href="index.html" className="text-[12px] lg:text-[13px] xl:text-[15px]">
                                                <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                                    HOME
                                                </span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="about-us.html" className="text-[12px] lg:text-[13px] xl:text-[15px]">
                                                <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                                    ABOUT US</span>
                                            </a>
                                        </li>
                                        <li className="relative group">
                                            <div>
                                                <a href="services.html"
                                                    className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                                    <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                                        SERVICES
                                                    </span>
                                                    <svg fill="currentColor" viewBox="0 0 20 20"
                                                        className="inline w-4 h-4 mt-0 group-hover:rotate-180">
                                                        <path fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div
                                                className="absolute left-0 z-40 hidden w-full pt-3 transition duration-150 ease-out group-hover:block group-hover:ease-in md:w-60 ">
                                                <a href="services.html"
                                                    className="text-[11px] lg:text-[13px] xl:text-[15px]">
                                                </a>
                                                <ul
                                                    className="px-2 py-2 bg-[#F6FEF6] drop-shadow-md shadow-[#151642] rounded-2xl relative z-50 ">
                                                    <li>
                                                        <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                            href="#">
                                                            Accounting Service
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                            href="#">
                                                            POS Service
                                                        </a>

                                                    </li>
                                                    <li className="relative group2">
                                                        <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent text-[#22587A] hover:text-[#FFFFFF] focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                            href="#">
                                                            <span>
                                                                ATM Service
                                                            </span>
                                                            <svg fill="currentColor" viewBox="0 0 20 20"
                                                                className="inline w-5 h-5 mt-0 group2-hover-rotate float-right">
                                                                <path fillRule="evenodd"
                                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"></path>
                                                            </svg>
                                                        </a>
                                                        <div
                                                            className="absolute w-full md:w-60 md:top-0 md:left-[100%] top-[105%] invisible group2-hover:visible">
                                                            <ul
                                                                className="px-2 py-2 bg-[#F6FEF6] drop-shadow-md shadow-[#151642] rounded-2xl relative z-50 ">
                                                                <li>
                                                                    <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                        href="#">
                                                                        Desktop Terminal
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                        href="#">
                                                                        Wireless Terminal
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                        href="#">
                                                                        Ecommerce
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                        href="#">
                                                                        Restaurant
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                        href="#">
                                                                        Pay At The Table
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="block md:md:px-4 py-2 my-2 text-[14px] bg-transparent  text-[#22587A] hover:text-[#FFFFFF]  focus:outline-none focus:shadow-outline hover:bg-[#4DE0B0] hover:rounded-[10px]"
                                                                        href="#">
                                                                        Mobile Payment
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li className="">
                                            <a href="features.html" className="text-[12px] lg:text-[13px] xl:text-[15px]">
                                                <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                                    FEATURES
                                                </span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="text-[12px] lg:text-[13px] xl:text-[15px]">
                                                <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                                    REFERRAL PROGRAM
                                                </span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" className="text-[12px] lg:text-[13px] xl:text-[15px]">
                                                <span className="text-black hover:text-[#57CC98] font-[500] uppercase">
                                                    CONTACT US
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-1 relative">
                                            <a href="#"
                                                className="relative p-2 border-[#92E3A9] border rounded-[12.21px] inline-block mt-0 lg:mb-0 mb-5">
                                                <div
                                                    className="relative bg-[#57CC98] z-[0] rounded-[12.21px] px-4 py-2 overflow-hidden">
                                                    <div className="flex flex-row w-full items-center justify-between">
                                                        <div className="">
                                                            <span className="">
                                                                <img src="./assets/img/btnimage2.png"
                                                                    className="absolute top-[0%] left-0 w-full z-[-1]"
                                                                    alt="" />
                                                            </span>
                                                            <span className="text-white text-[14px]">Get Started</span>
                                                        </div>
                                                        <span className="image w-4 ml-5">
                                                            <img src="./assets/img/btn-arrow.png" width="11"
                                                                height="10" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </nav>
    </header>   
    </>
  )
}
