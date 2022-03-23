import React from 'react';
import Quoteicon from '../../../public/img/Home/Quoteicon.png'

function UserFeedback(props) {
    return (
        <div className="absolute h-[499.53px] left-0 right-0 top-[2428.24px] bg-[#E5F4F2] sm:h-[553.53px] sm:right-0 sm:left-0 sm:top-[2693px] bg-[#E5F4F2]">
            <div className="absolute w-[662px] h-[233.53px] left-[309px] top-[133px] flex flex-col justify-between text-center sm:w-[281px] sm:h-[393.53px] sm:top-[80px] sm:left-[39.5px]">
                <img className='w-[61.84px] h-[45.53px] mx-auto' src={Quoteicon} />
                <span className='font-[600] text-[18px] leading-[32px]'>We love using 'PETWORLD' products. Environmentally friendly and sustainable. We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.</span>
                <span className='font-[400] text-[18px] leading-[32px] opacity-[0.5]' >Dylan Shaw</span>
            </div>
        </div>
    );
}

export default UserFeedback;