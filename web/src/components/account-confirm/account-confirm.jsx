import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom'
import style from './account-confirm.module.css'
import util from '../../style/util.module.css'

export default function AccountConfirm() {
    const { id } = useParams();
    const [created, setCreated] = useState(undefined);

    const Form = () => {
        if (id !== undefined && created === true) {
            return (
                <>
                    <div className={style.title}>Account has been created!</div>
                    <Link to={'/signin'} className={`${util.noselect} ${util.linkColor}`}>Sign In</Link>
                </>
            )
        } else if (id !== undefined && created !== undefined) {
            return (
                <>
                    <div className={style.title}>Account creation request was not able to be processed.</div>
                    <Link to={'/signup'} className={`${util.noselect} ${util.linkColor}`}>Sign Up</Link>
                </>
            )
        } else {
            return (
                <>
                    <p className={style.title}>Something went wrong.</p>
                    <p className={style.subtitle}>Please try refreshing the page.</p>
                </>
            )
        }
    }

    return (
        <div className={style.root}>
            <div className={style.wrapper}>
                <Form></Form>
            </div>
        </div>
    );
}
