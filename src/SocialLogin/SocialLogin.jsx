import UseAuth from "../Hooks/UseAuth";


const SocialLogin = () => {
    const { googleLogin, githubLogin } = UseAuth();
    return (
        <>
            <div className="divider">or</div>
            <div className="flex justify-around">
                <button onClick={() => googleLogin()} className="flex justify-center items-center border-2 border-green-400 py-4 px-6 rounded-xl"><img className="w-10 h-10" src="https://i.ibb.co/bzw5Pdb/download-6.jpg" alt="" />Continue with Google</button>
                <button onClick={() => githubLogin()} className="flex justify-center items-center border-2 border-black py-4 px-6 rounded-xl bg-white"><img className="w-12 h-12 bg-black" src="https://i.ibb.co/qYyTcsP/images-removebg-preview.png" alt="" />Continue with Github</button>
            </div>
        </>
    );
};

export default SocialLogin;