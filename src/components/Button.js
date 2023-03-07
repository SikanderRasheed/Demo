import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function Button({children, varinat}) {
  return (
    <div>
        <a href="#" className="relative p-1 border-[#7EED9E] border rounded-[12.21px] inline-block">
           <div className="relative bg-[#7EED9E] z-[0] rounded-[12.21px] lg:px-5 px-3 py-2 overflow-hidden">
                <div className="flex flex-row w-full items-center justify-between">
                    <div className="">
                        <span className="">
                            <img src="./assets/img/btnimage1.png"
                                className="absolute top-[0%] left-0 w-full z-[-1]" alt="" />
                        </span>
                        <span className="text-white lg:text-[19px] text-[15px] font-[500]">
                            {children}</span>
                    </div>
                    <span className="image ml-5">
                         <img src="./assets/img/btn-arrow.png" alt="" className="w-4"
                            width="11" height="10" />
                    </span>
                </div>
           </div>
        </a>
    </div>
  )
}
