import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect >>>>>>>>> POWERFULL REACT HOOK
  // Piece of code which runs based on given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is Logged In...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is Logged Out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // any cleanup operation go in here...
    unsubscribe();
  }, []);

  console.log("User Is >>>>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
