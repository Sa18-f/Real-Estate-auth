import { Helmet } from "react-helmet-async";
import Estates from "../Estates/Estates";
import Banner from "../Home/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FindHouse | Home</title>
            </Helmet>
            <Banner />
            <Estates></Estates>
        </div>
    );
};

export default Home;