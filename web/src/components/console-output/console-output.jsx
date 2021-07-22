import React, { useEffect, useState } from 'react'
import style from './console-output.module.css';
import util from '../../style/util.module.css'

export default function ConsoleOutput({ text }) {
    const [output, setOutput] = useState(text)

    useEffect(() => {
        setOutput(text)
    }, [text])

    return (
        <div className={style.wrapper}>
            <pre className={style.text}>{output}</pre>
        </div>
    );
}
