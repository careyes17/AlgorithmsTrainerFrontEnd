import React, { useEffect, useState } from "react";
import TextEditor from '../../components/text-editor/text-editor'
import OutputTabs from '../../components/output-tabs/output-tabs'
import Controls from '../../components/controls/controls'
import ProblemMarkdown from '../../components/problem-markdown/problem-markdown'
import useQuery from '../../hooks/useQuery';
import { useProblems } from '../../hooks/context/ProblemsContext'
import style from './problem-space.module.css'

export default function ProblemSpace({ language, problemId, setProblemId }) {
  const { id } = useQuery('id')
  const [selectedProblem, setSelectedProblem] = useState(undefined)
  const [problems,] = useProblems()

  useEffect(() => {
    if (setProblemId) setProblemId(parseInt(id) || -1)
  }, [])

  useEffect(() => {
    if (problems && problemId && problemId !== -1) setSelectedProblem(problems.filter(problem => problem.problemId === problemId)[0] || (() => {
      setProblemId(-1)
      return undefined
    }))
  }, [problems, problemId])

  return (
    <div className={style.wrapper}>
      <div className={style.flexWrapper}>
        <div className={style.problemWrapper}>
          <ProblemMarkdown problemId={problemId} selectedProblem={selectedProblem} />
        </div>
        <div className={style.editorWrapper}>
          <TextEditor language={language} selectedProblem={selectedProblem} />
        </div>
        <div className={style.testsWrapper}>
          <OutputTabs />
        </div>
        <div className={style.controlWrapper}>
          <Controls />
        </div>
      </div>
    </div>
  );
}
