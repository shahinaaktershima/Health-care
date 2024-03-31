import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[500px]">
  <div className="hero " style={{backgroundImage: 'url(https://i.postimg.cc/5y6xm87w/image.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Discover comprehensive healthcare solutions tailored to your needs, right at your fingertips. Access expert medical advice, appointments, and resources effortlessly on our user-friendly healthcare service website.</p>
      <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[500px]">
  <div className="hero " style={{backgroundImage: 'url(https://i.postimg.cc/Gt8CDdtK/image.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Discover comprehensive healthcare solutions tailored to your needs, right at your fingertips. Access expert medical advice, appointments, and resources effortlessly on our user-friendly healthcare service website.</p>
      <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[500px]">
  <div className="hero " style={{backgroundImage: 'url(https://i.postimg.cc/rw8qn6PV/image.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Discover comprehensive healthcare solutions tailored to your needs, right at your fingertips. Access expert medical advice, appointments, and resources effortlessly on our user-friendly healthcare service website.</p>
      <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[500px]">
  <div className="hero h-[500px]" style={{backgroundImage: 'url(https://i.postimg.cc/cJg2TX01/image.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Discover comprehensive healthcare solutions tailored to your needs, right at your fingertips. Access expert medical advice, appointments, and resources effortlessly on our user-friendly healthcare service website.</p>
      <Link to='/login'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;