import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Australia from "./Australia";
import Turkey from "./Turkey";


 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title">Single Page Application</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li> {/** Navlink ==> digunakan untuk membuat anchor atau link **/}
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/australia">Australia</NavLink></li>
            <li><NavLink to="/turkey">Turkey</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/> {/** Route ==> digunakan untuk membaca url **/}
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/australia" component={Australia}/>
            <Route exact path="/turkey" component={Turkey}/>
          </div>
        </div>
        <ul className="footer">
            <li> <a href="https://www.w3schools.com/"> W3schools </a></li>
            <li> <a href="https://www.udemy.com/"> Udemy </a></li>
            <li> <a href ="https://sanbercode.com/"> Sanbercode </a></li>
            <li> <a href="https://www.dicoding.com/"> Dicoding </a></li>
        </ul>
      </HashRouter>
    );
  }
}
 
export default App;