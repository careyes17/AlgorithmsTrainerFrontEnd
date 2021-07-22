import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Redirect, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import style from './sign-in.module.css'
import util from '../../style/util.module.css'

export default function SignIn() {
    const [customError, setCustomError] = useState('');
    const { register, handleSubmit, errors } = useForm();

    const attemptSignIn = () => {

    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={style.root}>
            <div className={style.wrapper}>
                <div className={style.title}>AlgoTrainer</div>
                <div className={style.subtitle}>Sign In</div>
                <Form className={style.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label htmlFor="email" className={util.inputTitle}>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            id="email"
                            name="email"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email Address"
                                }
                            })} />
                        <div className={util.error}>
                            {errors.email && errors.email.message}
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password" className={util.inputTitle}>Password</Form.Label>
                        <Form.Control
                            type={"password"}
                            placeholder="password"
                            id="password"
                            name="password"
                            ref={register({
                                required: "Required",
                            })} />
                        <div className={util.error}>
                            {errors.password && errors.password.message}
                        </div>
                    </Form.Group>
                    <div className={style.linkGroup}>
                        <Link to={'/signup'} className={`${util.noselect} ${util.linkColor}`}>Create Account</Link>
                        <Link to={'/recover'} className={`${util.noselect} ${util.linkColor}`}>Forgot Password</Link>
                    </div>
                    <button className={`${style.submit} ${util.button}`} type="submit">Submit</button>
                </Form>
                <div className={customError && util.customError}>{customError}</div>
            </div>
        </div>
    );
}
