import React, { useState} from "react";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import style from './password-recover-confirm.module.css'
import util from '../../style/util.module.css'

export default function PasswordRecoverConfirm({ id }) {
    const [submitted, setSubmitted] = useState(false)
    const [customError, setCustomError] = useState('');
    const { register, handleSubmit, watch, errors } = useForm();

    const attemptPasswordReset = () => {

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
                            <Form.Label htmlFor="password" className={util.inputTitle}>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="New Password"
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
                        <button className={`${style.submit} ${util.button}`} type="submit">Submit</button>
                    </Form>
                    <div className={`${customError && util.customError}`}>{customError}</div>
                </div>
                :
                <div className={style.wrapperSubmitted}>
                    <div className={style.resetSubmittedTitle}>Your Password Has Been Changed!</div>
                    <Link to={'/signin'} className={`${util.noselect} ${util.linkColor}`}>Sign In</Link>
                </div>
            }
        </div>
    );
}
