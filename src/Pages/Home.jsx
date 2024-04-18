import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FindHouse | Home</title>
            </Helmet>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;