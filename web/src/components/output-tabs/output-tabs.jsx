import React, { useState, useRef } from 'react'
import useHover from '../../hooks/useHover'
import TestCases from '../test-cases/test-cases'
import ConsoleOutput from '../console-output/console-output'
import style from './output-tabs.module.css';
import util from '../../style/util.module.css'

const tabLabel = {
  testcases: 0,
  console: 1,
  testcase: 2
}

export default function OutputTabs() {
  const [ref, hovered] = useHover()
  const lastTab = useRef(tabLabel.testcases)
  const [selectedTab, setSelectedTab] = useState(tabLabel.testcases)
  const [testTabHidden, setTestTabHidden] = useState(true)
  const [selectedTestCase, setSelectedTestCase] = useState()

  const examplePythonConsoleOutput =
    `Traceback (most recent call last):
        File "transformerB3.py", line 8, in places = find_burrito_joints(criteria)
        File "/Users/amax/python-exception-logging-patterns/openburrito.py", line 7, in find_burrito_joints raise BurritoCriteriaConflict openburrito.BurritoCriteriaConflict
    The above exception was the direct cause of the following exception:
    Traceback (most recent call last):
        File "transformerB3.py", line 11, in raise NoMatchingRestaurants(criteria) from err myexceptions.NoMatchingRestaurants: {'region': 'Chiapas'}`

  const selectTestCaseTab = () => {
    lastTab.current = selectedTab
    setSelectedTab(tabLabel.testcase)
  }

  const tabs = {
    0: <TestCases setTestTabHidden={setTestTabHidden} setSelectedTestCase={setSelectedTestCase} selectTestCaseTab={selectTestCaseTab} />,
    1: <ConsoleOutput text={examplePythonConsoleOutput} />,
    2: <ConsoleOutput text={`#${selectedTestCase?.id}\nExpected: 2, Result: 3`} />
  }

  const handleCloseTestCase = (e) => {
    e.stopPropagation()
    setTestTabHidden(true)
    if (selectedTab === tabLabel.testcase) setSelectedTab(lastTab.current)
  }

  const handleTabClick = (tabIndex) => {
    if (selectedTab !== tabLabel.testcase) lastTab.current = selectedTab
    setSelectedTab(tabIndex)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tabs}>
        <span className={`${style.tab} ${util.noselect}`} onClick={() => handleTabClick(tabLabel.testcases)}><span>Test Cases</span></span>
        <div className className={style.verticalBar}/>
        <span className={`${style.tab} ${util.noselect}`} onClick={() => handleTabClick(tabLabel.console)}><span>Console</span></span>
        {!testTabHidden && <div className className={style.verticalBar}/>}
        <span className={`${style.tab} ${util.noselect}`} style={testTabHidden ? { display: 'none' } : {}} onClick={() => handleTabClick(tabLabel.testcase)}>
          <div className={style.center}>
            {selectedTestCase?.title}
            <div ref={ref} className={style.hide} onClick={(e) => handleCloseTestCase(e)}>{hovered ? '×' : ''}
            </div>
          </div>
        </span>
      </div>
      {tabs[selectedTab]}
    </div>
  );
}
