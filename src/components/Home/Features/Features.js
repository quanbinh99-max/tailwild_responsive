import React from 'react';
import Ball from '../../../public/img/Home/Ball.png'
import Grooming from '../../../public/img/Home/Grooming.png'
import Medical from '../../../public/img/Home/Medical.png'
import PetFood from '../../../public/img/Home/PetFood.png'


function Features(props) {
    return (
        <div className='absolute h-[500px] right-0 left-0 top-[1500px] bg-[#FFFFFF] sm:h-[1412px] sm-w[360px] sm:top-[1486.4px]'>
            <div className='absolute right-[90px] top-[116px] h-[268px] w-[1100px] flex justify-between sm:w-[230px] sm:h-[1252px] sm:top-[80px] sm:left-[65px] sm:flex-col'>
                <div className='h-[268px] w-[230px] flex flex-col items-center'>
                    <img className='w-[70px] h-[38px] mb-[57.4px] mt-[17.4px]' src={PetFood}/>
                    <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Best quality best food</h1>
                    <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>Super delicious food. Available in a range of delicious flavors.</p>
                </div>
                <div className='h-[268px] w-[230px] flex flex-col items-center'>
                    <img className='w-[48px] h-[48px] mt-[14.72px] mb-[50px]' src={Ball}/>
                    <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Toys & Accessories</h1>
                    <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</p>
                </div>
                <div className='h-[268px] w-[230px] flex flex-col items-center'>
                    <img className='w-[70px] h-[70px] mb-[34px] mt-[8px]' src={Medical}/>
                    <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Pets medical care</h1>
                    <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center' >You can get a wide range of great treatments for your dog.</p>
                </div>
                <div className='h-[268px] w-[230px] flex flex-col items-center '>
                    <img className='w-[85px] h-[85px] mb-[26px]' src={Grooming}/>
                    <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Full service grooming</h1>
                    <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>It's the right time to groom your dog with a variety of treatments.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;