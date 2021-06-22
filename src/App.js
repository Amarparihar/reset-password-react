// import logo from "./logo.svg";
import "./App.css";
import Home from "./homepage";
import{
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Register from "./register";
import Reset from "./resetpassword";
import Update from "./updatepassword";
import Profile from "./profile";


function App() {
  return (
    <>
    <Router>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login align-items-center py-5">
              <div className="container">
                <Switch>
                  <Route path="/" component={Home} exact={true} />
                  <Route path="/register" component={Register} exact={true}/>
                  <Route path="/reset-pass" component={Reset} exact={true}/>
                  <Route path="/update-password" component={Update} exact={true}/>
                  <Route path="/profile" component={Profile} exact={true}/>
                </Switch>
              
              </div>
            </div>
           
          </div>
        </div>       
      </div>
     
      </Router>
    </>
  );
}

export default App;
