import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleEstates = ({ estate }) => {
    const { id, title, image, price, status, category } = estate;
    return (
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className='bg-[#F3F3F3] m-4 rounded-xl'>
                <figure>
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
            </div>
            <div className="card-body mt-[-20px]">
                <div className='border-dashed border-b pb-4'>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className='font-semibold my-4'><span className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-2">{category}</span></p>
                </div>
                <div className="flex gap-4 lg:flex-col ">
                    <p className="flex items-center font-semibold"><span className="text-lg">Price: {price}</span></p>
                    <p className="flex items-center font-semibold gap-1"><span className="text-lg">Status: <span className="bg-slate-100 border text-green-500 rounded-xl px-3 py-1"> {status}</span> </span></p>
                </div>
                <Link to={`/estate/${id}`}>
                    <div className='pt-3'>
                        <button className="w-full btn bg-blue-500 text-white text-lg">View Property</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};
SingleEstates.propTypes = {
    estate: PropTypes.object.isRequired
}

export default SingleEstates;