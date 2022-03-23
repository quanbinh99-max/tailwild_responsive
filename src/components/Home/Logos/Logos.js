import React from 'react';
import Nestle from '../../../public/img/Home/Nestle.png'
import Apple from '../../../public/img/Home/path4.png'
import Google from '../../../public/img/Home/Google.png'
import Beco from '../../../public/img/Home/Beco.png'
import Amazon from '../../../public/img/Home/Amazon.png'
import Walmart from '../../../public/img/Home/Walmart.png'


function Logos(props) {
    return (
        <div className="absolute top-[1300px] left-0 right-0 h-[200px] bg-white sm:w-[360px] sm:h-[160px] sm:top-[1326.4px]">
            <div className="absolute w-[935.09px] h-[40px] left-[172px] top-[80px] sm:w-[286.77px] sm:h-[76.92px] sm:top-[41px] sm:left-[36px]">
                <img className="absolute w-[133.35px] h-[35px] sm:w-[83.43px] sm:h-[21.9px]  " src={Nestle}/>
                <img className="absolute w-[29.48px] h-[35px] left-[203px] sm:w-[18.44px] sm:h-[21.9px] sm:left-[108.43px]" src={Apple}/>
                <img className="absolute w-[60.9px] h-[40px] left-[302px] sm:w-[37.59px] sm:h-[25.02px] sm:left-[151.87px]" src={Beco}/>
                <img className="absolute w-[115.35px] h-[35px] left-[432.35px] sm:w-[72.31px] sm:h-[21.9px] sm:left-[214.46px]" src={Amazon}/>
                <img className="absolute w-[106px] h-[35px] left-[618px] sm:w-[66.52px] sm:h-[21.9px] sm:top-[55.02px] sm:left-[54px]" src={Google}/>
                <img className="absolute w-[140.35px] h-[35px] left-[795.35px] sm:w-[87.75px] sm:h-[21.9px] sm:top-[59.81px] sm:left-[145.96px]" src={Walmart}/>
            </div>
        </div>
    );
}

export default Logos;