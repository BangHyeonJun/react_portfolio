import React, { Component, Fragment } from "react";
import BottomNav from "./components/BottomNavigation";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "routes/Home";
import Resume from "routes/Resume";
import Project from "routes/Project";
import Contact from "routes/Contact";
import PageTransition from "react-router-page-transition";

class App extends Component {
    style = {
        root: {}
    };

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />

                    <Route path="/" exact component={Home} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/project" component={Project} />
                    <Route path="/contact" component={Contact} />

                    <BottomNav />
                </Fragment>
            </Router>
        );
    }
}

export default App;
