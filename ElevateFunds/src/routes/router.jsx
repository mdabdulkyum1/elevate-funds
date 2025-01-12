import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import AddCampaign from "../pages/AddCampaign/AddCampaign";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AllCampaigns from "../pages/AllCampaigns/AllCampaigns";
import MyCampaigns from "../pages/MyCampaigns/MyCampaigns";
import MyDonations from "../pages/MyDonations/MyDonations";
import CampaignDetails from "../pages/CampaignDetails/CampaignDetails";
import UpdateCampaign from "../pages/UpdateCampaign/UpdateCampaign";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Support from "../pages/Support/Support";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
            ,
            {
                path: "all-campaign",
                element: <PrivateRoute><AllCampaigns></AllCampaigns></PrivateRoute>
            },
            {
                path:"add-new-campaign",
                element: <PrivateRoute><AddCampaign></AddCampaign></PrivateRoute>
            },
            {
                path:"my-campaign",
                element: <PrivateRoute><MyCampaigns></MyCampaigns></PrivateRoute>
            },
            {
                path: "my-donations",
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>
            },
            {
                path: "campaign-details/:id",
                element: <CampaignDetails></CampaignDetails>,
                loader: ({params})=> fetch(`https://elevate-funds-server.vercel.app/campaign/${params.id}`)
            },
            {
                path: "/updateCampaign/:id",
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({params})=> fetch(`https://elevate-funds-server.vercel.app/updateCampaign/${params.id}`)
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "support",
                element: <Support></Support>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;
