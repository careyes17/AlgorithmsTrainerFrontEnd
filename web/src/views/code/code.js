import React, { useState } from "react";
import ProblemSpace from '../../views/problem-space/problem-space.jsx'
import NavBar from '../../components/nav-bar/nav-bar'
import { LANGUAGES } from '../../lib/languages.jsx'
import useLocalStorage from "../../hooks/useLocalStorage.js";
import style from './code.module.css'

export default function CodeView() {
  const [problemId, setProblemId] = useState(undefined)
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage('selectedLanguage', LANGUAGES['PYTHON'])

  return (
    <React.Fragment>
      <NavBar language={selectedLanguage} setLanguage={setSelectedLanguage} setProblemId={setProblemId} />
      <ProblemSpace language={selectedLanguage?.codemirrorId} problemId={problemId} setProblemId={setProblemId} />
    </React.Fragment>
  );
}
