import React from 'react';
import Topbar from './TopBar/TopBar'
import Header from './Header/Header'
import Video from './Video/Video'
import Logos from './Logos/Logos'
import Features from './Features/Features'
import UserFeedBack from './UserFeedBack/UserFeedBack'
import CTA from './CTA/CTA'
import Footer from './Footer/Footer'

function Home(props) {
    return (
        <div>
            <Topbar></Topbar>
            <Header></Header>
            <Video></Video>
            <Logos></Logos>
            <Features></Features>
            <UserFeedBack></UserFeedBack>
            <CTA></CTA>
            <Footer></Footer>
        </div>
    );
}

export default Home;