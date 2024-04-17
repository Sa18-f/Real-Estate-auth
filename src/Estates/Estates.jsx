import { useEffect } from "react";
import { useState } from "react";
import SingleEstates from "../SingleEstates/SingleEstates";


const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch('estates.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])
    return (
        <section>
            <h1 className="text-5xl font-bold text-center">Explore homes on <br /> <span className="text-orange-300">FindHouse</span></h1>
            <p className="my-4 text-center">Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local  <br />insights to find what is right for you.</p>
            <div className="grid lg:grid-cols-3 gap-10 my-10">
                {
                    estates.map(estate => <SingleEstates key={estate.id} estate={estate}></SingleEstates>)
                }
            </div>
        </section>
    );
};

export default Estates;