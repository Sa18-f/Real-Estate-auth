import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";


const Login = () => {
    // const handleLogin = e =>{
    //     e.preventDefault();
    //     const form = new FormData(e.currentTarget);
    //     console.log(form)
    // }
    const {loginUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data =>{
        const {email, password} = data;
        loginUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="bg-base-200 py-10">
            <h2 className="text-5xl font-bold text-center">Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto py-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" {...register("password", { required: true })} />
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Do not have an account? <Link to='/register'><span className="text-primary font-bold">Register</span></Link></p>
        </div>
    );
};

export default Login;