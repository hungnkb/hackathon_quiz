import React, { useState } from 'react';
import axios from 'axios';
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

function Login() {
        const [username, setUsername] = useState();
        const [password, setPassword] = useState();
        const [status, setStatus] = useState(false);
        let handleLogin = async () => {
                let submitLogin = await axios({
                        method: 'post',
                        url: 'http://localhost:5000/api/auth/login',
                        data: {
                                username,
                                password,
                        }
                })
                if (submitLogin) {
                        setStatus(true)
                }
        }
        return (
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                        <label style={{ textAlign: "left" }}>Nhập tên</label>
                        <MDBInput onChange={e => setUsername(e.target.value)} wrapperClass='mb-4' id='form1' type='email' />
                        <label style={{ textAlign: "left" }}>Nhập mật khẩu</label>
                        <MDBInput onChange={e => setPassword(e.target.value)} wrapperClass='mb-4' id='form2' type='password' />



                        <MDBBtn onClick={e => handleLogin(e.target.value)} style={{ background: "blueviolet", height: 40 }} className="mb-4">Đăng nhập</MDBBtn>

                        <div className="text-center">
                                <p>Không phải là một thành viên ! <Link to={'/register'}>Đăng kí </Link></p>

                                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
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
                        {status && (<Navigate to="/" replace={true} />)}
                </div>
                </MDBContainer>
        );
}

export default Login;