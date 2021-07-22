import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import PasswordRecoverConfirm from '../../components/password-recover-confirm/password-recover-confirm';
import { useParams } from 'react-router-dom';
import style from './password-recover-confirm.module.css'
import util from '../../style/util.module.css'

export default function PasswordRecoverConfirmView() {
  const { id } = useParams();

  return (
    <React.Fragment>
      <NavBar showElements={{burger: false, profile: false, languageSelector: false}} />
      <PasswordRecoverConfirm id={id} />
    </React.Fragment>
  );
}
