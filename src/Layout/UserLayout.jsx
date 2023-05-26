import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Shared/Footer/Footer";
import Header from "../Components/Home/Shared/Header/Header";


const UserLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserLayout;