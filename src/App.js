import React from 'react';
import './App.css';
import logo from './logo.svg';
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
      headerText="GARDEN審査サービス サインイン画面"
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
    <AmplifyForgotPassword
        slot="forgot-password"
        headerText="パスワードを忘れた"
        usernameAlias="email"
        formFields={[
          {
            type: "username",
            label: "ユーザ名を入力してください",
            placeholder: "ユーザ名",
          },
        ]}
        sendButtonText="送信"
        submitButtonText="送信"
      />
      <AmplifySignUp
        slot="sign-up"
        headerText="GARDEN審査サービス サインアップ"
        haveAccountText=""
        signInText="サインインに戻る"
        submitButtonText="アカウント作成"
        formFields={[
          {
            type: "username",
            label: "ユーザ名を入力してください",
            placeholder: "ユーザ名",
          },
          {
            type: "email",
            label: "メールアドレスを入力してください",
            placeholder: "メールアドレス",
          },
          {
            type: "password",
            label: "パスワードを入力してください",
            placeholder: "パスワード",
            inputProps: { required: true, autocomplete: "new-password" },
          },
        ]}
      />
      <AmplifyRequireNewPassword
        headerText="新しいパスワードを入力"
        submitButtonText="送信"
        slot="require-new-password"
      />
      <AmplifyConfirmSignUp headerText="確認コードを入力してください" submitButtonText="送信" slot="confirm-sign-up" />

    <div className="App">
      <header className="App-header">
        <h1>Hello from V14</h1>
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
        <button onClick={() => Auth.signOut()}>サインアウト</button>
      </header>
    </div>
    </AmplifyAuthenticator>
  );
}

// export default App;
export default withAuthenticator(App);
