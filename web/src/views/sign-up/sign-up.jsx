import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import SignUp from '../../components/sign-up/sign-up'
import style from './sign-up.module.css'
import util from '../../style/util.module.css'

export default function SignUpView() {
  return (
    <React.Fragment>
      <NavBar showElements={{burger: false, profile: false, languageSelector: false}}/>
      <SignUp />
    </React.Fragment>
  );
}
