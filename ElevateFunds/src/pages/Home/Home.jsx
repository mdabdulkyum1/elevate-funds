import { Helmet } from "react-helmet-async";
import Banner from "../../components/shared/Banner/Banner";
import Faq from "../../components/shared/Faq/Faq";
import Features from "../../components/shared/Features/Features";
import RunningCampaigns from "../../components/RunningCampaigns/RunningCampaigns";
import Contact from './../Contact/Contact';
import Support from './../Support/Support';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | Elevate Funds </title>
        </Helmet>
        <div className="container mx-auto">
            <Banner></Banner>
            <RunningCampaigns></RunningCampaigns>
            <Features></Features>
            <Faq></Faq>
            <Support></Support>
            <Contact></Contact>
        </div>
        </>
    );
};

export default Home;