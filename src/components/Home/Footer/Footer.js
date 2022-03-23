import React from 'react';

function Footer(props) {
    return (
        <div className="absolute h-[413px] right-0 left-0 top-[2998px] bg-[#FFFFFF] sm:top-[4502.45px] sm:h-[725px]">
            <div className="absolute w-[1119px] h-[273px] left-[70px] top-[80.5px] flex justify-between sm:h-[645px] sm:w-[320px] sm:top-[40px] sm:left-[20px] sm:flex-col sm:justify-start">
                <div className="">
                    <div className=" flex mb-[83px] sm:mb-[40px]">
                        <img className="w-[32.34px] h-[17.74px]  mr-[11.66px]" src="https://images-platform.99static.com//N4VUoRJLktkazbY_0VENbLXlRyI=/13x0:1589x1576/fit-in/500x500/99designs-contests-attachments/98/98546/attachment_98546587"/>
                        <span className="font-[700] text-[20px] leading-[20px] ">PETWORLD</span>
                    </div>
                    <div className=''>
                        <span className="font-[400] text-[18px] leading-[32px] text-[#2D2D2D] items-center ">Updates right to your Inbox</span>
                        <div className="mt-[12px]">
                            <input className='w-[320px] h-[54px] border-2 rounded-[10px] sm:mb-[20px]' placeholder="Email Address" /> 
                            <button className = ' w-[116px] h-[54px] bg-[#2A50C1] rounded-[10px] ml-[20px] sm:w-[320px] sm:ml-0 ' >
                                <span className="text-white font-[400] text-[18px] leading-[32px]">Send</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-[33px] sm:flex-col-reverse sm:absolute sm:top-[406px]">
                        <div className="flex ">
                            <img className="w-[15px] height=[18px]" src='https://w7.pngwing.com/pngs/269/442/png-transparent-copyright-symbol-law-author-logo-copyright-text-trademark-words-phrases.png'/>
                            <span className="font-[400] text-[18px] leading-[32px] sm:font-[600] sm:text-[18px] sm:leading-[24px]">PETWORLD 2022</span> 
                        </div>
                        <span className='font-[400] text-[18px] leading-[32px] sm:font-[600] sm:text-[18px] sm:leading-[24px]'>Privacy policy</span> 
                        <span className='font-[400] text-[18px] leading-[32px] sm:font-[600] sm:text-[18px] sm:leading-[24px]'>Terms of use</span> 
                    </div>
                </div>
                <div className='w-[417px] h-[273px] sm:mt-[40px]'>
                    <div className='flex justify-between content-between sm:flex-col'>
                        <div className='flex flex-col'>
                            <span className='sm:font-[600] sm:text-[18px] sm:leading-[24px]'>Our story</span>
                            <span className='sm:font-[600] sm:text-[18px] sm:leading-[24px]'>FQA</span>
                            <span className='sm:font-[600] sm:text-[18px] sm:leading-[24px]'>Contact</span>
                        </div>
                        <div className='flex flex-col sm:hidden'>
                            <span >Pet care</span>
                            <span>Treatments</span>
                            <span>Health</span>
                            <span>Hygiene </span>
                        </div>
                        <div className='flex flex-col sm:hidden'>
                            <span>Shop</span>
                            <span>Pet Food</span>
                            <span>Toys</span>
                            <span>Accessories</span>
                        </div> 
                    </div>
                    <div className='flex absolute bottom-0 right-0 w-[180px] h-[30px] justify-between sm:left-0'>
                        <img className='w-[30px] h-[30px]'  src='https://icon2.cleanpng.com/20180412/sge/kisspng-question-mark-ip-multimedia-subsystem-information-logo-facebook-5acfeb02079b46.3904295615235755540312.jpg'/>
                        <img className='w-[30px] h-[30px]' src='https://beautystreamslifestyle.com/wp-content/uploads/2020/04/crop-0-0-1084-1084-0-5391166-download-ig-logo-logo-ig-dog-crate-cover-png-icons-social-ig-logo-png-1084_1084_preview.png'/>
                        <img className='w-[30px] h-[30px]' src='https://w7.pngwing.com/pngs/593/197/png-transparent-in-signage-computer-icons-linkedin-desktop-social-media-linked-in-text-trademark-logo-thumbnail.png'/>
                        <img className='w-[30px] h-[30px]' src='https://beautystreamslifestyle.com/wp-content/uploads/2020/04/crop-0-0-1084-1084-0-5391166-download-ig-logo-logo-ig-dog-crate-cover-png-icons-social-ig-logo-png-1084_1084_preview.png'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;