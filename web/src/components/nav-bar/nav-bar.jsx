import React, { useEffect, useRef } from 'react';
import ProblemList from '../problem-list/problem-list';
import LanguageSelector from '../language-selector/language-selector';
import ProfileSelector from '../profile-selector/profile-selector';
import { useProblems } from '../../hooks/context/ProblemsContext';
import { Link } from 'react-router-dom';
import { ReactComponent as AlgoTrainerLogo } from '../../media/logo.svg';
import style from './nav-bar.module.css';
import util from '../../style/util.module.css';
import languageSelector from '../language-selector/language-selector';

export default function NavBar({ language, setLanguage, setProblemId, showElements }) {
  const { burger = true, logo = true, signIn = true, profile = true, languageSelector = true } = showElements || {}
  // const [user, ] = useUser() // TODO: USE THIS INSTEAD OF useRef
  const user = useRef(false) // TODO: REMOVE THIS, THIS IS JUST FOR UI TESTING
  const prblms = [
    { title: 'Problem #1', descriptionBody: '## This is the body of problem #1\n > this is something', codeBody: { 'text/x-python': 'def prob1():' }, completed: true, problemId: 1 },
    { title: 'Problem #2', descriptionBody: '## This is the body of problem #2\n ### something', codeBody: { 'text/x-python': 'def prob2():' }, completed: true, problemId: 2 },
    { title: 'Problem #3', descriptionBody: '## This is the body of problem #3\n - something something\n- something', codeBody: { 'text/x-python': 'def prob3():' }, completed: true, problemId: 3 },
    { title: 'Problem #4', descriptionBody: '## This is the body of problem #4\n also an example', codeBody: { 'text/x-python': 'def prob4():' }, completed: true, problemId: 4 },
    { title: 'Problem #5', descriptionBody: '## This is the body of problem #5\n > this is something again', codeBody: { 'text/x-python': 'def prob5():' }, completed: true, problemId: 5 },
    { title: 'Problem #6', descriptionBody: '## This is the body of problem #6\n #### example something', codeBody: { 'text/x-python': 'def prob6():' }, completed: true, problemId: 6 },
    { title: 'Problem #7', descriptionBody: '## This is the body of problem #7\n > some more example', codeBody: { 'text/x-python': 'def prob7():' }, completed: true, problemId: 7 },
    { title: 'Problem #8', descriptionBody: '## This is the body of problem #8\n - super\n - duper', codeBody: { 'text/x-python': 'def prob8():' }, completed: true, problemId: 8 },
    { title: 'Problem #9', descriptionBody: '## This is the body of problem #9\n really an example', codeBody: { 'text/x-python': 'def prob9():' }, completed: true, problemId: 9 },
    { title: 'Problem #10', descriptionBody: '## This is the body of problem #10\n ## Another example! Boom', codeBody: { 'text/x-python': 'def prob10():' }, completed: true, problemId: 10 },
    { title: 'Problem #11', descriptionBody: '## This is the body of problem #11\n Some example\n > example something', codeBody: { 'text/x-python': 'def prob11():' }, completed: true, problemId: 11 },
    { title: 'Problem #12', descriptionBody: '## This is the body of problem #12\n This is a very good example', codeBody: { 'text/x-python': 'def prob12():' }, completed: true, problemId: 12 }
  ]

  const [problems, setProblems] = useProblems()

  useEffect(() => {
    setProblems(prblms)
  }, [])

  return (
    <nav className={style.wrapper}>
      <div className={style.flexLeft}>
        {burger && <ProblemList setProblemId={setProblemId} />}
        {logo && <Link to={`/`} className={style.link}><AlgoTrainerLogo className={style.svgLogo} /></Link>}
      </div>
      <div className={style.flexRight}>
        {user && signIn && <Link to={`/signin`} className={`${util.anchor} ${util.noselect} ${style.linkSize}`}><button className={style.signIn}>Sign In</button></Link>}
        {!user && profile && <ProfileSelector />}
        {languageSelector && language && setLanguage && <LanguageSelector setLanguage={setLanguage} language={language} />}
      </div>
    </nav>
  );
}
