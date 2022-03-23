import React from 'react';
import Nestle from '../../../public/img/Home/Nestle.png'
import Apple from '../../../public/img/Home/path4.png'
import Google from '../../../public/img/Home/Google.png'
import Beco from '../../../public/img/Home/Beco.png'
import Amazon from '../../../public/img/Home/Amazon.png'
import Walmart from '../../../public/img/Home/Walmart.png'
import DHL from '../../../public/img/Home/DHL.png'
import GoodHousekeeping from '../../../public/img/Home/GoodHousekeeping.png'
import Petco from '../../../public/img/Home/Petco.png'
import Aol from '../../../public/img/Home/Aol.png'


function Logos(props) {
    return (
        <div className="absolute h-[400px] left-0 right-0 top-[1300.24px] bg-[#FFFFFF] sm:right-0 sm:left-0 sm:h-[215px] sm:top-[982px]">
            <div className="absolute w-[935.09px] h-[145px] top-[127px] left-[172px] flex flex-col justify-between sm:w-[320.92px] sm:h-[130.24px] sm:top-[41.92px] sm:left-[19px] sm:flex-row ">
                <div className='flex justify-between sm:hidden'>
                    <img className="w-[133.35px] h-[35px]  " src={Nestle}/>
                    <img className="w-[29.48px] h-[35px] " src={Apple}/>
                    <img className="w-[60.9px] h-[40px] " src={Beco}/>
                    <img className="w-[115.35px] h-[35px]" src={Amazon}/>
                    <img className="w-[106px] h-[35px] " src={Google}/>
                    <img className="w-[140.35px] h-[35px] " src={Walmart}/>
                </div>
                <div className='flex justify-between mx-[86px] sm:hidden'>
                    <img className='w-[88.49px] h-[35px]' src={Aol}/>
                    <img className='w-[100.35px] h-[35px]' src={Petco}/>
                    <img className='w-[166.64px] h-[35px]' src={GoodHousekeeping} />
                    <img className='w-[197.98px] h-[24px]' src={DHL}/>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:justify-between">
                    <div className="hidden sm:flex sm:justify-between">
                        <img className="w-[83.43px] h-[21.9px]  " src={Nestle}/>
                        <img className="w-[18.44px] h-[21.9px] " src={Apple}/>
                        <img className="w-[37.59px] h-[25.02px] " src={Beco}/>
                        <img className="w-[72.31px] h-[21.9px]" src={Amazon}/>
                    </div>
                    <div className="hidden sm:flex sm:justify-between mx-[32px]">
                        <img className="w-[87.75px] h-[21.9px] " src={Google}/>
                        <img className="w-[53.84px] h-[21.3px] " src={Walmart}/>
                        <img className='w-[88.49px] h-[35px]' src={Aol}/>
                    </div>
                    <div className='hidden sm:flex sm:justify-between'>    
                        <img className='w-[61.06px] h-[21.3px]' src={Petco}/>
                        <img className='w-[101.4px] h-[21.3px]' src={GoodHousekeeping} />
                        <img className='w-[120.47px] h-[17.04px]' src={DHL}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logos;