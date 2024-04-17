

const Banner = () => {
    return (
        <div className="lg:px-3 px-2 lg:my-12 my-2 flex lg:flex-row flex-col justify-center items-center">
            <div className="lg:w-[550px]">
                <h1 className="lg:text-5xl text-3xl font-bold">Discover a place you will love to live!!</h1>
                <p className="lg:mt-5 mt-2">From cozy starter homes to luxurious estates, we offer a diverse portfolio of residential properties to suit every <br /> lifestyle and budget.</p>
            </div>
            <div className="carousel w-full lg:h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/GCsc7YP/tierra-mallorca-Np-Tb-VOkkom8-unsplash.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/8sW6gqy/harper-van-mourik-0yf-WDw-HOB0g-unsplash.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/0QyGBj9/lotus-design-n-print-Wgk-A3-CSFrjc-unsplash.jpg" className="w-full rounded-xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;