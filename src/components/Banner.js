import React from 'react'
import Button from './Button'

export default function Banner() {
  return (
    <>
     <section className="lg:mt-0 mt-0 xl:pb-20 md:pb-10 2xl:pb-0 relative overflow-hidden">
          <div className="lg:max-w-full max-w-7xl mx-auto pb-5 md:py-0">
            <div className="grid grid-cols-12 items-center">
                <div className="xl:col-span-2 xl:block hidden"></div>
                <div
                    className="xl:col-span-5 lg:col-span-6 md:col-span-6 col-span-12 relative z-[0] bg-[#ECFDEE] sm:bg-transparent">
                    <div className="2xl:px-0 lg:px-4 px-3 txt pt-5">
                    <h1 className="text-[#22587A] lg:text-[45px] text-[30px] font-[600] leading-[1.2] 2xl:w-9/12 xl:w-10/12">
                            Run Your Business with 
                            <span className="2xl:inline-block relative">
                                <span className="h-[6px] bg-[#3CA2A6] absolute left-0 bottom-[-6px] z-[9] lg:w-[30%] xl:block"></span>Ease &amp; Efficiency</span>
                        </h1>
                        <p className="text-[#707070] lg:text-[24px] md:text-[18px] font-[400] 2xl:w-7/12 xl:w-9/12 lg:w-9/12 lg:pt-10 pt-6 leading-[1.3]">
                            Do you wish to increase productivity and profits of your retail business? Swyft POS offers a number of integrated payment solutions that help you streamline sales + processing both online and in-store.
                        </p>
                    </div>
                 <div className='mt-6 lg:mt-10'>
                    <Button>Book A Demo</Button>
                 </div>
                </div>
                <div className="xl:col-span-5 lg:col-span-6 md:col-span-6 col-span-12 relative">
                    <div className="lg:block hidden">
                        <img src="./assets/img/teli-pjone.png" height="396" width="371" alt=""
                            className="absolute bottom-0 left-0 2xl:w-6/12 2xl:left-[-300px] xl:left-[-220px] lg:left-[-200px] lg:w-6/12 lg:bottom-[20px]" />
                    </div>
                    <img src="./assets/img/swyftpos-ban.png" alt="" className="w-full" width="604" height="513" />
                </div>
            </div>
          </div>
    </section>
    </>
  )
}
