import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ModalMytoy from "./ModalMytoy";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort, faL } from '@fortawesome/free-solid-svg-icons'
import Loader from "../Shared/Loader/Loader";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [sort, setSort] = useState("ascending");
  const [data, setData] = useState({});
  const [index, setIndex] = useState(0);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    document.title = "Kid's Toy | My Toys";
  }, []);

  const url = `https://toy-store-server.onrender.com/mytoys?email=${user.providerData[0]?.email}&sort=${sort}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("toy-access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(true)
        }
        else{
          setMyToys(data);
          setLoader(false);
        }
      });
  }, [url, deleted, sort, error]);

  console.log("mytoy", myToys);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const handleDelete = _id =>{

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://toy-store-server.onrender.com/mytoys/${_id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount == 1){
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Deleted Successful',
            'success'
          )
        }
        setDeleted(!deleted);
    })

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }

  return (
    <div className="px-10 text-center">

      {/* loader  */}
      <div className={`${ loader ? "" : "hidden"}`}>
              <Loader />
      </div>

        <h3 data-aos="zoom-in" className="title mx-auto my-16">My Toys</h3>
        <div data-aos="zoom-in" className="mt-16">

          <p className="mb-4 text-lg font-semibold">Sort by Price <FontAwesomeIcon className="text-xl text-[#066267] ms-1 mt-1" icon={faArrowUpWideShort}/></p>
          <div className="flex justify-center items-center">

            <button onClick={()=>setSort("ascending")} className={`${sort == "ascending" ? "bg-[#0d6c71] text-white" : ""} px-4 py-1 border-2 border-[#0d6c71] `}>Ascending</button>
            <button onClick={()=>setSort("descending")} className={`${sort == "descending" ? "bg-[#0d6c71] text-white" : ""} px-4 py-1 border-2 border-[#0d6c71]`}>Descending</button>
            
          </div>
        </div>
      <div data-aos="zoom-in" data-aos-duration="300" className="overflow-x-auto mt-12 mb-28">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Detail description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>
                <td>
                  <img className="w-24 h-24" src={data.image} alt="" />
                </td>
                <td>{data.toyName}</td>
                <td>{data.sellerName}</td>
                <td>{data.subCategory}</td>
                <td>{data.price} $</td>
                <td>{data.rating}</td>
                <td>{data.quantity}</td>
                <td><div className="w-[17rem] h-12 overflow-auto">{data.Description}</div></td>
                <td>
                <>
                  <label onClick={()=> {setIndex(index); setData(data)}} htmlFor={`my-modal-${index}`} className="bg-emerald-600 text-white px-3 py-2 rounded-xl font-semibold">
                    Update
                    
                  </label>
                  {/* <ModalMytoy index={index} update={data}/> */}
                  </>
                </td>
                <td>
                  <button onClick={()=> handleDelete(data._id)} className="bg-red-400 text-white px-3 py-2 rounded-xl font-semibold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={`${myToys.length === 0 ? "": "hidden"} text-orange-800 font-semibold mt-8`}>No Data</p>
      </div>
      <ModalMytoy index={index} update={data}/>
    </div>
  );
};

export default Mytoys;
