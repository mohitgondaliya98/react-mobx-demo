import React, { useEffect } from 'react';
import ToDoStore from "./store/NoteStore"
import "./assets/styles/dev-style.css"
import "./assets/styles/bootstrap-grid.min.css"
import "./assets/styles/style.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './component/home/home';
import Privacy from './component/privacy/privacyPolicy';
import TermCondition from './component/term-and-condition/termCondition';
import AddProfile from './component/profile/addProfile';

export default class App extends React.Component<{}, {}> {
  private todoStore: ToDoStore;

  constructor(props: any) {
    super(props);
    this.todoStore = new ToDoStore();
  }

  componentDidMount() {
    this.todoStore.getToDos();
  }


  render() {

    return (
      <>
        <Router>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={(props: any) => <HomePage />} />
            <Route exact path={`${process.env.PUBLIC_URL}/privacy-policy`} component={(props: any) => <Privacy />} />
            <Route exact path={`${process.env.PUBLIC_URL}/term-and-condition`} component={(props: any) => <TermCondition />} />
            <Route exact path={`${process.env.PUBLIC_URL}/add-profile`} component={(props: any) => <AddProfile />} />
          </Switch>
        </Router>
      </>
    );
  }
}

