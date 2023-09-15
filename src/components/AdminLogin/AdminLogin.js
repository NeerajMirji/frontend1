import React from 'react'
// import user_icon from "../Assets/person.png"
// import password_icon from "../Assets/password.png"

import './AdminLogin.css'
const AdminLogin = () => {

    return (
    <div className='AdminLogincontainer'>
        <div className='AdminLoginheader'>
            <div className='AdminLogintext'>Admin Login</div>
            <div className='AdminLoginunderline'></div>

        </div>
        <div className='AdminLogininputs'>
            <div  className='AdminLogininput'>
                {/* <img src={user_icon} alt='user_icon' /> */}
                <input type='text' placeholder='Username'/>

            </div>
            <div  className='AdminLogininput'>
                {/* <img src={password_icon} alt='password_icon' /> */}
                <input type='password' placeholder='password'/>

            </div>      
        </div>
        <div className='AdminLoginforgot_password'>Forgot password? <span>Click Here!</span></div>
        <div className='AdminLoginsubmit_container' >
            <div className='AdminLoginsubmit'>Login</div>
        </div>

    </div>
    )
}

export default AdminLogin;