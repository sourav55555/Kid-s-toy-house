import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import banner1 from '../../../../assets/banner/banner1.jpg';
import banner2 from '../../../../assets/banner/banner2.jpg';
import banner3 from '../../../../assets/banner/banner3.jpg';
import "./Banner.css";
import 'animate.css';

const Banner = () => {
  const [slide, setSlide] = useState(1);
  const [animate, setAnimate] = useState(null);

  const handleRight = ()=>{
    setAnimate("animate__fadeInRight")
    if(slide == 3){
      setSlide(1);
    }else{
      setSlide(slide + 1 )
    }
  }
  const handleLeft = ()=>{
    setAnimate("animate__fadeInLeft")
    if(slide == 1){
      setSlide(3);

    }else{
      setSlide(slide - 1 )
    }
  }
  return (
    <div className=" h-screen relative">
      <div className={`${slide == 1 ? "" : "hidden"} flex flex-col md:flex-row items-center px-20 gap-4 banner h-full animate__animated ${animate}`}>

        <div className="md:w-1/2 md:mt-0 mt-20" data-aos="zoom-in">
          <img className="md:w-9/12 w-full rounded-xl mx-auto max-h-[30rem]" src={banner1} alt="" />
        </div>

        <div className="md:w-1/2 w-full md:mt-0 mt-7" data-aos="zoom-in">
          <h2 className="text-lg md:text-3xl title w-fit ms-0 mb-10">Kids Favourite</h2>

          <p className="text-lg md:mb-3">
            <p className="md:text-5xl text-3xl">Welcome to <br/><span className="font-semibold">Kid's Toy-House</span>.</p><br/>  
           </p>

           <p className="text-lg w-full md:w-4/6 font-semibold">All your kid's favorite toys will be here. Just explore and buy your kid's favorite toys with a discount.</p>

           <button className=" text-xl mt-8 hover:bg-[#18f1f1] font-semibold border-4 rounded-3xl md:px-10 px-6 py-3 md:py-4 border-[#066267]">Explore Now <FontAwesomeIcon className="text-2xl text-[#066267] ms-3 mt-1" icon={faHandPointRight}/>
           </button>
           
        </div>

      </div>

      <div className={`${slide == 2 ? "" : "hidden"} flex flex-col-reverse md:flex-row items-center justify-center px-20 gap-4 banner h-full animate__animated ${animate}`}>
      
        <div className="md:w-1/2 md:mt-0 mt-8 w-full">
          <div className="md:w-5/6 w-full ms-auto">

          <h2 className="text-3xl title w-fit mb-10">New Arrivals</h2>

          <p className="text-lg mb-3">
            <p className="md:text-6xl text-4xl font-semibold">
              Here you can find latest toys for your kids.<br/>
            </p> 
           </p>

           <button className=" text-xl mt-8 hover:bg-[#18f1f1] font-semibold border-4 rounded-3xl md:px-10 px-6 py-3 md:py-4 border-[#066267]">Discover Now <FontAwesomeIcon className="text-2xl text-[#066267] ms-3 mt-1" icon={faHandPointRight}/></button>

          </div>

        </div>

        <div className="md:w-1/2 w-full">
          <img className="w-full md:w-9/12 rounded-xl mx-auto max-h-[30rem]" src={banner2} alt="" />
        </div>

      </div>

      <div className={`${slide == 3 ? "" : "hidden"} flex flex-col md:flex-row items-center px-20 gap-4 banner h-full animate__animated ${animate}`}> 
      <div className="md:w-1/2 md:mt-0 mt-20">

          <img className="md:w-9/12 rounded-xl mx-auto max-h-[30rem]" src={banner3} alt="" />
        </div>

        <div className="md:w-1/2 md:mt-0 mt-7">
          <h2 className="text-3xl title w-fit mb-10">Top Rated</h2>
          <p className="text-lg mb-3 ">
            <p className="md:text-5xl text-3xl space-y-3">Get top rated <br/><span className="font-semibold pace-y-3">Animal Kingdom</span><br/> toys for your kids.</p>
           </p>
           <button className=" text-xl mt-8 hover:bg-[#18f1f1] font-semibold border-4 rounded-3xl px-10 py-4 border-[#066267]">Visit Now <FontAwesomeIcon className="text-2xl text-[#066267] ms-3 mt-1" icon={faHandPointRight}/></button>
        </div>

      </div>
      
      <div>
        <button className="absolute left-2 md:left-6 top-1/2 outline-btn" onClick={handleLeft}><FontAwesomeIcon className="text-2xl" icon={faCaretLeft}/></button>
        <button className="absolute right-2 md:right-6 top-1/2 outline-btn" onClick={handleRight}><FontAwesomeIcon  className="text-2xl" icon={faCaretRight}/></button>
      </div>
    </div>
  );
};

export default Banner;
