import "./Testimonial.css"
import test1 from '../../../../assets/test/28664-2-child-file.png';
import test2 from '../../../../assets/test/28928-3-child-image.png';
import test3 from '../../../../assets/test/black-kid-11549490183ihwaygvbpi.png';

const Testimonial = () => {
    return (
        <div className="h-fit mb-28 pt-36 px-8 pb-28 text-center testimonial bg-[url(https://i.ibb.co/cXLVxXD/wave-haikei-1.png)] bg-no-repeat">
            <h3 className="title mx-auto mt-4" data-aos="fade-down" data-aos-duration="300">Our Special Members</h3>
            <p data-aos="fade-down" data-aos-duration="300" className="my-6 text-lg font-semibold">Here some of our lovely customers mention us.</p>

            {/* testimonial section  */}

            <div className="flex flex-col md:flex-row gap-10 md:mx-16 justify-center items-center  mt-20">
                <div className="md:mt-0 mt-6"  data-aos="zoom-in-up" data-aos-duration="300">
                    <div className="border-4 hover:scale-110 transition-all duration-500 relative  border-[#00ADB5] flex justify-center items-center gap-4 w-fit px-8 py-3 rounded-full bg-slate-100 mx-auto">

                        <img className="w-16 z-30 h-16" src={test1} alt="" />

                        <div className="text-left">
                            <p className="font-semibold text-lg font">Emily</p>
                            <p>Customer</p>
                        </div>

                        <div className="bg-arrow transform rotate-45 w-12 h-12 border-[#00ADB5] absolute border-b-4 border-r-4 -bottom-[26px] bg-slate-100 left-[calc(50%-1.5rem)] origin-center"></div>
                    </div>

                    <div className="border-[3px]  shadow-xl shadow-gray-500 p-6 border-[#00ADB5] bg-gray-50 text-gray-600 mt-10 text-left rounded-2xl comment">

                        <img src="https://i.ibb.co/sjg5CQJ/clipart1110790.png" className="h-12 relative -top-8 -left-4 w-10 opacity-20" alt="" />

                        <p className="mt-[-26px] md:w-[22rem]">` Wow, the animal toy store is absolutely amazing! As an animal lover, I couldn't believe my eyes when I walked in. The store is filled with all kinds of animal toys, from cute little puppies to majestic lions. I highly recommend this store to all the animal enthusiasts out there!`</p>
                    </div>
                </div>

                <div className="md:mt-0 mt-6" data-aos="zoom-in-down" data-aos-duration="300">

                <div className="border-4 relative hover:scale-110 transition-all duration-500  border-[#00ADB5] flex justify-center items-center gap-4 w-fit px-8 py-3 rounded-full bg-slate-100 mx-auto">
                        <img className="w-20 z-30 h-16" src={test2} alt="" />

                        <div className="text-left">
                            <p className="font-semibold text-lg font">Jems</p>
                            <p>Customer</p>
                            <div className="bg-arrow transform rotate-45 w-12 h-12 border-[#00ADB5] absolute border-b-4 border-r-4 -bottom-[26px] bg-slate-100 left-[calc(50%-1.5rem)] origin-center"></div>
                        </div>

                    </div>

                    <div className="border-[3px] shadow-xl shadow-gray-500 p-6 border-[#00ADB5] bg-gray-50 text-gray-600 mt-10 text-left rounded-2xl border-[#00ADB5]] comment">

                    <img src="https://i.ibb.co/sjg5CQJ/clipart1110790.png" className="h-12 relative -top-8 -left-4 w-10 opacity-20" alt="" />

                        <p className="mt-[-26px] md:w-[22rem]">
                            "I recently visited the animal toy store with my younger sister, and we had the best time ever! The store is so colorful and vibrant, and it's like stepping into a world full of animals. They have a wide range of plush toys, action figures, and even educational games about animals. "
                        </p>

                    </div>
                </div>

                <div className="md:mt-0 mt-6" data-aos="zoom-in-up" data-aos-duration="300">
                
                <div className="border-4 relative hover:scale-110 transition-all duration-500 border-[#00ADB5] flex justify-center items-center gap-4 w-fit px-8 py-3 rounded-full bg-slate-100 mx-auto">
                        <img className="w-16 z-30 h-16" src={test3} alt="" />

                        <div className="text-left">
                            <p className="font-semibold text-lg font"> Sam</p>
                            <p>Customer</p>
                            <div className="bg-arrow transform rotate-45 w-12 h-12 border-[#00ADB5] absolute border-b-4 border-r-4 -bottom-[26px] bg-slate-100 left-[calc(50%-1.5rem)] origin-center"></div>
                        </div>

                    </div>

                    <div className="border-[3px] shadow-xl shadow-gray-500 p-6 border-[#00ADB5] bg-gray-50 text-gray-600 mt-10 text-left rounded-2xl border-[#00ADB5]] comment">

                    <img src="https://i.ibb.co/sjg5CQJ/clipart1110790.png" className="h-12 relative -top-8 -left-4 w-10 opacity-20" alt="" />

                        <p className="mt-[-26px] md:w-[22rem]">

                            "I love going to the animal toy store! They have the coolest selection of stuffed animals and toy figurines. I can spend hours exploring all the different sections and picking out my favorites. The staff is super friendly too and always ready to help me find exactly what I'm looking for."
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Testimonial;