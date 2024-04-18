import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const estateIdInt = parseInt(id);
    const estate = estates.find(estate => estate.id === estateIdInt)
    return (
        <div className="flex lg:flex-row  flex-col justify-between bg-base-100 shadow-xl rounded-xl lg:my-12">
            <Helmet>
                <title>FindHouse | Estate Details: {id} </title>
            </Helmet>
            <div className="rounded-xl lg:w-[675px] h-full mt-4">
                <div className="py-12 px-8">
                    <img className="rounded-xl mx-auto" src={estate.image} alt="Album" />
                </div>
            </div>
            <div className="lg:w-[500px] px-3 mt-3">
                <h2 className="font-bold text-xl">{estate.title}</h2>
                <p className='font-semibold my-4'><span className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-2">{estate.category}</span></p>
                <p><span className="font-bold text-lg">Description:</span> {estate.description}</p>
                <div className="flex gap-2 lg:flex-col ">
                    <p className="flex items-center font-semibold pt-3"><span className="text-lg">Price: {estate.price}</span></p>
                    <p className="flex items-center font-semibold"><span className="text-lg">Area: {estate.area}</span></p>
                    <p className="flex items-center font-semibold"><span className="text-lg">Location: {estate.location}</span></p>
                </div>
                <div className="py-4">
                    <p className="text-lg font-semibold">Facilities:</p>
                    <ul className="list-disc pl-6">
                        {estate.facilities.map((facility, index) => (
                            <li key={index} className="text-[#878787] my-2"> {facility}</li>
                        ))}
                    </ul>
                </div>
                <p className="flex items-center font-semibold gap-1 pb-2"><span className="text-lg">Status: <span className="bg-slate-100 border text-green-500 rounded-xl px-3 py-1"> {estate.status}</span> </span></p>
            </div>
        </div>
    );
};

export default EstateDetails;