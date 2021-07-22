import React from 'react'
import style from './test-cases.module.css';
import util from '../../style/util.module.css';

export default function TestCases({ setTestTabHidden, setSelectedTestCase, selectTestCaseTab }) {

  const cases = [
    { title: 'Test 1', id: 1 },
    { title: 'Test 2', id: 2 },
    { title: 'Test 3', id: 3 },
    { title: 'Test 4', id: 4 },
    { title: 'Test 5', id: 5 },
    { title: 'Test 6', id: 6 },
    { title: 'Test 7', id: 7 },
    { title: 'Test 8', id: 8 },
    { title: 'Test 9', id: 9 },
    { title: 'Test 10', id: 10 },
    { title: 'Test 11', id: 11 },
  ]

  const handleTestCaseClick = (testcase) => {
    setSelectedTestCase(testcase)
    setTestTabHidden(false)
    selectTestCaseTab()
  }

  const TestCases = () => {
    return cases.map(function (testcase) {
      return <div className={`${style.testCase} ${util.noselect} ${style.successCase}`} key={testcase.id} onClick={() => handleTestCaseClick(testcase)}>{testcase.title}</div>
    })
  }

  return (
    <div className={style.wrapper}>
      <TestCases />
    </div>
  );
}
