import { Link } from 'react-router-dom';
import image from '../../assets/depositphotos_511461970-stock-illustration-concept-design-of-an-empty.webp';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>

            <img src={image} alt="" />
            <Link to="/" className='px-8 py-3 shadow-md hover:text-white transition-all duration-400 hover:bg-[#173030ea] shadow-black rounded-xl bg-[#3becf6ea] text-gray-900 font-semibold'>Back To Home</Link>
            
        </div>
    );
};

export default ErrorPage;