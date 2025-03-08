import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const RouteProtector = ({element}) => {
    const navigate = useNavigate();

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication =  () => {
        const token =  localStorage.getItem('token');
        const userData =  localStorage.getItem('userData');

        if (token) {
            return;
        } else {
            localStorage.removeItem('userData');
            localStorage.removeItem('userData');
            navigate('/');
        }
    };

    return element;
}

export default RouteProtector
