import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import AccountConfirm from '../../components/account-confirm/account-confirm'
import style from './account-confirm.module.css'
import util from '../../style/util.module.css'

export default function AccountConfirmView() {

  return (
    <React.Fragment>
      <NavBar showElements={{burger: false, profile: false, languageSelector: false}}/>
      <AccountConfirm />
    </React.Fragment>
  );
}