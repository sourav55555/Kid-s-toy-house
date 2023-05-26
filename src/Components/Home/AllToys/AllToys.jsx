import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassArrowRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Shared/Modal/Modal";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Loader from "../Shared/Loader/Loader";

const AllToys = () => {
  const { user } = useContext(AuthContext);

  const [allToys, setAllToys] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(20);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.title = "Kid's Toy | All Toys";
  }, []);

  useEffect(() => {
    if (user) {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [user]);

  const showAllSet = () => {
    setLimit(100000);
    setShowAll(true);
  };

  const handleSearch = () => {
    fetch(`https://toy-store-server.onrender.com/toysSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  useEffect(() => {
    fetch(`https://toy-store-server.onrender.com/toyslimit/${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoader(false);
      });
  }, [limit]);

  const handleModal = (id) => {
    if (!modal) {
      navigate("/user", { state: { form: location } });
      console.log("no user");
    }
    setModalId(id);
  };

  return (
    <div>
      <div
        className="mt-12 mb-16 w-fit mx-auto relative"
        data-aos="zoom-in-up"
        data-aos-duration="300"
      >
        <img
          className="md:w-[25rem] w-[21rem] h-[21rem] md:h-[20rem]"
          src="https://i.ibb.co/bBDCjhP/Pngtree-cute-dog-cartoon-hold-white-6667368-1.png"
          alt=""
        />
        {/* toys search  */}
        <div className="absolute bottom-8 left-[3.5rem] md:left-16 flex items-center justify-center">

          <input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Toy By Name"
            type="text"
            name=""
            className="outline-none border-2 md:w-fit w-[12.5rem] border-r-0 border-[#1fd6e0] rounded-s-xl px-4 py-2 "
            id=""
          />

          <button
            className=" border-2 px-4 py-2 border-l-0 bg-[#1cc5ce] rounded-e-xl border-[#1fd6e0]"
            onClick={handleSearch}
          >
            <FontAwesomeIcon
              className="text-xl text-[#000]"
              icon={faMagnifyingGlassArrowRight}
            />
          </button>

        </div>
      </div>

      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="py-3">
              <th></th>
              <th className="py-6">Toy Name</th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* table row */}

            {allToys.map((data, index) => (
              <tr key={data._id}>

                <td className="py-6">{index + 1}</td>
                <td>{data.toyName}</td>
                <td>{data.sellerName}</td>
                <td>{data.subCategory}</td>
                <td>{data.price}$</td>
                <td>{data.quantity}</td>
                <td>
                  <label
                    htmlFor={`${modal ? "my-modal-5" : ""}`}
                    onClick={() => handleModal(data._id)}
                    className="outline-btn hover:shadow-lg"
                  >
                    View Details
                  </label>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <div className={`${loader ? "" : "hidden"}`}>
        <Loader />
      </div>

      <div className="text-center mt-12 mb-32">

        <button
          onClick={showAllSet}
          className={`${
            showAll ? "hidden" : ""
          } bg-[#1fd6e0] font-semibold rounded-xl px-6 py-3 shadow-lg shadow-gray-400 hover:shadow-gray-700 transition-all duration-300`}
        >
          Show All
        </button>
        
      </div>

      {modal ? <Modal id={modalId} /> : ""}
    </div>
  );
};

export default AllToys;
