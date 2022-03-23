import React from 'react';


function TopBar(props) {
    return (
        <div className="absolute h-[100px] top-0 right-0 left-0 flex-none order-none grow-0 m-0 sm:absolute sm:w-[360px] sm:h-[80px]">
            <div className="flex flex-row items-center p-0 absolute w-[154px] h-[35px] left-[100px] top-[32.5px] sm:w-[154px] sm:h-[35px] sm:top-[22.5px] sm:left-[20px]">
                <img className='static left-[0%] right-[77%] top-0 bottom-0 flex-none order-none grow-0 my-[10px] w-[35px] h-[35px]' src='https://images-platform.99static.com//N4VUoRJLktkazbY_0VENbLXlRyI=/13x0:1589x1576/fit-in/500x500/99designs-contests-attachments/98/98546/attachment_98546587' />
                <p className=''>PETWORLD</p>
            </div>
            <div className="absolute w-[251px] right-[100px] top-[23px] bottom-[23px] h-[54px] sm:hidden">
                <button className="absolute w-[68px] right-[183px] top-[10.5px] bottom-[10.5px] not-italic font-normal text-lg leading-8 text-[#2D2D2D]">Sign up</button>
                <button className='absolute w-[153px] h-[54px] right-0 top-[calc(50%_-_54px/2)] bg-[#3366FF] rounded-[10px] hover:bg-[#2A50C1]'>
                    <span className='absolute w-[53px] h-[32px] left-[calc(50%_-_53px/2)] top-[calc(50%_-_32px/2)] not-italic font-normal text-lg leading-8 text-[#FFFFFF] text-center '>Login</span>
                </button>
            </div>
        </div>
    );
}

export default TopBar;
