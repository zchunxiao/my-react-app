// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, // 路由模式为history
  //HashRouter as Router, // 路由模式为hash
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import routes from './router'

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to={{
                   pathname: "/help/2",
                   search: '?name=cedric',
                   hash: '#someHash',
                   state: { fromWechat: true }
                }} activeclassname="selected">帮助</Link>
              </li>
              <li>
                <NavLink to="/"  activeStyle={{
                                  fontWeight: 'bold',
                                  color: 'green'
                                }}>
                      首页
                </NavLink>
              </li>
              <li>
                <NavLink  to="/set"  activeStyle={{
                                  fontWeight: 'bold',
                                  color: 'green'
                                }}>
                  设置
                </NavLink>
              </li>
              <li>
                <Link to="/wallet/1" activeclassname="selected">钱包</Link>
              </li>
            </ul>
            
              {routes.map((route, i) => (
                <Switch  key={i}>
                  <Route {...route} exact/>
                  <Redirect to="/index" from='/' exact /> 
                </Switch>
              ))}
           
          </div>
        </Router>

    </div>
  );
}

export default App;
