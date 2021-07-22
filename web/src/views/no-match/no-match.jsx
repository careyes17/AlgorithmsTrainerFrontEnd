import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import style from './no-match.module.css'
import util from '../../style/util.module.css'

export default function NoMatch() {
  return (
    <>
      <NavBar showElements={{ burger: false, languageSelector: false }} />
      <div className={style.wrapper}>
        <pre className={style.notFound}>404 | </pre>
        <pre className={style.notFoundSubtitle}>Page Not Found</pre>
      </div>
    </>
  );
}

