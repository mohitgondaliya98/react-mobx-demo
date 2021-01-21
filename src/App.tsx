import React, { useEffect } from 'react';
import ToDoStore from "./store/NoteStore"
import "./assets/styles/dev-style.css"
import "./assets/styles/bootstrap-grid.min.css"
import "./assets/styles/style.css"
import HomePage from './component/home/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Button from '@material-ui/core/Button';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import Slider from "react-slick";


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
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
    };
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
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col">
                  <a href="#" className="nav-brand">
                    <img src={require('../src/assets/images/logo.svg').default} alt="" />
                  </a>
                </div>
                <div className="col-auto">
                  <div className="right-handle">
                    <Button className="btn me-2">Login</Button>
                    <Button className="btn btn-iconic-text" variant="contained" color="primary"><span>Signup</span><img className="ms-2" src={require('../src/assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* header end */}


          {/* home page banner start */}
          <div className="homepage-banner">
            <h1 className="ProximaNova-Bold">Careers are built on networks.</h1>
            <p>If you’re looking for the latest in wireless headphones, look no further. These are perfect for TV, stereo, home, and cell phone.</p>
            <div className="banner-search">
              <div className="banner-select-search">
                <img className="location" src={require('../src/assets/images/location-primary.svg').default} alt="" />
                <Bannermenu></Bannermenu>
                <input type="text" className="" placeholder="Search Users/Companies/Jobs" />
              </div>
              <Button className="btn btn-iconic-text ms-2" variant="contained" color="primary"><span>Start now</span><img className="ms-2" src={require('../src/assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
            </div>
          </div>
          {/* home page banner end */}


          {/* How Hubura Works start */}
          <div className="how-habura-work">
            <div className="container-lg">
              <h4 className="text-center ProximaNova-Bold pb-4">How Hubura Works</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="how-habura-work-card">
                    <img src={require('../src/assets/images/homepage/newspaper.svg').default} alt="" />
                    <h6 className="ProximaNova-Semibold">Discover Articles, News &amp; Posts</h6>
                    <p>
                      Doubtless, a common action of the advantage of the specific decisions
                      ensures integrity of The Communication
                      of Stable Manner.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-habura-work-card">
                    <img src={require('../src/assets/images/homepage/create-job.svg').default} alt="" />
                    <h6 className="ProximaNova-Semibold">Create Jobs, Polls News &amp; Ads</h6>
                    <p>
                      Doubtless, a common action of the advantage of the specific decisions
                      ensures integrity of The Communication
                      of Stable Manner.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-habura-work-card">
                    <img src={require('../src/assets/images/homepage/business-job-search.svg').default} alt="" />
                    <h6 className="ProximaNova-Semibold">Find &amp; Apply to Jobs</h6>
                    <p>
                      Doubtless, a common action of the advantage of the specific decisions
                      ensures integrity of The Communication
                      of Stable Manner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* How Hubura Works end */}

          {/* How Habura Work start */}
          <div className="why-people-love">
            <div className="container-lg">
              <h4 className="text-center ProximaNova-Bold pb-4 mb-3">Why People Love Hubura</h4>

              <Slider className="how-habura-work-slider" {...settings}>
                <div>
                  <div className="organization-testimonial-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/facebook.jpg').default} alt="" /></i>
                      <div>
                        <p>Facebook, <span>United States</span></p>
                        <Rating name="read-only" value={3} readOnly />
                      </div>
                    </div>

                    <p className="organization-review">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <span className="person-reviewed">Reviewed by john doe</span>
                  </div>
                </div>

                <div>
                  <div className="organization-testimonial-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Airbnb, <span>California</span></p>
                        <Rating name="read-only" value={4} readOnly />
                      </div>
                    </div>

                    <p className="organization-review">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <span className="person-reviewed">Reviewed by john doe</span>
                  </div>
                </div>
                <div>
                  <div className="organization-testimonial-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/facebook.jpg').default} alt="" /></i>
                      <div>
                        <p>Facebook, <span>United States</span></p>
                        <Rating name="read-only" value={3} readOnly />
                      </div>
                    </div>

                    <p className="organization-review">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <span className="person-reviewed">Reviewed by john doe</span>
                  </div>
                </div>

                <div>
                  <div className="organization-testimonial-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Airbnb, <span>California</span></p>
                        <Rating name="read-only" value={4} readOnly />
                      </div>
                    </div>

                    <p className="organization-review">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <span className="person-reviewed">Reviewed by john doe</span>
                  </div>
                </div>
                <div>
                  <div className="organization-testimonial-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/facebook.jpg').default} alt="" /></i>
                      <div>
                        <p>Facebook, <span>United States</span></p>
                        <Rating name="read-only" value={3} readOnly />
                      </div>
                    </div>

                    <p className="organization-review">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <span className="person-reviewed">Reviewed by john doe</span>
                  </div>
                </div>

                <div>
                  <div className="organization-testimonial-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Airbnb, <span>California</span></p>
                        <Rating name="read-only" value={4} readOnly />
                      </div>
                    </div>

                    <p className="organization-review">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <span className="person-reviewed">Reviewed by john doe</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* How Habura Work end */}


          {/* Hot Jobs on Hubura start */}
          <div className="hot-jobs-wrapper">
            <div className="container-lg">
              <h4 className="text-center ProximaNova-Bold pb-4 mb-3">Hot Jobs On Hubura</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="hot-job-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Software Engineer</p>
                        <span>Airbnb</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hot-job-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Software Engineer</p>
                        <span>Airbnb</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hot-job-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Software Engineer</p>
                        <span>Airbnb</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hot-job-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Software Engineer</p>
                        <span>Airbnb</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hot-job-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Software Engineer</p>
                        <span>Airbnb</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hot-job-card">
                    <div className="organization-details">
                      <i><img src={require('../src/assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <p>Software Engineer</p>
                        <span>Airbnb</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>


              </div>
            </div>
          </div>
          {/* Hot Jobs on Hubura end */}

        </div>
      </>
    );
  }
}



function Bannermenu() {
  const [option, setOption] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOption(event.target.value as string);
  };

  return (
    <FormControl className="country-select">
      <Select
        value={option}
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        <MenuItem value="">Location</MenuItem>
        <MenuItem value={"Newyork"}>Newyork</MenuItem>
        <MenuItem value={"Sedney"}>Sedney</MenuItem>
        <MenuItem value={"India"}>India</MenuItem>
      </Select>
    </FormControl>
  );
}