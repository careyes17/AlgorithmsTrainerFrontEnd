import React, { useState, useEffect, useRef } from 'react'
import { CgProfile } from 'react-icons/cg';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'
import CodeMarkdown from '../code-markdown/code-markdown'
import style from './account-settings.module.css';
import util from '../../style/util.module.css'

export default function AccountSettings() {
    const paginationOffset = useRef(0)
    const [solvedProblems, setSolvedProblems] = useState([{ id: 0, body: "```py\nfor in range(15)\n```", title: "Problem #1" }, { id: 1, body: "```js\nconst i = 55555555555555555555555555555555555555555555555555555555555555\n```", title: "Problem #2" }])
    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;

        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;

        const pixelsFromTheBottom = 10

        if (scrollTop + window.innerHeight + pixelsFromTheBottom >= scrollHeight) {
            // console.log('bottom?')
            setIsBottom(true);
        }
    }

    const getMoreSolvedProblems = () => {
        // api call to get problems
        // append problems to solvedProblems
        //      setSolvedProblems = [...solvedProblems, ...newProblems]

        // increment paginationOffset ref
    }

    useEffect(() => {
        if (isBottom) {
            console.log('boom')

            // set is bottom false IN THE API FETCH METHOD, not here
            // if there are no more pagination to load, do not change setIsBottom to false, keep it true
            setIsBottom(false)
        }
    }, [isBottom])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

        // initial API call to get first page of paginated solved problems
        // increment paginationOffset ref
    }, []);

    const ProblemComponent = ({ problem }) => {
        return (
            <>
                <Title text={problem.title} />
                <CodeMarkdown content={problem.body} />
            </>
        )
    }

    const DisplaySolvedProblems = () => {
        if (solvedProblems.length === 0) return <div></div>
        else return solvedProblems.map((problem) => {
            return <ProblemComponent key={problem.id} problem={problem} />
        })
    }

    const Title = ({ text }) => {
        return <div className={style.problemTitle}><div className={style.leftTextPad}>{text}</div></div>
    }

    const Content = ({ title, content }) => {
        return (
            <>
                <Title text={title} />
                <div className={style.content}><span>{content}</span></div>
            </>
        )
    }

    return (
        <div className={style.root}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <div className={style.profileIcon}>
                        <IconContext.Provider value={{ size: "45px", style: { verticalAlign: 'middle' }, color: 'white' }}>
                            <CgProfile />
                        </IconContext.Provider>
                    </div>
                    <div className={style.accountUsername}>
                        <span>Username</span>
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style.contentWrapper}>
                        <Content title={'Email'} content={'example@email.com'} />
                        <Content title={'Problems Solved'} content={7} />
                        <Content title={'Number of Languages Used'} content={3} />
                        <Link to={'/recover'} className={`${util.noselect} ${style.link}`}>Reset Password</Link>
                    </div>
                </div>
                <div className={style.problems}>
                    <DisplaySolvedProblems />
                </div>
                <button className={`${style.loadMore} ${util.button}`}>Show More</button>
            </div>
        </div>
    );
}