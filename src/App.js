import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Work from "./pages/Work/Work";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
