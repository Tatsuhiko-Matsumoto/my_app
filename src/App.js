import React from 'react';
import './App.css';
// import logo from './logo.svg';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

import { Auth } from 'aws-amplify';

function App() {
  Auth.currentCredentials().then(console.log);
  Auth.currentSession()
  .then(user => {
    const { payload } = user.getIdToken()
    if (payload && payload['cognito:groups'] ) {
      console.log(payload['cognito:groups'])
    }
  })

  return (
    <AmplifyAuthenticator>
    <AmplifySignIn
      slot="sign-in"
      headerText="GARDEN 審査サービス サインイン画面"
      submitButtonText="サインイン"
      formFields={[
        {
          type: "username",
          label: "サインインID *",
          placeholder: "ユーザ名を入力",
          required: true,
        },
        {
          type: "password",
          label: "パスワード *",
          placeholder: "パスワードを入力",
          required: true,
        },
      ]}
    />
    <div className="App">
      <header className="App-header">
        <h1>Hello from V12</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AmplifySignOut submitButtonText="サインアウト"></AmplifySignOut>
      </header>
    </div>
    </AmplifyAuthenticator>
  );
}

// export default App;
export default withAuthenticator(App);
