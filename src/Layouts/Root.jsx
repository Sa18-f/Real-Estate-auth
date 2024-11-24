import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-[1170px] mx-auto font-poppins">
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;