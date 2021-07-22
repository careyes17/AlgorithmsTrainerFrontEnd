import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from "react-icons";
import { LANGUAGES, icons } from '../../lib/languages.jsx'
import useResizeObserver from "use-resize-observer";
import onClickOutside from 'react-onclickoutside'
import style from './language-selector.module.css';
import util from '../../style/util.module.css'

function LanguageSelector({ setLanguage, language }) {
  const [isHidden, setIsHidden] = useState(true)
  const { ref, height } = useResizeObserver();
  const languageSelectorHeight = useRef( {offsetHeight: 40} )
  const [iconHeight, setIconHeight] = useState(40)

  const handleLanguageOnClick = (language) => {
    console.log(language)
    setLanguage(language)
    setIsHidden(true)
  }

  useEffect(() => {
    if (languageSelectorHeight.current !== null) {
      setIconHeight(languageSelectorHeight.current.offsetHeight)
    }
  })

  LanguageSelector.handleClickOutside = () => setIsHidden(true);

  const DisplayIcons = () => {
    return Object.keys(LANGUAGES).map(function (language, index) {
      return (
        <IconContext.Provider key={language} value={{ size: `${iconHeight * 0.15}px`, style: { verticalAlign: 'middle' }, color: 'white' }}>
          <div key={language} className={style.icon} onClick={() => handleLanguageOnClick(LANGUAGES[language])}>
            {icons[LANGUAGES[language].id]}
          </div>
        </IconContext.Provider>
      )
    });
  }

  return (
    <div className={`${style.languageWrapper} ${util.noselect}`}>
      <span ref={ref} className={style.centerLanguage} onClick={() => setIsHidden(isHidden ? false : true)}>
        <div className={style.language}>
          <IconContext.Provider value={{ size: `${height * 0.80}px`, style: { verticalAlign: 'middle' }, color: 'white' }}>
            {icons[language.id]}
          </IconContext.Provider>
        </div>
        <div className={style.languageName}>
          {`${language.prettyName} ${language.version}`}
        </div>
      </span>
      <div ref={languageSelectorHeight} className={style.wrapper} hidden={isHidden}>
        <div className={style.innerWrapper}>
          <DisplayIcons />
        </div>
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => LanguageSelector.handleClickOutside
};

export default onClickOutside(LanguageSelector, clickOutsideConfig)
