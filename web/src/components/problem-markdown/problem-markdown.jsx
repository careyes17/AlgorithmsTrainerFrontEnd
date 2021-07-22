import React from 'react'
import ReactMarkdown from 'react-markdown'
import style from './problem-markdown.module.css';

export default function ProblemMarkdown({ problemId, selectedProblem }) {
    // TODO: remove this temporary body variable used for testing
    const tempBody =
        `This is some text describing the problem. This is
problem #1, which is the first problem that you will
likely be completing.

Here's a code example to help you out:

~~~~
const a = 'some text'
~~~~

## Optional Instructions

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna vitae lectus lacinia malesuada. Sed condimentum auctor interdum. In commodo tempus arcu, quis rutrum ante aliquam sed. Praesent mollis, quam ac venenatis viverra, purus tellus tincidunt urna, vel egestas ante nibh eu erat. Mauris a massa ac magna consectetur mattis. In quis nibh congue, vulputate quam non, elementum erat. Proin ac congue enim, hendrerit dictum purus.

In tempus efficitur neque. Nunc aliquam, nunc sit amet mollis laoreet, odio dolor consequat turpis, accumsan posuere risus nisl ac augue. Donec ac aliquam leo. Vivamus neque est, facilisis in volutpat laoreet, porta at dolor. Sed nec efficitur nisl. Proin quis elit non sapien finibus bibendum. Nam at dui non nibh volutpat elementum. Integer euismod nisi in sollicitudin facilisis. Suspendisse vel ex libero. Mauris pharetra egestas pulvinar. In vitae massa aliquet, efficitur nisi vel, lobortis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel semper erat, ac dignissim dui. Integer sed diam tempor odio placerat fermentum ac non risus. In id orci a sapien commodo tempus eget et sem.

Aliquam quis elit eget neque tincidunt dictum. Nam semper nisl vel massa dapibus blandit. Nulla laoreet ante ut mi rutrum, ut consequat diam fringilla. Aliquam congue, nisl in facilisis vehicula, nulla eros commodo metus, ac hendrerit lacus nibh et purus. Curabitur eleifend, diam in vehicula tincidunt, dolor felis faucibus magna, eget vehicula tellus arcu vel nisl. Maecenas vel velit at purus consequat condimentum volutpat a ligula. Nulla sed erat sit amet arcu rutrum viverra. Pellentesque ultricies, urna ac aliquet iaculis, lacus tortor varius odio, ut hendrerit odio orci nec massa. Suspendisse potenti. Vivamus venenatis sagittis eros, eget vulputate urna hendrerit quis.

### List of Items

- Item #1
- Item #2
- Item #3`

    return (
        <div className={style.wrapper}>
            { problemId === -1 ?
                <ReactMarkdown children={`# 404\nInvalid problem selected. Please select another problem.`} />
                :
                (selectedProblem && <ReactMarkdown children={`# ${selectedProblem.title}\n\n${selectedProblem.descriptionBody}\n\n${tempBody}`} />)
            }
        </div>
    );
}
