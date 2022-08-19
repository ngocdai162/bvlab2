import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const appBackground = "#2e1c48";
const formBackground = "#414b7d";
const buttonColor = "#634bff";
const textFont = '12px';
const textColor = '#bababa';
const whileColor = '#fff';
const textWeight = '400';
const heightModule = '40px';
const LoginStyled = styled.div`
    display: flex;
    justify-content: center ;
    align-items: center;
    padding: 20px;
    box-sizing: border-box ;
    background-color: ${appBackground} ;
    height: 100vh;
`;
const LoginMainStyled = styled.div`
    width: 40%;
    height: fit-content;
    padding-top: 50px;
    background-color: ${formBackground} ;
    h1 {
        margin-bottom:20px;
        color: ${whileColor};
        padding: 0 20px;
    }
`
const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column ;
    padding: 20px;
    
    label {
        width: 100%;
        margin-top: 10px;
        color: ${textColor};
        font-size: ${textFont};
    }
    input{
        width: 100%;
        margin-top: 10px;
        height: ${heightModule};
        padding: 10px;
        border-radius: 5px; ;
        border: 0px;
        outline:  none ;
        &:focus {
            background: #191c24;
        }
    }
    button {
        cursor: pointer;
        margin-top: 50px;
        background-color: ${buttonColor} ;
        color: ${whileColor};
        height: ${heightModule};
        border: none;
        border-radius: 10px;

    }
    .formit-errors {
        color: red;
        font-size: 12px;
    }
`;

const LoginPage = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues : {
            mail: "",
            password:"",
        },
        validationSchema:  Yup.object({
            mail : Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'please enter a valid mail'),
            password: Yup.string().required("Required").min(6, "must be 6 charaters"),
        }),
        
        onSubmit: (values) => {
            console.log(values)
            navigate('/home');
        }
    })
    return (
        <LoginStyled>
            <LoginMainStyled>
             <h1>Login</h1>
             <FormStyled onSubmit={formik.handleSubmit}>
                <label>Email</label>
                <input
                 type='text'
                 id='mail'
                 name='mail'
                 value={formik.values.mail}
                 onChange={formik.handleChange}
                 placeholder="Enter your email"
                 />
                 {formik.errors.mail
                 && (<p className="formit-errors">{formik.errors.mail}</p>)}

                <label>Password</label>
                <input
                 type='password'
                 id='password'
                 name='password'
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 placeholder="Enter your password"
                />
                {formik.errors.password
                 && (<p className="formit-errors">{formik.errors.password}</p>)}
                <button type = 'submit' className="primary-btn submit-btn">Submit</button>
            </FormStyled>
            </LoginMainStyled>
        </LoginStyled>
    )
}
export default LoginPage;