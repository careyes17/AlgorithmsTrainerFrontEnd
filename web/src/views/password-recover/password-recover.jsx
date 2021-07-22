import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import RecoverPassword from '../../components/password-recover/password-recover'
import style from './password-recover.module.css'
import util from '../../style/util.module.css'

export default function RecoverPasswordView() {

  return (
    <React.Fragment>
      <NavBar showElements={{burger: false, languageSelector: false}}/>
      <RecoverPassword />
    </React.Fragment>
  );
}

