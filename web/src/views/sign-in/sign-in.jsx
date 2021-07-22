import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import SignIn from '../../components/sign-in/sign-in'
import style from './sign-in.module.css'
import util from '../../style/util.module.css'

export default function SignInView() {
  return (
    <React.Fragment>
      <NavBar showElements={{burger: false, signIn: false, profile: false, languageSelector: false}} />
      <SignIn />
    </React.Fragment>
  );
}
