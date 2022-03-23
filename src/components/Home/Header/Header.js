import React from 'react';

function Header(props) {
    return (
        <div className="absolute static h-[600px] left-0 right-0 top-[100px] bg-[#F7F5FD] flex-none order-1 grow m-0 sm:w[360px] sm:h-[946.4px] sm:top-[80px]" >
            <div className="absolute w-[1080px] h-[460px] left-[calc(50%_-_1080px/2)] top-[calc(50%_-_460px/2)] sm:w-[320px] sm:h-[786.4px] sm:left-[20px] top-[80px]">
                <div className="absolute w-[466px] h-[401.24px] left-0 top-0">
                    <div className="flex flex-col items-start p-0 absolute w-[466px] h-[401.24px] left-0 top-0 sm:w-[320px] sm:h-[786.4px]">
                        <div className="flex flex-col items-start p-0 static w-[466px] h-[401.24px] left-0 top-0 ">
                            <span className="w-[423.79px] left-0 top-0 bottom-[120.24px] font-semibold text-[60px] leading-[90px] sm:w-[310px] sm:h-[120px] sm:text-[50px] leading-[60px] sm:text-center">Pet Store & Beyond</span>
                            <span className='w-[466px] left-0 top-[206px] bottom-0 leading-[32px] text-[18px] font-[400] text-[#2D2D2D] opacity-50 mt-[30px] sm:w-[320px] sm:h-[126px] sm:absolute sm:top-[150px] sm:text-center'>This is a sampe landing page,created with Figma and Anima.No coding involved</span>
                        </div>

                        <div className="static w-[380px] left-0 top-[337.24px] bottom-0 flex-none order-none grow-0 my-[41px] mx-0 sm:absolute sm:left-[59px] sm:top-[316px]">
                            <button className=" left-[0%] right-[46.58%] top-[0%] bottom-[0%] bg-[#F8D57E] rounded-[10px] w-[203px] h-[64px] sm:w-[203px] sm:h-[64px]">
                                <span className=" w-[103px] h-[32px]">Get started</span>
                            </button>
                        </div>

                    </div>
                </div>
                <img className=' z-10 absolute w-[500px] right-0 top-0 bottom-0 rounded-[10px] bg-cover sm:top-[572px]' src='https://www.plannthat.com/wp-content/uploads/2021/09/karsten-winegeart-qy0BHykaq0E-unsplash.jpg'/>
            </div>
        </div>
    );
}

export default Header;