import React, { Component } from "react";
// import ShowTodos from "./components/ShowTodos";
import Groups from './components/Groups'

// import axios from "axios";

class LandingScreen extends Component {
    state = {

    };

    componentDidMount() {
        // this.refresh();
        console.log("Mounted")
    }

    // ! In order to reference older code please see src/Coin.js

    render() {
        return (
            <div>
                <Groups />
            </div>
        );
    }
}

export default LandingScreen;
