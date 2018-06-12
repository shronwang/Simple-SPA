import React, { Component } from 'react';
import './App.css';
import { Route , NavLink , HashRouter} from 'react-router-dom';
import IconBar from './IconBar';
import Home from './Home';
import Social from './Social';
import Finance from './Finance';
import World from './World';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <IconBar />
        <ul className="header">
          <li><NavLink to="/">首页</NavLink></li>
          <li><NavLink to="/social">社会</NavLink></li>
          <li><NavLink to="/finance">财经</NavLink></li>
          <li><NavLink to="/world">国际</NavLink></li>
        </ul>
        <div className="content">
           <Route exact path="/" component={Home} />
           <Route path="/social" component={Social} /> 
           <Route path="/finance" component={Finance} /> 
           <Route path="/world" component={World} />
        </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
