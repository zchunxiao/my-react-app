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
// import Son from './son';//引入子组件
// import {createContext} from 'react'

import Counter from './components/Counter'
let name ="小人头1"
//export const {Provider,Consumer} = createContext("默认名称");

function App() {
  return (
    <div className="App">
        {/* <Provider value={name}> */}
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
            <Counter/>
            {/* <p>父组件定义的值:{name}</p>
                      <Son /> */}
            </div>
          </Router>
        {/* </Provider> */}
    </div>
  );
}

export default App;
