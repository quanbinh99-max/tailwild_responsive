import React from 'react';

function Header(props) {
    return (
        <div className="absolute h-[600.24px] right-0 left-0 top-[100px] bg-[#F7F5FD] sm:right-0 sm:left-0 ">
            <div className="absolute h-[314.24px] w-[758px] left-[260px] top-[143px] flex flex-col justify-between sm:w-[320px] sm:h-[442px] sm:left-[20px] sm:top-[80px]">
                <span className='leading-[90px] text-[80px] font-[600] text-center text-[#2D2D2D]  sm:font-[600] sm:text-[50px] leading-[60px]'>Pet Store & Beyond</span>
                <span className='leading-[32px] text-[18px] font-[400] text-[#2D2D2D] text-center opacity-[0.4] w-[466px] h-[90.24px] m-auto  sm:font-[400] sm:text-[18px] leading-[32px] sm:w-[320px] sm:h-[126px]'>Fresh ingredients slowly baked into our super delicious food. Available in a range of delicious flavors, delivered to your door.</span>
                <button className = 'w-[203px] h-[64px] m-auto rounded-[10px] bg-[#DFBF70] mb-0 sm:mb-[29.34px]'>
                    <span className='text-[#2D2D2D]'>Get Started</span>
                </button>
                <div className='hidden sm:flex sm:mx-auto'>
                    <img className=' sm:w-[20px]  sm:h-[20px]  sm:mr-[11px]' src='https://media.istockphoto.com/vectors/play-button-icon-vector-id1012440302?k=20&m=1012440302&s=612x612&w=0&h=TEKWI78gh_uxnkIHUKiQUHYvcamS34llYi0o68OXWlw=' />
                    <span className=''>Watch Video</span>
                </div>
            </div>
        </div>
    );
}

export default Header;