
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';

const Registration = () => {

    const {createUser, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const navPath = location.state?.form?.pathname || '/';

    useEffect(()=>{
      document.title = "Kid's Toy | Registration";
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

     

      const handleGoogle = ()=>{
        googleLogin()
        .then(result => {Toast.fire({
            icon: 'success',
            title: 'Account created successfully'
        })})
        .catch(error => {
          let errMsg = (error.message.split("(")[1]).slice(0,-1)
          Toast.fire({
          icon: 'error',
          title: errMsg
      })})
        }

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log({name, email, password, photo})

        createUser(email, password)
        .then(result => {
            updateProfile(result.user, {
                displayName: name, photoURL: photo
            })
            .then(result => {Toast.fire({
                icon: 'success',
                title: 'Account created successfully'
              })
              navigate(navPath);
            })
        })
        .catch(error => {
          let errMsg = (error.message.split("(")[1]).slice(0,-1)
          Toast.fire({
          icon: 'error',
          title: errMsg
        })})
    }

  return (
    <div className="h-screen  mt-20">
      <div className="flex items-center h-full w-11/12 mx-auto mt-8 justify-center gap-12">
        <div className="md:w-9/12">
          <div className="border-2 rounded-xl px-0 md:px-16 py-12 loginBg">

            <div className="flex gap-1 items-center justify-center mb-12">
              <img
                className="h-20"
                src="https://i.ibb.co/q1FKpZc/tumblr-18ffb16ad8c909b90784f05b0e3d65b9-e6d4533c-1280.png"
                alt=""
              />
              <h2 className="font text-2xl font-semibold">Create An Account</h2>

            </div>

            {/* registration form  */}
            <form onSubmit={handleRegister} className="w-full mx-auto mb-6 p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

                  <div className="relative">
                    <label
                      className="py-3 absolute border-2 left-0 border-[#017a80] px-4 rounded-xl bg-[#017a80]"
                      htmlFor=""
                    >
                      <FontAwesomeIcon
                        className="text-xl text-white"
                        icon={faUser}
                      />
                    </label>

                    <input
                      className="py-3 outline-none border-2 rounded-xl border-l-0 ps-[70px] w-full border-[#017a80]"
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                      id=""
                    />
                  </div>

                  <div className="relative">
                    <label
                      className="py-3 absolute border-2 left-0 border-[#017a80] px-4 rounded-xl bg-[#017a80]"
                      htmlFor=""
                    >
                      <FontAwesomeIcon
                        className="text-xl text-white"
                        icon={faEnvelope}
                      />
                    </label>

                    <input
                      className="py-3 outline-none border-2 rounded-xl border-l-0 ps-[70px] w-full border-[#017a80]"
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      id=""
                    />
                  </div>

                  <div className="relative">
                    <label
                      className="py-3 absolute border-2 left-0 border-[#017a80] px-4 rounded-xl bg-[#017a80]"
                      htmlFor=""
                    >
                      <FontAwesomeIcon
                        className="text-xl text-white"
                        icon={faCameraRetro}
                      />
                    </label>

                    <input
                      className="py-3 outline-none border-2 rounded-xl border-l-0 ps-[70px] w-full border-[#017a80]"
                      type="url"
                      name="photo"
                      placeholder="Enter Photo Url"
                      id=""
                    />
                  </div>

                  <div className="relative text-right">
                    <label
                      htmlFor=""
                      className="py-3 absolute border-2 left-0 border-[#017a80] px-4 rounded-xl bg-[#017a80]"

                    >
                      <FontAwesomeIcon
                        className="text-xl text-white"
                        icon={faKey}
                      />
                    </label>
                    <input
                      className="py-3 mb-2 outline-none border-2 rounded-xl border-l-0 ps-[70px] w-full border-[#017a80]"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      id=""
                    />

                  </div>

              </div>

              <div className="text-center">
                <input
                  className="cursor-pointer w-2/6 submit py-3 font-semibold text-white bg-[#017a80] rounded-lg"
                  type="submit"
                  value="Register"
                  name=""
                  id=""
                />
              </div>
            </form>
            <div className="text-center my-4">
              <p className="text-black text-lg">
                Already have an account? Please{" "}
                <Link
                  to="/user"
                  className="font-semibold text-violet-600"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="divider mb-6">OR</div>
            <div className=" md:w-2/6 w-10/12 mx-auto mt-4">
              <button onClick={handleGoogle} className="w-full flex items-center justify-center gap-3 py-3 font-semibold text-white bg-[#017a80] rounded-lg submit">
                Continue with google
                <img
                  className="h-10"
                  src="https://i.ibb.co/PWt90Hz/Pngtree-google-plus-black-andamp-3547796.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
