
import { Helmet } from 'react-helmet-async';
import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    return (
        <div className="flex justify-center items-center text-center flex-col min-h-screen">
            <Helmet>
                <title>FindHouse | Error Page</title>
            </Helmet>
            <h2 className="text-xl">{error.statusText || error.message}</h2>
            {
                error.status === 404 && <div>
                    <h3 className="text-3xl font-bold my-4">404 - Page not found</h3>
                    <Link to="/"><button className="btn">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Errorpage;