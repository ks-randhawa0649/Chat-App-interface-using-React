import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Timer from "./pages/timer";

class Cq extends React.Component 
{
	render() 
    {
		return (
            <>
                <div>
                    <Link to="/"><h4>Home</h4></Link>
                    <Link to="/about"><h4>About</h4></Link>
                    <Link to="/timer"><h4>Timer</h4></Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/timer" component={Timer}/>
                </Switch>
            </>
		)
	}
}

ReactDOM.render(
	<BrowserRouter>
        <Cq/>
    </BrowserRouter>,
	document.getElementById('root')
);
