import React from "react";
import NavBar from '../../components/nav-bar/nav-bar'
import AccountSettings from '../../components/account-settings/account-settings'
import style from './account-settings.module.css'

export default function AccountSettingsView() {
  return (
    <React.Fragment>
      <NavBar />
      <AccountSettings />
    </React.Fragment>
  );
}
