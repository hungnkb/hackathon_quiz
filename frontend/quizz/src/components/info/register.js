import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function Register() {
    const [register, setRegister] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState(false);

    let handleRegister = async () => {
        let newUser = await axios({
            method: 'post',
            url: 'http://localhost:5000/api/auth/register',
            data: {
                username,
                password,
            }
        })
        console.log(newUser);
        if (newUser) {
            setStatus(true);
        } else {
            console.log('Register error');
        }
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <label style={{ textAlign: "left" }}>Nhập tên </label>
            <MDBInput onChange={e => (setUsername(e.target.value))} wrapperClass='mb-4' id='form1' type='email' />
            <label style={{ textAlign: "left" }}>Nhập mật khẩu</label>
            <MDBInput onChange={e => (setPassword(e.target.value))} wrapperClass='mb-4' id='form2' type='password' />

            <MDBBtn onClick={handleRegister} style={{ background: "blueviolet", height: 40 }} className="mb-4">Đăng kí</MDBBtn>

            <div className="text-center">
                <p> <Link to={'/login'} > Quay lại đăng nhâp </Link></p>
                <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm" />
                    </MDBBtn>

                </div>
            </div>
            <div>
                {status && (
                    <Navigate to='/login' replace={true}/>
                )}
            </div>

        </MDBContainer>
    );
}

export default Register;