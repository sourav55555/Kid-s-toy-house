import { RotateSpinner } from "react-spinners-kit";

const Loader = () => {
    let loading = true;
    return (
        <div className="h-28 w-fit flex items-center justify-center mx-auto">
            <RotateSpinner size={50} color="#0c777c" loading={loading}/>
 
        </div>
    );
};

export default Loader;