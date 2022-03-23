import React from 'react';
import Dog from '../../../public/img/Home/dog2.png'

function CTA(props) {
    return (
        <div className='absolute h-[498px] left-0 right-0 top-[2500px] bg-[#FCFAF5] sm:top-[3700.43px] sm:h-[802.03px] sm:w-[360px]'>
            <div className='absolute top-[60px] right-[160px] w-[960px] h-[378px] flex sm:w-[320px] sm:h-[653.55px] sm:top-[74px] sm:left-[20px] sm:flex-col'>
                <div className='flex flex-col '>
                    <span className='font-[600] text-[80px] leading-[90px] text-[#2D2D2D] items-center mb-[30px] sm:font-[600] sm:text-[50px] sm:leading-[60px] sm:text-center '>Let’s talk, woof! </span>
                    <span className='font-[400] text-[18px] leading-[32px] opacity-[0.4] mb-[40px] w-[385px] h-[64px] sm:font-[400] sm:text-[18px] sm:leading-[32px] sm:text-center sm:w-[320px] sm:h-[96px]'>You can ask us questions about your pet, and we will be happy to answer you!</span>
                    <button className='w-[203px] h-[64px] bg-[#F8D57E] rounded-[10px] hover:bg-[#DFBF70] sm:m-auto sm:mb-[61.02px]'>Contact us</button>
                </div>
                <div className='py-[9px]'>
                    <img className='w-[475px] h-[360px] w-[320px] h-[242.53px]' src={Dog} />
                </div>
            </div>
        </div>
    );
}

export default CTA;