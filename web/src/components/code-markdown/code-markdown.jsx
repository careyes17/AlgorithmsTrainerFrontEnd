import React from "react"
import ReactMarkdown from "react-markdown"
import CodeBlock from '../code-block/code-block'
import style from './code-markdown.module.css'

export default function CodeMarkdown({ content }) {
    return (
        <div className={style.wrapper}>
            <ReactMarkdown
                source={content}
                renderers={{ code: CodeBlock }}
            />
        </div>
    )
}