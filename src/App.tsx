import React, { useEffect } from 'react';
import ToDoStore from "./store/NoteStore"
import "./assets/styles/dev-style.css"
import "./assets/styles/bootstrap-grid.min.css"
import "./assets/styles/style.css"
import HomePage from './component/home/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
        <div className="wrapper">
          {/* <Router>
            <div className="wrapper">
              <Route path={`${process.env.PUBLIC_URL}/`} exact component={HomePage} />
            </div>
          </Router> */}
          {/* header start */}
          <header>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <a href="#" className="nav-brand">
                    <img src={require('../src/assets/images/logo.svg').default} alt="" />
                  </a>
                </div>
                <div className="col-auto">
                  <div className="right-handle">
                    <Button className="btn me-2">Login</Button>
                    <Button className="btn btn-iconic-text" variant="contained" color="primary">Signup<img className="ms-2" src={require('../src/assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* header end */}
          

          {/* home page banner start */}
          <div className="homepage-banner">
            <div className="container-xl">
              <h1 className="ProximaNova-Bold">Careers are built on networks.</h1>
              <p>If you’re looking for the latest in wireless headphones, look no further. These are perfect for TV, stereo, home, and cell phone.</p>
            </div>
          </div>
          {/* home page banner end */}


        </div>
      </>
    );
  }
}
