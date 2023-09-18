import React from 'react';
import './Error.css'
import errorPage from './errorPage.jpg'

const Error = () =>{
    return(

        <div className='container-fluid'>
            <img className="errorImg mt-5" src={errorPage} alt="Page Not Found"/>
            <h2 className='text-dark'> Page Not Found</h2>
        </div>

    );
}

export default Error;