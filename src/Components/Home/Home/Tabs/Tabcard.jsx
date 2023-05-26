import "./card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Modal from "../../Shared/Modal/Modal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Tabcard = ({card , index}) => {

    const {user} = useContext(AuthContext);
    const [modalId, setModalId] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        if(user){
            setModal(true);
        }
    }, [user])


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

    const handleModal = ()=>{
        if(!modal){

            Toast.fire({
                icon: 'warning',
                title: 'Please Login First'
            })
          navigate("/user", {state: {form: location}});
          console.log("no user");
        }
        setModalId(card._id);
      }

    const { image, price, rating, toyName } = card
    return (
        <div className="relative card-shadow rounded-xl" data-aos="fade-up" data-aos-duration="300" data-aos-anchor-placement="center-bottom">
            
            <div className="text-white flex items-center md:gap-6 gap-4 border-2 md:p-6 p-4 h-52 bg-[url('https://i.ibb.co/dJFDj94/Daco-612923.png')] bg-no-repeat customCard rounded-xl">
            <img className="md:w-48 w-32 md:h-full h-fit rounded-xl z-20" src={image} alt="" />
            <div className="z-20 text-left flex-grow">
                <h3 className="md:text-2xl text-xl font font-semibold mb-1 md:mb-2">{toyName}</h3>
                <p className="font-semibold mb-1 md:mb-3">Price: {price}$</p>
                <p className="flex items-center gap-1 mb-4">( <FontAwesomeIcon className="text-yellow-400 text-lg" icon={faStar}/>  {rating} ) </p>

                <label htmlFor={`${modal ? `my-modal-${index}` : ""}`} onClick={()=>handleModal()} className="md:px-3 px-2 py-2 rounded-xl bg-[#3becf6ea] text-gray-900 md:font-semibold">View Details</label>

            </div>
            </div> 
            
            <div className="absolute top-0 left-0 h-full w-full bg-[rgba(32,63,63,0.9)] rounded-xl z-0"></div>
            {
                modal ? <Modal id={modalId} index={index}/> : "" 
            }
        </div>
    );
};

export default Tabcard;