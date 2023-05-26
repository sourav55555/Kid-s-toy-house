import logo from '../../../assets/logo1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const Login = () => {

    const {logIn, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const navPath = location.state?.form?.pathname || '/';
    console.log(navPath);


    useEffect(()=>{
        document.title = "Kid's Toy | Login";
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


      useEffect(()=>{
        if(navPath !== "/"){
            Toast.fire({
                icon: 'warning',
                title: 'Please Login First'
            })
          }
      }, [])

      const handleGoogle = ()=>{
        googleLogin()
        .then(result => {Toast.fire({
            icon: 'success',
            title: 'Login successful.'
        })
        navigate(navPath);
        })
        .catch(error => {
            Toast.fire({
            icon: 'error',
            title: (error.message.split("(")[1]).slice(0,-1)
        })})
        }

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(form)

        logIn(email , password)
        .then(result => {Toast.fire({
            icon: 'success',
            title: 'Login successful.'
          })
          navigate(navPath);
          console.log(result)
        })
        .catch(error => {
            let errMsg = (error.message.split("(")[1]).slice(0,-1)
            Toast.fire({
            icon: 'error',
            title: errMsg
        })})
    }



    return (
        <div className="h-screen">
            <div className='flex flex-col md:flex-row items-center h-full md:w-9/12 mx-auto mt-8 justify-center gap-12 mb-24'>
                <div className="flex items-center gap-2 justify-center md:w-1/2">
                    <img className="w-32" src={logo} alt="" />
                    <h2 className="text-4xl font2 text-gray-600 font-bold">
                        Kid's <br /> Toy-House{" "}
                    </h2>
                </div>

                <div className='md:w-1/2'>

                    <div className='border-2 rounded-xl px-10 py-12 loginBg'>

                        <div className='flex gap-1 items-center justify-center mb-12'>
                            <img className='h-20' src="https://i.ibb.co/q1FKpZc/tumblr-18ffb16ad8c909b90784f05b0e3d65b9-e6d4533c-1280.png" alt="" />
                            <h2 className='font text-2xl font-semibold'>Please Login</h2>
                        </div>

                        {/* login form  */}
                        <form onSubmit={handleLogin} className='md:w-9/12 mx-auto mb-6'>

                            <div className='relative mb-8'>

                                <label className='py-3 absolute border-2 left-0 border-[#017a80] px-4 rounded-xl bg-[#017a80]' htmlFor=""><FontAwesomeIcon className="text-xl text-white" icon={faEnvelope}/></label>

                                <input className='py-3 outline-none border-2 rounded-xl border-l-0 ps-[70px] w-full border-[#017a80]' type="email" name="email" placeholder='Enter Email' id="" />
                            </div>

                            <div className='relative mb-8 text-right'>
                                <label htmlFor="" className='py-3 absolute border-2 left-0 border-[#017a80] px-4 rounded-xl bg-[#017a80]'><FontAwesomeIcon className="text-xl text-white" icon={faKey}/></label>
                                <input className='py-3 mb-2 outline-none border-2 rounded-xl border-l-0 ps-[70px] w-full border-[#017a80]' type="password" name="password" placeholder='Enter Password' id="" />
                                <a href="" className='text-red-700 underline ms-auto' >Forget Password?</a>
                            </div>

                            <div>
                                <input className='w-full cursor-pointer submit py-3 font-semibold text-white bg-[#017a80] rounded-lg' type="submit" value="Login" name="" id="" />
                            </div>

                        </form>

                        <div className='text-center my-4'>
                            <p className='text-black text-lg'>Don't have an account? Please <Link to="/user/register" className="font-semibold text-violet-600">Register</Link></p>
                        </div>

                        <div className="divider mb-6">OR</div>

                        <div className='w-3/4 mx-auto mt-4'>
                        
                            <button onClick={handleGoogle} className='w-full flex items-center justify-center gap-3 py-3 font-semibold text-white bg-[#017a80] rounded-lg submit'>Continue with google 
                            <img className='h-10' src="https://i.ibb.co/PWt90Hz/Pngtree-google-plus-black-andamp-3547796.png" alt="" />
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;