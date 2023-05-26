import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';



const Addtoy = () => {
    const {user} = useContext(AuthContext);

    const [data, setData] = useState({})

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        document.title = "Kid's Toy | Add A Toy";
    }, [])


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;

        const sellerEmail = event.target.sellerEmail.value;
        const sellerName = event.target.sellerName.value;

        const formdata = {...data, sellerEmail, sellerName};
        console.log(formdata);

        fetch('https://toy-store-server.onrender.com/toys',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formdata)
        })
        .then(res => res.json())
        .then(data => {
           if(data.acknowledged){
            Toast.fire({
                icon: 'success',
                title: 'Toy added successfully'
           })
           form.reset();
        }
           
        })
    }
    
    return (
        <div>
            <div className="text-center my-20">
                <h3 className="title mx-auto">Add A Toy</h3>
                <p className="font-semibold">If you want to sell your toys, then register the toy here</p>
            </div>

            <div className=" mx-auto text-center md:px-0 px-8 mb-32">
                <form onSubmit={handleSubmit} className="addtoy z-10 border-4  border-[#21bec6] rounded-lg md:w-[66rem] mx-auto relative">

                

                    <div className="grid grid-cols-1 z-50 opacity-80 relative md:grid-cols-2 gap-10 md:p-10 p-8 text-left">

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Toy Name</label>
                        <input className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} type="text" name="toyName" placeholder="Enter Toy Name"/>
                    </div>

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Photo Url</label>
                        <input className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} type="url" placeholder="Enter Photo Url" name="image"/>
                    </div>

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Seller Name</label>
                        <input className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} name="sellerName" value={user?.displayName} type="text" />
                    </div>

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Seller Email</label>
                        <input className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} type="email" value={user?.providerData[0]?.email} name="sellerEmail" />
                    </div>

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Sub-Category</label>
                        <select className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" name="subCategory" onChange={updateData} id="">
                            <option value="">Select</option>
                            <option value="flying animal">Flying Animal</option>
                            <option value="ground animal">Ground Animal</option>
                            <option value="water animal">Water Animal</option>
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Price</label>
                        <input className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} type="number" name="price" placeholder="Enter Price"/>
                    </div>

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Rating</label>
                        <input className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} type="text"  name="rating" placeholder="Rating"/>
                    </div>

                    <div className="space-y-3">
                        <label className="block font-semibold" htmlFor="">Available Quantity</label>
                        <input className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} type="text" name="quantity" placeholder="Available quantity"/>
                    </div>
                    
                    </div>

                    <div className="space-y-3 relative opacity-80 z-50 mx-auto">
                        <label className="block font-semibold" htmlFor="">Detail description</label>
                        <textarea className="outline-none border-b-2 w-9/12 border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600" onChange={updateData} placeholder="Enter Description"  name="Description" id="" cols="30" rows="5"></textarea>
                    </div>

                    <input className="cursor-pointer relative z-50 mt-12 mb-16 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-gray-800 shadow-gray-700 md:w-72 w-44 py-3 bg-[#16adb5] rounded-xl" type="submit" name="" value="Add A Toy" id="" />
                    

                    <div className="h-full md:block hidden w-full opacity-5 absolute top-0 bottom-0 z-20" >
                        <img className="h-full w-full" src="https://i.ibb.co/VvnNLwM/pngwing-com-1.png" alt="" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addtoy;