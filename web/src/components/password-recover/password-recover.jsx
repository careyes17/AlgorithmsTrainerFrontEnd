import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Redirect, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import style from './password-recover.module.css'
import util from '../../style/util.module.css'

export default function RecoverPassword() {
    const [submitted, setSubmitted] = useState(false);
    const [customError, setCustomError] = useState('');
    const { register, handleSubmit, errors } = useForm();

    const attemptResetSubmission = (data) => {

    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={style.root}>
            {!submitted ?
                <div className={style.wrapper}>
                    <div className={style.title}>Password Reset</div>
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
                        <button className={`${style.submit} ${util.button}`} type="submit">Submit</button>
                    </Form>
                    <div className={customError && util.customError}>{customError}</div>
                </div>
                :
                <div className={style.wrapperSubmitted}>
                    <div className={style.resetSubmitted}>Reset Email Sent!</div>
                    <Link to={'/'} className={`${util.noselect} ${util.linkColor}`}>Home</Link>
                </div>
            }
        </div>
    );
}
