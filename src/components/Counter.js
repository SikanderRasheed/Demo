import React from 'react'
import CountUp from 'react-countup';

export default function Counter() {
    
  return (
    <div>
       <section className="bg-[url('./assets/img/po.png')] bg-no-repeat bg-center lg:mt-12 mt-5 bg-cover">
        <div className="max-w-7xl mx-auto xl:px-0 lg:px-4 px-3">
            <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="counter py-5 text-center">
                        <div className="number relative">
                            <h2 className="text-[55px] relative lg:text-[70px] font-[600] text-[#fff] counter-value after:absolute after:content-['+'] after:top-0">
                                <CountUp end={10} duration={3} />
                            </h2>
                        </div>
                        <div className="txt">
                            <h5 className="text-[18px] lg:text-[20px] text-[#22587A] font-[600]">
                                Years Experience
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="counter py-5 text-center">
                        <div className="number relative">
                            <h2 className="text-[55px] lg:text-[70px] font-[600] text-[#fff] counter-value after:absolute after:content-['+'] after:top-0">
                                <CountUp end={7000} duration={3} />
                            </h2>
                        </div>
                        <div className="txt">
                            <h5 className="text-[18px] lg:text-[20px] text-[#22587A] font-[600]">
                                Happy Clients
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="counter py-5 text-center">
                        <div className="number relative">
                            <h2 className="text-[55px] lg:text-[70px] font-[600] text-[#fff] counter-value after:absolute after:content-['+'] after:top-0">
                                <CountUp end={1500} duration={3} />
                            </h2>
                        </div>
                        <div className="txt">
                            <h5 className="text-[18px] lg:text-[20px] text-[#22587A] font-[600]">
                                POS Installs
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <div className="counter py-5 text-center">
                        <div className="number relative">
                            <h2 className="text-[55px] lg:text-[70px] font-[600] text-[#fff] counter-value after:absolute after:content-['+'] after:top-0">
                                <CountUp end={150} duration={3} />
                            </h2>
                        </div>
                        <div className="txt">
                            <h5 className="text-[18px] lg:text-[20px] text-[#22587A] font-[600]">
                                Bank Partner
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
