import React from 'react';
import Ball from '../../../public/img/Home/Ball.png'
import Grooming from '../../../public/img/Home/Grooming.png'
import Medical from '../../../public/img/Home/Medical.png'
import PetFood from '../../../public/img/Home/PetFood.png'

function Features(props) {
    return (
        <div className='absolute h-[728px] right-0 left-0 top-[1700.24px] bg-[#FFFFFF] sm:right-0 sm:left-0 sm:top-[1197px] sm:h-[1496px]' >
            <div className='absolute flex flex-col justify-between h-[648px] w-[680px] top-[40px] left-[300px] sm:w-[320px] sm:h-[1336px] sm:top-[80px] sm:left-[20px]'>
                <div className='flex justify-between sm:hidden'>
                    <div className='h-[304px] w-[320px] flex flex-col justify-between bg-[#F7F7F7]'>
                        <img className='w-[70px] h-[70px]' src={PetFood}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Best quality best food</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>Super delicious food. Available in a range of delicious flavors.</p>
                    </div>
                    <div className='h-[304px] w-[320px] flex flex-col bg-[#F7F7F7] justify-between'>
                        <img className='w-[70px] h-[70px] ' src={Ball}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Toys & Accessories</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</p>
                    </div>
                </div>
                <div className='flex justify-between sm:hidden'>
                    <div className='h-[304px] w-[320px] flex flex-col bg-[#F7F7F7] justify-between'>
                        <img className='w-[70px] h-[70px] mb-[34px] mt-[8px]' src={Medical}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Pets medical care</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center' >You can get a wide range of great treatments for your dog.</p>
                    </div>
                    <div className='h-[304px] w-[320px] flex flex-col bg-[#F7F7F7] justify-between'>
                        <img className='w-[70px] h-[70px] mb-[26px]' src={Grooming}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Full service grooming</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>It's the right time to groom your dog with a variety of treatments.</p>
                    </div>
                </div>
                <div className='hidden sm:flex sm:flex-col '>
                    <div className='h-[304px] w-[320px] flex flex-col justify-between bg-[#F7F7F7] sm:mb-[40px]'>
                        <img className='w-[70px] h-[70px]' src={PetFood}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Best quality best food</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>Super delicious food. Available in a range of delicious flavors.</p>
                    </div>
                    <div className='h-[304px] w-[320px] flex flex-col bg-[#F7F7F7] justify-between sm:mb-[40px]'>
                        <img className='w-[70px] h-[70px] ' src={Ball}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Toys & Accessories</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</p>
                    </div>
                    <div className='h-[304px] w-[320px] flex flex-col bg-[#F7F7F7] justify-between sm:mb-[40px]'>
                        <img className='w-[70px] h-[70px] mb-[34px] mt-[8px]' src={Medical}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Pets medical care</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center' >You can get a wide range of great treatments for your dog.</p>
                    </div>
                    <div className='h-[304px] w-[320px] flex flex-col bg-[#F7F7F7] justify-between'>
                        <img className='w-[70px] h-[70px] mb-[26px]' src={Grooming}/>
                        <h1 className='mb-[15px] font-[600] text-[18px] leading-[32px] text-[#2D2D2D]'>Full service grooming</h1>
                        <p className='font-[400] text-[18px] leading-[32px] text-[#2D2D2D] text-center'>It's the right time to groom your dog with a variety of treatments.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;