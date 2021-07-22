import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import NoMatch from '../no-match/no-match';
import CodeView from '../code/code';
import AccountSettingsView from '../account-settings/account-settings';
import AccountConfirmView from '../account-confirm/account-confirm';
import SignInView from '../sign-in/sign-in';
import SignUpView from '../sign-up/sign-up';
import PasswordRecoverView from '../password-recover/password-recover';
import PasswordRecoverConfirmView from '../password-recover-confirm/password-recover-confirm';
import { ProblemsProvider } from '../../hooks/context/ProblemsContext';
import { UserProvider } from '../../hooks/context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <ProblemsProvider>
        <UserProvider>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/code' exact component={CodeView}></Route>
            <Route path='/account' exact component={AccountSettingsView}></Route>
            <Route path='/signin' exact component={SignInView}></Route>
            <Route path='/signup' exact component={SignUpView}></Route>
            <Route path='/signup/confirm/:id' exact component={AccountConfirmView}></Route>
            <Route path='/recover' exact component={PasswordRecoverView}></Route>
            <Route path='/recover/reset/:id' exact component={PasswordRecoverConfirmView}></Route>
            <Route path='/' component={NoMatch}></Route>
          </Switch>
        </UserProvider>
      </ProblemsProvider>
    </BrowserRouter>
  );
}

export default App;