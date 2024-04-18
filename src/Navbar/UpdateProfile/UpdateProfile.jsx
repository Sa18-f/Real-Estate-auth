
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";


const UpdateProfile = () => {
    const { user, updateUserProfile } = UseAuth();
    const { handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";


    const [displayName, setDisplayName] = useState(user.displayName || '');
    const [photoURL, setPhotoURL] = useState(user.photoURL || '');

    useEffect(() => {
        // Set initial values if user exists
        if (user) {
            setDisplayName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);




    const onSubmit = async () => {
        try {
            await updateUserProfile(displayName, photoURL);
            navigate(from);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };
    return (
        <div className="bg-base-200 py-10">
            <h1 className="text-center text-4xl font-bold">Update Your Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name="name"  onChange={(e) => setDisplayName(e.target.value)} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="image"  onChange={(e) => setPhotoURL(e.target.value)} className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;