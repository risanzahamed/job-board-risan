import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import ApplyForum from "../Pages/ApplyForum/ApplyForum";
import CategoryJob from "../Pages/CategoryJob/CategoryJob";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import SingleCompanyPage from "../Pages/SingleCompanyPage/SingleCompanyPage";
import Login from "../Shared/Authentication/Login/Login";
import Register from "../Shared/Authentication/Register/Register";
import Root from "./Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact-us",
                element: <ContactUs />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: "/apply-forum",
                element: <ApplyForum />
            },
            {
                path: "/:id",
                element: <CategoryJob></CategoryJob>,
                loader: ({ params }) => fetch(`https://job-board-risan-server.vercel.app/alljobs/${params.id}`)
            },
            {
                path: "Top-IT-Companies/:id",
                element: <SingleCompanyPage/>,
                loader: ({ params }) => fetch(`https://job-board-risan-server.vercel.app/Top-IT-Companies/${params.id}`)
            },
        ],
    }
]);

export default router