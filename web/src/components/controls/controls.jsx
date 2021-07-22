import React, { useState } from 'react'
import style from './controls.module.css';
import util from '../../style/util.module.css'

const EMOJI = {
    SUCCESS: '✅',
    FAILED: '❌'
}

export default function Controls() {
    const [emoji, setEmoji] = useState(EMOJI.SUCCESS)

    return (
        <div className={style.wrapper}>
            <div className={style.flexWrapper}>
                <button className={style.button}>Submit</button>
                <button className={style.button}>Reset</button>
            </div>
            <div className={style.flexStatus}>
                <span className={`${style.status} ${util.noselect}`}><div className={style.flex}><span>Status:</span><span className={style.emoji}>{emoji}</span></div></span>
            </div>
        </div>
    );
}
