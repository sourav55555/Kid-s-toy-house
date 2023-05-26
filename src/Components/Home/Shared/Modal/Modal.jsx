import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faDragon,
  faUser,
  faMoneyBill1Wave,
  faStar,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
import Loader from "../Loader/Loader";

const Modal = ({ id, index }) => {
  const [data, setData] = useState({});
  const index1 = index || 5;
  const [loader, setLoader] = useState(true);

  
  useEffect(() => {
      if (id !== 0) {
        fetch(`https://toy-store-server.onrender.com/toyModal/${id}`)
          .then((res) => res.json())
          .then((data) => {setData(data[0]); setLoader(false)});
      }


    
  }, [id]);
 

  const {
    image,
    price,
    rating,
    quantity,
    sellerName,
    toyName,
    sellerEmail,
    Description,
  } = data || {};


  return (
    
      <div>
     
        {/* Put this part before </body> tag */}
        <input type="checkbox" id={`my-modal-${index1}`} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-full md:w-11/12 max-w-5xl p-0 bg-white">
            <div className="modalBg p-6 md:p-16">

              {/* loader  */}
            <div className={`${ loader ? "" : "hidden"}`}>
              <Loader />
            </div>

              <div className="flex items-center flex-col md:flex-row overflow-y-scroll justify-center md:gap-32 gap-10">
                <div className="p-6 border-2 md:mt-0 mt-12 border-[#017a80] rounded-lg">
                  <img className="w-44 h-44" src={image} alt="" />
                </div>
                <div className="space-y-4 font-semibold">
                  <h3 className="font text-4xl font-semibold">
                    <FontAwesomeIcon
                      className="text-2xl text-[#017a80]"
                      icon={faDragon}
                    />{" "}
                    {toyName}
                  </h3>

                  <p className="">
                    <FontAwesomeIcon
                      className="text-xl me-3 ms-3 text-[#017a80]"
                      icon={faUser}
                    />{" "}
                    Seller: {sellerName}
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-xl me-3 ms-3 text-[#017a80]"
                      icon={faEnvelope}
                    />{" "}
                    Seller Email: {sellerEmail}
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-xl me-3 ms-3 text-[#017a80]"
                      icon={faMoneyBill1Wave}
                    />{" "}
                    Price: {price}$
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-xl me-3 ms-3 text-[#017a80]"
                      icon={faStar}
                    />{" "}
                    Rating: ({rating}{" "}
                    <FontAwesomeIcon
                      className="text-md text-orange-400"
                      icon={faStar}
                    />
                    )
                  </p>

                  <p>
                    <FontAwesomeIcon
                      className="text-xl me-3 ms-3 text-[#017a80]"
                      icon={faListOl}
                    />{" "}
                    Quantity: {quantity}
                  </p>
                </div>
              </div>
              <p className="font-semibold mt-12 text-lg">Description:</p>
              <p className="">{Description}</p>
              <div className="modal-action">
                <label htmlFor={`my-modal-${index1}`} className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Modal;
