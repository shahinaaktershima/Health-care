import Marquee from "react-fast-marquee";
import './style.css'
import { FaArrowRight, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const HomePage = () => {
    return (
        <div>
   
{/* <!--header section ends--> */}

{/* <!--home starts--> */}
<section className="home" id="home">
<Marquee className=" h-55 w-[800px]">
          
          <img className="h-[350px] w-[800px] " src="https://i.postimg.cc/5y6xm87w/image.png" alt="" />
          <img className=" h-[350px]  w-[800px]" src="https://i.postimg.cc/Gt8CDdtK/image.png" alt="" />
          <img className="h-[350px]  w-[800px]" src="https://i.postimg.cc/rw8qn6PV/image.png" alt="" />
          <img className=" h-[350px] w-[800px]" src="https://i.postimg.cc/cJg2TX01/image.png" alt="" />
       
           </Marquee>
   
        <div className="content">
            <h2> Stay safe, Stay healthy !</h2>
            <p>Welcome to our dashboard, your hub for well-being. Track vital signs, monitor habits, and make informed decisions for your journey to wellness. Let's embrace health and happiness together. Stay connected, stay informed, stay vibrant. </p>
            <a href="#" className="btn flex items-center">Contact us</a>
        </div>
    
</section>

{/* <!--home ends--> */}

{/* <!--icone section start --> */}
<section className="icons-container">
    <div className="icons">
        <i className="fas fa-user-md"></i>
        <h3>150+</h3>
        <p>Doctors at Work</p>
    </div>

    <div className="icons">
        <i className="fas fa-users"></i>
        <h3>1500+</h3>
        <p>Satisfied Patients</p>
    </div>

    <div className="icons">
        <i className="fas fa-procedures"></i>
        <h3>500+</h3>
        <p>Bed Facilities</p>
    </div>

    <div className="icons">
        <i className="fas fa-hospital"></i>
        <h3>30+</h3>
        <p>Available Hospitals</p>
    </div>
</section>        
{/* <!--icone section end --> */}


{/* <!--services section starts--> */}

<section className="services" id="services">
    <h1 className="heading">our <span>services</span></h1>
    <div className="box-container grid grid-cols-3">
        <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>free checkup </h3>
            <p>Here you can check up freely</p>
            <a href="#" className="btn">learn more</a>
        </div>    

        <div className="box">
            <i className="fas fa-ambulance"></i>
            <h3>24/7 Ambulance </h3>
            <p>24/7 ambilance service is available for you. Dial 1122</p>
            <a href="#" className="btn">learn more</a>
        </div>  

        <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>Expart Doctors </h3>
            <p>Our doctors are well classNameified for treatment.</p>
            <a href="#" className="btn">learn more</a>
        </div>  

        <div className="box">
            <i className="fas fa-pills"></i>
            <h3>medicines </h3>
            <p>Free medicines are given here.</p>
            <a href="#" className="btn">learn more</a>
        </div>  

        <div className="box">
            <i className="fas fa-procedures"></i>
            <h3>Bed Facility </h3>
            <p>ICU, CCU, Emergency bed services are available</p>
            <a href="#" className="btn">learn more</a>
        </div>  

        <div className="box">
            <i className="fas fa-heartbeat"></i>
            <h3>Total Care</h3>
            <p>Our patients are happy with our services</p>
            <a href="#" className="btn">learn more</a>
        </div>  
        </div>

</section>
{/* <!--services section ends--> */}

{/* <!--about section starts--> */}

<section className="about" id="about">
    <h1 className="heading"><span>about</span>us</h1>
    <div className="flex items-center">
        <div className="image">
            <img className="h-[400px] w-[1000px]" src="https://i.postimg.cc/HLGQkZDX/image.png" alt="" />
           
        </div>
        <div className="max-w-md p-5">
            <h3 className="font-bold text-2xl text-green-600">We take care of your healthy life</h3>
            <p>we are committed to revolutionizing the delivery of healthcare services with a steadfast dedication to patient-centric care and innovation. Founded on the principle of putting patients first, our mission is to provide accessible, high-quality healthcare that empowers individuals to lead healthier lives.  </p>
            <a href="#" className="btn">Learn More</a>
        </div>    
</div>
</section>
{/* <!--about section ends--> */}

{/* <!--doctor section starts--> */}
<section className="doctors" id="doctors">
    <h1 className="heading"> our <span>doctors</span></h1>
    <div className="grid grid-cols-3 gap-3">
    <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-[250px]" src="https://i.postimg.cc/3JSH5dMb/R.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Naim Hayder</h2>
    <p>Expert Doctor</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-[250px]" src="https://i.postimg.cc/ydYwbHQz/bigstock-Portrait-of-young-woman-doctor-70264798.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sinthia</h2>
    <p>Gainocologist</p>
    <div className="card-actions justify-end">
    <a href=""><FaFacebook></FaFacebook></a>
             <a href=""><FaInstagram></FaInstagram></a>
    </div>
  </div>
</div>
    <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-[250px]" src="https://i.postimg.cc/6QBS8KNG/OIP.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Selim Reza</h2>
    <p>Expert Doctor</p>
    <div className="card-actions justify-end">
    <a href=""><FaFacebook></FaFacebook></a>
             <a href=""><FaInstagram></FaInstagram></a>
    </div>
  </div>
</div>
        
        

        
        </div>
</section>
{/* <!--doctor section ends--> */}

{/* <!--booking section starts--> */}
<section className="book" id="book">
    <h1 className="heading"><span>book</span>now</h1>
    <div className="row flex items-center gap-14">
        <div className="image">
            <img className="h-[450px] w-[1200px] rounded-2xl " src="https://i.postimg.cc/wjJB2hZd/Adobe-Stock-125253825.jpg" alt=""/>
        </div>
        <form className="pl-16 py-3" action="">
           
            <h3>Book Appointment</h3>
            <input type="text" placeholder="your name" className="box"/>
            <input type="number" placeholder="your phone number" className="box"/>
            <input type="email" placeholder="your email" className="box"/>
            <input type="date" className="box"/><br />
            <input type="submit" value="Book Now !" className="btn bg-green-800"/>
        </form>    
    </div>

</section>
{/* <!--booking section ends--> */}

{/* <!--review section starts--> */}

<section className="class review" id="class review">
    <h1 className="heading">Client's <span>Review</span></h1>
    <div className="box-container grid grid-cols-4 gap-3">
        <div className="box">
            <img src="https://i.postimg.cc/pybP6J0j/OIP.jpg" alt=""/>
           
            <h3>Aion</h3>     
            <p className="text">I recently utilized  for my healthcare needs and was incredibly impressed with the level of care I received.  </p>
        </div>

        <div className="box">
            <img src="https://i.postimg.cc/zvRJ7ck5/OIP-1.jpg" alt=""/>
            <h3>Shikdar Mahmud</h3>
           
            <p className="text"> The medical professionals were not only highly skilled and knowledgeable but also showed genuine concern for my well-being. </p>
        </div>

        <div className="box">
            <img src="https://i.postimg.cc/4N6KTYzG/OIP-3.jpg" alt=""/>
            <h3>Nafisa Yesmin</h3>
           
            <p className="text"> I felt like my needs were truly being prioritized. The personalized attention and care I received were exemplary,</p>
        </div>

        <div className="box">
            <img src="https://i.postimg.cc/7hgvtGft/OIP-2.jpg" alt=""/>
            <h3>Isbatul Tahsin</h3>
            
            <p className="text"> From their welcoming atmosphere to their skilled , they exceeded my expectations in every aspect. </p>
        </div>
    </div>


</section>





        </div>
    );
};

export default HomePage;