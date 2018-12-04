import React, { Component } from "react";
// import ShowTodos from "./components/ShowTodos";
import Groups from './components/Groups'
import Group from './components/Group'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import axios from "axios";

class LandingScreen extends Component {
    state = {

    };

    componentDidMount() {
        // this.refresh();
        // console.log("Mounted")
    }

    // ! In order to reference older code please see src/Coin.js

    render() {

        return (
            <div>
                <Router>
                    <div>
                        <h1>CurrenSee</h1>
                        <p><Link to='/groups'>See All Collections</Link></p>
                        <p>To see a list of posts, <Link to='/posts'>click here.</Link></p>
                        <Route exact path="/groups" component={Groups} />
                        <Route path="/groups/:groupId" component={Group} />
                        {/* <Route path="/users/:userId" component={Profile} />
                        <Route exact path="/posts" component={Posts} />
                        <Route path="/posts/:postId" component={PostDetails} /> */}
                    </div>
                </Router>
            </div>
        );
    }
}

export default LandingScreen;
