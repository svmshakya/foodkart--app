import './App.css';
import { Route } from 'react-router-dom'
import Login from './component/Login/Login';
import Verify from './component/Verify/Verify';
import Welcome from './component/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/verify" component={Verify} />
      <Route path="/welcome" component={Welcome} />
    </div>
  );
} 

export default App;
