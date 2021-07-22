import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import { Link } from "react-router-dom";
import { useProblems } from '../../hooks/context/ProblemsContext';
import onClickOutside from 'react-onclickoutside'
import style from './problem-list.module.css';
import util from '../../style/util.module.css'

function ProblemList({ setProblemId }) {
  const [isHidden, setIsHidden] = useState(true)
  const [problems,] = useProblems()

  ProblemList.handleClickOutside = () => setIsHidden(true);

  const selectProblem = (problemId) => {
    if (setProblemId) setProblemId(problemId)
    setIsHidden(true)
  }

  const DisplayProblems = () => {
    if (problems !== undefined) {
      return problems.map(function (problem) {
        return <Link
          className={util.anchor}
          to={`/code?id=${problem.problemId}`}
          key={problem.problemId}>
          <div className={`${style.problem} ${util.noselect}`} onClick={() => selectProblem(problem.problemId)}>{problem.title}<div className={style.floatRight}>{problem.completed && 'Completed'}</div></div>
        </Link>;
      })
    }
    return <div className={`${style.loading} ${util.noselect}`}>Loading...</div>
  }

  return (
    <div className={style.left}>
      <Hamburger
        label="Show problems"
        direction={'right'}
        color={'white'}
        toggled={!isHidden}
        toggle={() => setIsHidden(isHidden ? false : true)}
      />
      <div className={style.wrapper} hidden={isHidden}>
        <div className={style.innerWrapper}>
          <DisplayProblems />
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => ProblemList.handleClickOutside
};

export default onClickOutside(ProblemList, clickOutsideConfig)