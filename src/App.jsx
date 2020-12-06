import React from "react";
import Navigation from "./components/Navigation";
import AddBlog from "./pages/AddBlog";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ContactMePage from "./pages/ContactMePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <Router>
        <Navigation></Navigation>
        <main>
          <Switch>
            <Route path="/" exact>
              <h1>Welcome to my Portfolio!</h1>

            </Route>
            <Route path="/addblog" >
              <AddBlog />
            </Route>
            <Route path="/login" >
              <LoginPage />
            </Route>

            <Route path="/profile" >
              <ProfilePage />
            </Route>
            <Route path="/HomePage" >
              <HomePage />
            </Route>


            <Route path="/ContactMe" >
              <ContactMePage />
            </Route>
          </Switch>

        </main>

        <Footer />

      </Router>

    </>
  );
};
export default App;

