import React from 'react';
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { HashRouter as Router, Route, NavLink, Redirect, Switch } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Home from "./Containers/Home/Home";
// import MyTasks from "./Containers/MyTasks/Mytasks"
import CompletedTask from "./Containers/CompletedTask/CompletedTask"
import './App.css';
import loadable from "react-loadable";
import Loader from "react-loader-spinner";
import Context from "../src/Context/Context";
import FormValidation from "../src/Containers/FormValidation/FormValidation";
import { withCookies } from "react-cookie";
import { Sidebar, Segment, Icon } from "semantic-ui-react";
import Menu from "./Components/Menu";
import { useState } from "react"
import Mytasks from './Containers/MyTasks/Mytasks';
import LoginPage from "../src/Containers/LoginPage/LoginPage"



function App() {

  const [state, changestate] = useState(
    false
  )


  function loading() {
    return <Loader className="center" type="Puff"
      color="#00BFFF"
      height="100"
      width="100" />
  }

  const ImportMyTask = loadable({
    loader: () => import("./Containers/MyTasks/Mytasks"),
    loading: loading
  })
  const ShowhideMenu = () => {
    let oldstate = state.ShowMenu
    changestate(!state)
    console.log("entered shohide", state)
  }
  const classdiv = {
    display: "flex",
    flexDirection: "row",

  }
  const navbarstyle = {
    backgroundColor: "rgb(52, 58, 64)",
    color: "blanchedalmond",
    fontFamily: "'Roboto', sans-serif",
  }
  const buttonStyle = {
    backgroundColor: "rgb(52, 58, 64)",
    color: "blanchedalmond",
    borderStyle: "none",
    outline: "none,",
    marginRight: "5px",

  }


  return (

    <div className="App">

      <Router>
        <Navbar style={navbarstyle} variant="dark">
          <Button style={buttonStyle} onClick={ShowhideMenu}><Icon name="bars"></Icon></Button>
          <Nav className="mr-auto">
            <div className="row">
              <NavLink style={navbarstyle} className="px-3" to="/">Login</NavLink>
              <NavLink style={navbarstyle} className="px-3" to="/Home">Home</NavLink>
              <NavLink style={navbarstyle} className="px-3" to="/Mytask">My task</NavLink>
              <NavLink style={navbarstyle} className="px-3" to="/CompletedTask">Completed Tasks</NavLink>
              <NavLink style={navbarstyle} className="px-3" to="/FormValidation">Form Validation</NavLink>
            </div>
          </Nav>
        </Navbar>
        <div style={classdiv}>
          <Menu show={state}></Menu>
          <Switch>
            <Route path="/" exact component={LoginPage} ></Route>
            <Route path="/Home" exact component={Home} ></Route>
            <Route path="/Mytask" component={ImportMyTask} ></Route>
            <Route path="/CompletedTask" exact component={CompletedTask} ></Route>
            <Route path="/FormValidation" exact component={FormValidation} ></Route>
            <Route component={ImportMyTask} ></Route>
          </Switch>



        </div>

      </Router>



    </div>




  );
}

export default withCookies(App);
