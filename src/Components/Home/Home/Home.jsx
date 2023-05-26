import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faPhone, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import Tablist from "./Tabs/Tablist";
import "./Home.css";
import 'animate.css';
import { useEffect } from 'react';

import Testimonial from './Testimonial/Testimonial';



const Home = () => {

    useEffect(()=>{
        document.title = "Kid's Toy";
    }, [])

    return (
        <div className="container mx-auto">
            <Banner/>
            <Gallery/>
            <Tablist/>


            {/* discount section  */}
            <div className="mt-40 h-[calc(100vh-5%)] flex flex-col md:flex-row justify-center items-center bg-no-repeat set-background md:p-8 p-6 md:px-16 bg-[url('https://i.ibb.co/zf5B6yj/wave-haikei-3.png')] relative">

                <div className="md:w-2/6 mx-auto md:mt-0 mt-8"  data-aos="zoom-in-right" data-aos-duration="700">

                    <h3 className="title">Best Deals Of The Day</h3>
                    <p className="text-2xl md:my-10 my-6 font-semibold">Get <span className="text-[#235558] font-bold">Upto 30% Off</span> On All New Toys</p>

                    <button className="px-8 py-3 shadow-md hover:text-white transition-all duration-400 hover:bg-[#173030ea] shadow-black rounded-xl bg-[#3becf6ea] text-gray-900 font-semibold mt-6">Buy Now <FontAwesomeIcon className="text-[#235558] text-lg ms-2" icon={faCartPlus}/></button>

                </div>

                <div className="md:w-1/2 md:mt-0 mt-10" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"
     data-aos-duration="300">
                    <img className="w-5/6" src="https://i.ibb.co/xDb1LMT/toy-dog-580px-svg-1.png" alt="" />
                </div>
            </div>


            {/* contact section  */}
            <div className='mt-32 mb-24 flex flex-col md:flex-row gap-10 md:px-28 px-10'>
                <div className='z-0 relative border-4 md:border-base-300 border-[#00ADB5] text-center bg-gray-100 p-10 md:w-1/3 hover:border-[#00ADB5] transition-all duration-500' data-aos="fade-right" data-aos-duration="300">

                        <img className='w-20 h-12 mt-3 mx-auto z-10' src="https://i.ibb.co/yn9dsRQ/free-shipping-icon.png" alt="" />
                        <h3 className='font text-2xl my-6 z-10'>Free Shipping</h3>
                        <p className='w-4/5 mx-auto z-10'>You can get free of shipping charges in our selected products. So, buy more and enjoy.</p>

                        <button className='z-10 px-6 py-3 rounded-lg bg-gray-600 font-semibold hover:bg-gray-800 transition duration-300 text-white mt-6'>View <FontAwesomeIcon className="text-lg ms-2" icon={faEye}/></button>

                        <img className='w-28 h-16 absolute right-0 bottom-0 opacity-30 mt-3 mx-auto z-10' src="https://i.ibb.co/yn9dsRQ/free-shipping-icon.png" alt="" />

                </div>

                <div  className='border-4 text-center bg-gray-100 relative p-10 md:w-1/3  hover:border-[#00ADB5] transition-all duration-500' data-aos="fade-down" data-aos-duration="300">

                    <img className='w-16 mx-auto' src="https://i.ibb.co/9ZyJS02/pngwing-com.png" alt="" />
                    <h3 className='font text-2xl my-6'>Support 24/7</h3>
                    <p className='w-4/5 mx-auto'>We are 24/7 ready for your support. Give us a call or email and we will connect with you.</p>

                    <button className='px-6 py-3 rounded-lg bg-gray-600 font-semibold hover:bg-gray-800 transition duration-300 text-white mt-6'>Call Now <FontAwesomeIcon className="text-lg ms-2" icon={faPhone}/></button>

                    <img className='w-24 absolute right-0 bottom-0 opacity-30 mt-3 mx-auto z-10' src="https://i.ibb.co/9ZyJS02/pngwing-com.png" alt="" />
                </div>

                <div  className='border-4 text-center bg-gray-100 relative p-10 md:w-1/3 hover:border-[#00ADB5] transition-all duration-500' data-aos="fade-left" data-aos-duration="300">
                
                    <img className='w-16 mx-auto' src="https://i.ibb.co/LJCnnms/cashback-icon.png" alt="" />
                    <h3 className='font text-2xl mt-6 mb-4'>Money Return</h3>
                    <p className='w-4/5 mx-auto'>If a product delivery is cancelled and the delivery full fill certain conditions. Then you will get your money return</p>

                    <button className='px-6 py-3 rounded-lg bg-gray-600 font-semibold hover:bg-gray-800 transition duration-300 text-white mt-6'>More Info <FontAwesomeIcon className="text-lg ms-2" icon={faCircleDollarToSlot}/></button>
                    <div className=''>
                        <img className='w-24 absolute right-0 bottom-0 opacity-30 mt-3 mx-auto z-10' src="https://i.ibb.co/LJCnnms/cashback-icon.png" alt="" />
                    </div>
                </div>
            </div>

        <Testimonial/>
        </div>
    );
};

export default Home;