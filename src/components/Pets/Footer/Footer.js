import React from 'react';
import Logo from '../../../public/img/Home/Logo.png'
import CopyRight from '../../../public/img/Home/CopyRight.png'
import Facebook from '../../../public/img/Home/Facebook.png'
import Instagram from '../../../public/img/Home/Instagram.png'
import LinkedIn from '../../../public/img/Home/Linkedin.png'
import Twitter from '../../../public/img/Home/Twitter.png'


function Footer(props) {
    return (
        <div className='absolute h-[135px] left-0 right-0 top-[3429.77px] bg-white sm:h-[361px] sm:right-0 sm:left-0 sm:top-[3757.55px] bg-[#FFFFFF]'>
            <div className='absolute w-[1080px] h-[35px] top-[50px] left-[100px] flex justify-between sm:h-[281px] sm:w-[180px] sm:left-[40px] sm:top-40px sm:flex-col'>
                <div className='flex w-[154px] h-[35px]'>
                    <img className='w-[35px] h-[35px] mr-[11.66px]' src={Logo} />
                    <p className='font-[400] text-[18px] leading-[32px]'>PETWORLD</p>
                </div>
                <div className='flex w-[474px] h-[32px] justify-between sm:w-[169px] sm:h-[136px] sm:flex-col'>
                    <div className="flex">
                        <img className="w-[15px] height=[18px] mr-[10px]" src={CopyRight}/>
                        <span className="font-[400] text-[18px] leading-[32px] sm:font-[600] sm:text-[18px] sm:leading-[24px]">PETWORLD 2022</span> 
                    </div>
                    <span className='font-[400] text-[18px] leading-[32px] sm:font-[600] sm:text-[18px] sm:leading-[24px]'>Privacy policy</span> 
                    <span className='font-[400] text-[18px] leading-[32px] sm:font-[600] sm:text-[18px] sm:leading-[24px]'>Terms of use</span>
                </div>                
                <div className='flex w-[180px] h-[30px] justify-between'>
                    <img className='w-[30px] h-[30px]'  src={Facebook}/>
                    <img className='w-[30px] h-[30px]' src={LinkedIn}/>
                    <img className='w-[30px] h-[30px]' src={Instagram}/>
                    <img className='w-[30px] h-[30px]' src={Twitter}/>
                </div>

            </div>
        </div>
    );
}

export default Footer;