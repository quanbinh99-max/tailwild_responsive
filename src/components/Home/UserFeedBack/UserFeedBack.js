import React from 'react';

function UserFeedBack(props) {
    return (
        <div className="absolute left-0 right-0 top-[2000px] bg-[#ECE7FB] h-[500px] sm:top-[2898.4px] sm:h-[802.03px] sm-w[360px]">
            <div className="flex flex-row justify-center items-center p-0 absolute w-[831px] h-[400px] left-[224.5px] top-[50px] sm:w-[256px] sm:h-[747.53px] sm:top-[27px] sm:left-[47.5px] sm:flex-col">
                <div className='mr-[60px] sm:w-[259.45px] sm:h-[294px]  sm:mb-[60px] sm:top-0 sm:left-0 '>
                    <img className="w-[353px] h-[400px] left-0 top-0 sm:w-[259.45px] sm:h-[294px] sm:absolute" src='https://images.squarespace-cdn.com/content/v1/5978c1bdf14aa1ed176fed90/1611942598282-0PRGZ9IXDJ0WBWYKLGDT/dylan+shaw+2.jpg' />
                </div>
                <div className="flex flex-col w-[418px] h-[297px] sm:w-[265px] sm:h-[393.53px]  ">
                    <div className="flex flex-col mb-[40px]">
                        <div className='mb-[20px]'>
                            <img className='w-[61.84px] h-[45.53px]' src='https://banner2.cleanpng.com/20190404/uof/kisspng-quotation-mark-computer-icons-scalable-vector-grap-double-quotation-marks-left-svg-png-icon-free-down-5ca628d8c86601.8091224015543933048208.jpg' />
                        </div>
                        <div className = 'w-[418px] h-[160px] leading-8 text-[18px] font-[600] text-[#2D2D2D] sm:font-[600] sm:text-[18px] sm:leading-[32px] sm:w-[256px] sm:h-[256px]'>   We love using 'PETWORLD' products. 
                                Environmentally friendly and sustainable. 
                                We have the sustainable dog bowls and 
                                regularly use the mint scented poo bags 
                                which were all such great value for money.
                        </div>
                    </div>
                    <div className='w-[105px] h-[32px] font-[400] text-[#2D2D2D] leading-[32px] text-[18px] opacity-50'>Dylan Shaw</div>
                </div>
            </div>
        </div>
    );
}

export default UserFeedBack;