import React from 'react';
import TopBar from '../Home/TopBar/TopBar';
import Header from '../Pets/Header/Header'
import Video from '../Pets/Video/Video'
import Logos from '../Pets/Logos/Logos';
import Features from '../Pets/Features/Features'
import UserFeedBack from '../Pets/UserFeedback/UserFeedback'
import CTA from '../Pets/CTA/CTA'
import Footer from '../Pets/Footer/Footer'

function Pets(props) {
    return (
        <div>
            <TopBar></TopBar>
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

export default Pets;