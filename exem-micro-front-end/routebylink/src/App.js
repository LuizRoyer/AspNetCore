import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'

const helloWorld = () => (<div>component World!</div>)
const helloReact = () => (<div>component React!</div>)

export default ({ history }) => {
    return <div>
        <Router history={history}>
            <Switch>
                <Route path="/react" component={helloReact} />
                <Route path="/" component={helloWorld} />
            </Switch>
            <br />
            <Link to='/react'>change to link component to React!</Link>
            <br />
            <Link to='/'>change to link component to the World!</Link>
        </Router>
    </div>
}