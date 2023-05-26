import { useEffect, useState } from "react";
import Loader from "../../Shared/Loader/Loader";


const Gallery = () => {

    const [gallery, setGallery] = useState([])
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        fetch('https://toy-store-server.onrender.com/toys')
        .then(res => res.json())
        .then(data => {setGallery(data); setLoader(false)})
    }, [])
    console.log(gallery)

    return (
        <div className="h-screen my-32 text-center px-8 md:px-16">
            <h3 className="title mx-auto" data-aos="zoom-in" data-aos-duration="300">Toy Gallery</h3>
            <h2 className="second-title " data-aos="zoom-in" data-aos-duration="350">Visit our toy collection gallery and choose your favourite one.</h2>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 items-center justify-center text-center  overflow-y-scroll h-[calc(100vh-15%)] border-2 rounded-2xl border-[#0ad0db] p-8">
            {/* loader  */}
            <div className={`${ loader ? "" : "hidden"}`}>
            </div>
            <div className={`${ loader ? "" : "hidden"}`}>
              <Loader />

                {/* gallery  */}
            </div>
                {
                    gallery.map(data => <div className="border-2 rounded-xl flex items-center justify-center h-full" key={data._id}>
                        <img className="rounded-xl max-h-80" src={data.image}/>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Gallery;