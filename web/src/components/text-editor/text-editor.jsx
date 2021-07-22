import React, { useEffect, useState } from "react";
import { Controlled as ControlledEditor } from 'react-codemirror2'
import useLocalStorage from '../../hooks/useLocalStorage'
import style from './text-editor.module.css';

// language modes
// https://codemirror.net/mode/
import 'codemirror/mode/python/python'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/clojure/clojure'
import 'codemirror/mode/php/php'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/go/go'
import 'codemirror/mode/vb/vb'
import 'codemirror/mode/shell/shell'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/perl/perl'
import 'codemirror/mode/rust/rust'

// adding languages in clike
//https://stackoverflow.com/a/62099020
import 'codemirror/mode/clike/clike'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ayu-dark.css'

export default function TextEditor({ language, selectedProblem }) {
  const [key, setKey] = useState(undefined)
  const [code, setCode] = useLocalStorage(key, selectedProblem?.codeBody[language])

  useEffect(() => {
    if (selectedProblem) {
      setKey(`${language}_${selectedProblem.problemId}`)
    } else {
      setKey(undefined)
    }
  }, [selectedProblem, language])

  const handleChange = (editor, data, value) => {
    setCode(value)
    console.log(value)
  }

  return (
    <ControlledEditor
      onBeforeChange={handleChange}
      value={code}
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: 'ayu-dark',
        lineNumbers: true,
        readOnly: selectedProblem ? false : true
      }} />
  );
}
