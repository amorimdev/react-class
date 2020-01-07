import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default () => (
  <Router>
    <div>
      <h1>Router Component!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:userId">
          <Users />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  const { userId } = useParams();

  return (
    <div>
      <h2>Users</h2>

      <h4>
        {(userId && <span>This is User Id: {userId}</span>) || (
          <Link to="/users/1">Click here to User ID 1</Link>
        )}
      </h4>
    </div>
  );
}
