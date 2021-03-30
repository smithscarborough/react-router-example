import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import "./styles.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="header">
            <span className="logo-text">My App</span>
            <nav className="primary-nav">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <BlogPost />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
