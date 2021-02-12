import React, { Fragment } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from "./components/helper";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector} from "react-redux";
import {RootState} from "./redux/store";

const App : React.FC = () =>{

  const {userId,error,loading} = useSelector((state : RootState )=> state.auth);
  return (
      <Router>
        <Fragment>
          <GlobalStyle />
          <Switch>
          <Route exact path="/" render={(props:any) => userId ? <Dashboard /> : <Redirect to="/login" />} />
          {/* <Route path="/login" component={Dashboard} /> */}
          <Route path="/login" render={(props:any)=><Login uid={userId} error={error} loading={loading} />} />
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/register" render={()=><Register uid={userId} error={error} loading={loading}/>} />
          </Switch>
        </Fragment>
      </Router>

  );
}

export default App;
