
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Loader from '../Components/Home/Shared/Loader/Loader';

const PrivateRout = ({children}) => {

    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <Loader/>
    }
   
    if(user){
        return children;
    }

    return (
        <Navigate to="/user" state={{form:location}} ></Navigate>
    );
};

export default PrivateRout;