

const About = () => {
    return (
        <div>
            <div className="border bg-[#7091E6] rounded-xl lg:my-10 text-white">
                <h2 className="text-5xl font-bold text-center py-6">About</h2>
            </div>
            <h2 className="text-2xl font-medium text-center">“The house you looked at today and wanted to think about until <br /> tomorrow may be the  same house someone looked at yesterday and will <br /> buy today.”
                -- <span className="text-[#7091E6] font-bold"> Koki Adasi</span></h2>
            <h1 className="text-3xl font-bold lg:my-12 my-2">Words from the Founder :</h1>
            <div className="my-8">
                <img className="mx-auto rounded-lg" src="https://i.ibb.co/T4ndWZ5/istockphoto-1367391720-612x612.jpg" alt="" />
            </div>
            <p className="text-lg">I am Abdul Sattar Edhi, the founder and real estate enthusiast behind Find House. I’ve been an avid reader since childhood. From then, I became a frequent visitor to local book fairs and libraries. My constant search for new stories to devour took me to countless literary events in Shotwell St, San Francisco, and the surrounding areas.</p>
            <p className="text-lg my-3">From local book fairs to regional literature festivals, I have been engaged in a continuous quest for literary exploration. I hardly even miss participating in book reading contests and bringing home several awards.</p>
            {/* Introduction */}
            <div>
                <h1 className="text-5xl font-bold my-8">Let’s Introduce To Worlds two Famous Founders of Real Estate:</h1>
                <div className="grid lg:grid-cols-2  gap-6 grid-cols-1 my-12">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/SXGk6nq/istockphoto-1445215274-612x612.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name :  Caroline Smita</h2>
                            <h4 className="font-semibold">Company :  Philadelphia </h4>
                            <p className="font-semibold">Year of Publishing :  1731</p>
                            <p><span className="font-semibold">Description :</span>
                                Caroline Smita was a polymathic American statesman, scientist, inventor, author, and diplomat. Born in 1706, he played a pivotal role in American history, contributing to the Declaration of Independence and the Constitution. Franklin's inventions include the lightning rod and bifocals. His wit and wisdom are immortalized in "Poor Richard's Almanack."</p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full h-[380px]" src="https://i.ibb.co/nRcS1r1/istockphoto-827092348-612x612.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name :  Andrew Carnegie</h2>
                            <h4 className="font-semibold">Company :  Numerous public library </h4>
                            <p className="font-semibold">Year of Publishing :  1831</p>
                            <p><span className="font-semibold">Description :</span>
                                He was a Scottish-American industrialist and philanthropist who established numerous public libraries across the United States and other countries. Carnegie believed in the importance of access to knowledge and education for all, and his contributions led to the establishment of many Carnegie libraries, which provided free access to books and resources for communities.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="flex justify-around items-center">
                <div className="text-center">
                    <h1 className="text-xl font-bold my-3">Address</h1>
                    <p>FindHouse c/o, 1045, <br />Washington,USA.</p>
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-bold my-3">GET IN TOUCH</h1>
                    <h1>Email : contact@findhouse.com</h1>
                </div>
            </div>
        </div>
    );
};

export default About;