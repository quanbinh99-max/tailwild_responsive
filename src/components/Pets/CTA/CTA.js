import React from 'react';

function CTA(props) {
    return (
        <div className="absolute h-[502px] right-0 left-0 top-[2927.77px] bg-[#FCFAF5] sm:h-[511.02px] sm:right-0 sm:left-0 sm:top-[3246.53px] bg-[#FCFAF5]">
            <div className="absolute h-[288px] w-[621px] left-[329.5px] top-[107px] flex flex-col justify-between sm:w-[320px]  sm:h-[351.02px] sm:top-[80px] sm:left-[20px]">
                <span className='leading-[90px] text-[80px] font-[600] text-center text-[#2D2D2D] sm:font-[600] text-[50px] leading-[60px]'>Let’s talk, woof! </span>
                <span className='leading-[32px] text-[18px] font-[400] text-[#2D2D2D] text-center opacity-[0.4] w-[466px] h-[90.24px] m-auto sm:w-[320px] sm:h-[96px] sm:font-[400] sm:text-[18px] sm:leading-[32px]'>You can ask us questions about your pet, and we will be happy to answer you!</span>
                <button className = 'w-[203px] h-[64px] m-auto rounded-[10px] bg-[#DFBF70] mb-0'>
                    <span className='text-[#2D2D2D]'>Contact Us</span>
                </button>
            </div>
        </div>
    );
}

export default CTA;