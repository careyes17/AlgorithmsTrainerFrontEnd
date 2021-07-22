import React, { useState} from "react";
import { useForm } from 'react-hook-form'
import { Redirect, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import style from './sign-up.module.css'
import util from '../../style/util.module.css'

export default function SignUp() {
    const [submitted, setSubmitted] = useState(false)
    const [customError, setCustomError] = useState('');
    const { register, handleSubmit, watch, errors } = useForm();

    const attemptSignUp = () => {

    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={style.root}>
            {!submitted ?
                <div className={style.wrapper}>
                    <div className={style.title}>AlgoTrainer</div>
                    <div className={style.subtitle}>Sign Up</div>
                    <Form className={style.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label htmlFor="username" className={util.inputTitle}>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="username"
                                id="username"
                                name="username"
                                ref={register({
                                    required: "Required",
                                    minLength: {
                                        value: 2,
                                        message: "Usernames must be at least 2 characters long"
                                    },
                                    maxLength: {
                                        value: 24,
                                        message: "Usernames must not be longer than 24 characters long"
                                    },
                                    pattern: {
                                        value: /^[a-z0-9]+$/i,
                                        message: "Usernames must only contain letters and numbers"
                                    }
                                })} />
                            <div className={util.error}>
                                {errors.username && errors.username.message}
                            </div>
                        </Form.Group>
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
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                ref={register({
                                    required: "Required",
                                    minLength: {
                                        value: 8,
                                        message: "Passwords need to be at least 8 characters long"
                                    },
                                    pattern: {
                                        value: /(?:[A-Z].*[0-9])|(?:[0-9].*[A-Z])/,
                                        message: "At least one upper case letter and a digit required"
                                    }
                                })} />
                            <div className={util.error}>
                                {errors.password && errors.password.message}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="passwordValidation" className={util.inputTitle}>Rewrite Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Rewrite password"
                                id="passwordValidation"
                                name="passwordValidation"
                                ref={register({
                                    required: "Required",
                                    validate: (value) => {
                                        return value !== watch('password') ? "The password fields don't match" : undefined
                                    }
                                })} />
                            <div className={util.error}>
                                {(errors.passwordValidation && !errors.password) && errors.passwordValidation.message}
                            </div>
                        </Form.Group>
                        <div className={style.linkGroup}>
                            <Link to={'/signin'} className={`${util.noselect} ${util.linkColor}`}>Sign In Instead</Link>
                        </div>
                        <button className={`${style.submit} ${util.button}`} type="submit">Submit</button>
                    </Form>
                    <div className={customError && util.customError}>{customError}</div>
                </div>
                :
                <div className={style.wrapperSubmitted}>
                    <div className={style.accountCreatedTitle}>Confirmation Email Sent!</div>
                    <Link to={'/'} className={`${util.noselect} ${util.linkColor}`}>Home</Link>
                </div>
            }
        </div>
    );
}
