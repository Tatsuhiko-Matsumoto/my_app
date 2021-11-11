import logo from './logo.svg';
import './App.css';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
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
    <div className="App">
      <header className="App-header">
	<h1>Hello from V9</h1>
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
        <AmplifySignOut />
      </header>
    </div>
  );
}

// export default App;
export default withAuthenticator(App);
