import React from 'react';
import VideoPng from '../../../public/img/Home/Video.png'

function Video(props) {
    return (
        <div className="absolute h-[600px] bg-[#F2FAF8] left-0 right-0 top-[700px] sm:h-[300px] sm:w-[360px] sm:top-[1026.4px]  ">
            <img className="absolute w-[765px] h-[460px] left-[257px] top-[70px] sm:w-[319.3px] sm:h-[192px] sm:top-[54px] sm:left-[20px]" src={VideoPng} />
        </div>
    );
}

export default Video;   