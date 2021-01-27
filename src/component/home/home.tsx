import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import AOS from 'aos';
import { gsap } from "gsap";
import { Tween, Reveal } from "react-gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Slider from "react-slick";

export class home extends Component {

  render() {

    AOS.init();
    gsap.registerPlugin(TextPlugin);

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        {/* wrapper start */}
        <div className="wrapper">

          {/* header start */}
          <header>
            <div className="px-0">
              <div className="row">
                <div className="col">
                  <a href="/" className="nav-brand" title="Hubura">
                    <img src={require('../../assets/images/logo.svg').default} alt="" />
                  </a>
                </div>
                <div className="col-auto">
                  <div className="right-handle">
                    <Button className="btn me-2">Login</Button>
                    <Button className="btn btn-iconic-text" variant="contained" color="primary"><span>Signup</span><img className="ms-xs-2 ms-1" src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* header end */}

          {/* home page banner start */}
          <div className="homepage-banner">
            <div className="container-xl">
              <Reveal>
                <Tween
                  to={{ text: "Careers are built on networks." }}
                  duration={3}
                  ease="none"
                >
                  <h1 className="ProximaNova-Bold"></h1>
                </Tween>
              </Reveal>
              {/* <h1 ></h1> */}
              <p>If you’re looking for the latest in wireless headphones, look no further. These are perfect for TV, stereo, home, and cell phone.</p>
              <div className="banner-search d-md-flex d-none">
                <div className="banner-select-search">
                  <div className="d-flex align-items-center">
                    <img className="location" src={require('../../assets/images/location-primary.svg').default} alt="" />
                    <Bannermenu></Bannermenu>
                  </div>
                  <input type="text" className="" placeholder="Search Users/Companies/Jobs" />
                </div>
                <Button className="btn btn-iconic-text ms-2" variant="contained" color="primary"><span>Start now</span><img className="ms-2" src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
              </div>

              <div className="banner-search d-md-none d-block">
                <div className="row">
                  <div className="col-sm">
                    <div className="banner-select-search">
                      <div className="d-flex align-items-center">
                        <img className="location" src={require('../../assets/images/location-primary.svg').default} alt="" />
                        <Bannermenu></Bannermenu>
                      </div>
                      <input type="text" className="" placeholder="Search Users/Companies/Jobs" />
                    </div>
                  </div>
                  <div className="col-sm-auto px-sm-0">
                    <Button className="btn btn-iconic-text d-sm-block d-none" variant="contained" color="primary"><img src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
                    <Button className="btn btn-iconic-text mt-3 mx-auto d-sm-none d-block" variant="contained" color="primary"><span>Start now</span><img className="ms-2" src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* home page banner end */}

          {/* How Hubura Works start */}
          <div className="how-habura-work">
            <div className="container-xl">
              <h4 className="text-center ProximaNova-Bold pb-4">How Hubura Works</h4>
              <div className="row">
                <div className="col-md-4">
                  <div className="how-habura-work-card"
                    data-aos="fade-up"
                    data-aos-offset="-200"
                    data-aos-delay="50"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <img src={require('../../assets/images/homepage/newspaper.svg').default} alt="" />
                    <h6 className="ProximaNova-Semibold">Discover Articles, News &amp; Posts</h6>
                    <p>
                      Doubtless, a common action of the advantage of the specific decisions
                      ensures integrity of The Communication
                      of Stable Manner.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-habura-work-card"
                    data-aos="fade-up"
                    data-aos-offset="-200"
                    data-aos-delay="50"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <img src={require('../../assets/images/homepage/create-job.svg').default} alt="" />
                    <h6 className="ProximaNova-Semibold">Create Jobs, Polls News &amp; Ads</h6>
                    <p>
                      Doubtless, a common action of the advantage of the specific decisions
                      ensures integrity of The Communication
                      of Stable Manner.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="how-habura-work-card"
                    data-aos="fade-up"
                    data-aos-offset="-200"
                    data-aos-delay="50"
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <img src={require('../../assets/images/homepage/business-job-search.svg').default} alt="" />
                    <h6 className="ProximaNova-Semibold">Find &amp; Apply to Jobs</h6>
                    <p>
                      Doubtless, a common action of the advantage of the specific decisions
                      ensures integrity of The Communication
                      of Stable Manner.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* How Hubura Works end */}

          {/* How Habura Work start */}
          <div className="why-people-love">
            <div className="container-xl">
              <h4 className="text-center ProximaNova-Bold pb-4 mb-3">Why People Love Hubura</h4>

              <Slider className="how-habura-work-slider" {...settings}>
                <div>
                  <div className="organization-testimonial-card">
                    <div className="organization-details">
                      <i><img src={require('../../assets/images/homepage/facebook.jpg').default} alt="" /></i>
                      <div>
                        <h6>Facebook, <span>United States</span></h6>
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
                      <i><img src={require('../../assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <h6>Airbnb, <span>California</span></h6>
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
                      <i><img src={require('../../assets/images/homepage/swiggy.jpg').default} alt="" /></i>
                      <div>
                        <h6>Swiggy, <span>India</span></h6>
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
                      <i><img src={require('../../assets/images/homepage/amazon.jpg').default} alt="" /></i>
                      <div>
                        <h6>Amazon, <span>California</span></h6>
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
                      <i><img src={require('../../assets/images/homepage/zomato.jpg').default} alt="" /></i>
                      <div>
                        <h6>Zomato, <span>India</span></h6>
                        <Rating name="read-only" value={5} readOnly />
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
            <div className="container-xl">
              <h4 className="text-center ProximaNova-Bold pb-4 mb-3">Hot Jobs On Hubura</h4>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="hot-job-card"
                    data-aos="fade-up"
                    data-aos-offset="-100"
                    data-aos-delay="0"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="organization-details">
                      <i><img src={require('../../assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <h6>Software Engineer</h6>
                        <span>Airbnb</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="hot-job-card"
                    data-aos="fade-up"
                    data-aos-offset="-100"
                    data-aos-delay="100"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="organization-details">
                      <i><img src={require('../../assets/images/homepage/amazon.jpg').default} alt="" /></i>
                      <div>
                        <h6>Business executive</h6>
                        <span>Amazon</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="hot-job-card"
                    data-aos="fade-up"
                    data-aos-offset="-100"
                    data-aos-delay="200"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="organization-details">
                      <i><img src={require('../../assets/images/homepage/zomato.jpg').default} alt="" /></i>
                      <div>
                        <h6>Business Lead</h6>
                        <span>Zomato</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="hot-job-card"
                    data-aos="fade-up"
                    data-aos-offset="-250"
                    data-aos-delay="300"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="organization-details">
                      <i><img src={require('../../assets/images/homepage/swiggy.jpg').default} alt="" /></i>
                      <div>
                        <h6>Product Manager</h6>
                        <span>Swiggy</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="hot-job-card"
                    data-aos="fade-up"
                    data-aos-offset="-250"
                    data-aos-delay="400"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="organization-details">
                      <i><img src={require('../../assets/images/homepage/tesla.jpg').default} alt="" /></i>
                      <div>
                        <h6>Marketing</h6>
                        <span>Tesla</span>
                      </div>
                    </div>
                    <p className="job-description">Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie comedy that knows how to perfectly balance its offbeat humor with just the right amount of dramatic intrigue.</p>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="hot-job-card"
                    data-aos="fade-up"
                    data-aos-offset="-250"
                    data-aos-delay="500"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="organization-details">
                      <i><img src={require('../../assets/images/homepage/airbnb.jpg').default} alt="" /></i>
                      <div>
                        <h6>Juniour Developer</h6>
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

          {/* benefits of Habura start */}
          <div className="benefits-habura-wrapper">
            <div className="container-xl">
              <div className="row">
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-lg-12 col-sm-6 d-flex align-items-center">
                      <div className="benefits-habura-info"
                        data-aos="fade-up"
                        data-aos-offset="-200"
                        data-aos-delay="50"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <h4 className="ProximaNova-Bold pb-4">Benefits of Hubura</h4>
                        <p>The Interference of Functional of the Capacity (Kasey Ahern in The Book of the Valuable Information) One of the most striking features of this problem is that concentration of the qualification be the goals of candidate.</p>
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-6">
                      <img className="benefits-habura-img" src={require('../../assets/images/homepage/benefits-habura.svg').default} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row benefits-habura-card-wrapper">
                    <div className="col-sm-6">
                      <div className="benefits-habura-card"
                        data-aos="fade-up"
                        data-aos-offset="-200"
                        data-aos-delay="100"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <img src={require('../../assets/images/homepage/easy-job-apply.svg').default} alt="" />
                        <h6 className="ProximaNova-Semibold">Easy job apply</h6>
                        <p>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="benefits-habura-card"
                        data-aos="fade-up"
                        data-aos-offset="-200"
                        data-aos-delay="150"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <img src={require('../../assets/images/homepage/improve-productivity.svg').default} alt="" />
                        <h6 className="ProximaNova-Semibold">Improve the productivity</h6>
                        <p>It's the details that make Dummy such a winner. By way of comparison, consider last summer's "My Big Fat Greek Wedding," in which each actor put a heartfelt spin on his or her one-joke character (the father who believes.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="benefits-habura-card"
                        data-aos="fade-up"
                        data-aos-offset="-200"
                        data-aos-delay="200"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <img src={require('../../assets/images/homepage/discover-people.svg').default} alt="" />
                        <h6 className="ProximaNova-Semibold">Discover the people</h6>
                        <p>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="benefits-habura-card"
                        data-aos="fade-up"
                        data-aos-offset="-200"
                        data-aos-delay="250"
                        data-aos-duration="200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <img src={require('../../assets/images/homepage/create-company-profile.svg').default} alt="" />
                        <h6 className="ProximaNova-Semibold">Create company profile</h6>
                        <p>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* benefits of Habura end */}

        </div>
        {/* wrapper end */}

        {/* Footer start */}
        <footer>
          <div className="primary-footer">
            <div className="row">
              <div className="col-sm-auto">
                <a href="/" className="nav-brand" title="Hubura">
                  <img src={require('../../assets/images/logo.svg').default} alt="" />
                </a>
              </div>
              <div className="col-sm d-flex justify-content-sm-end align-items-center">
                <ul className="footer-links">
                  <li>
                    <a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/term-and-condition" title="Terms and Conditions">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#" title="Cookie Policy">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="secondary-footer">
            <div className="row">
              <div className="col-auto">
                <p>&copy; Hubura. All Rights Reserved</p>
              </div>
              <div className="col">
                <ul className="social-links">
                  <li>
                    <a href="#" title="Facebook">
                      <img src={require('../../assets/images/facebook.svg').default} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Linkedin">
                      <img src={require('../../assets/images/linkedin.svg').default} alt="linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer end */}

      </>
    )
  }
}

export default home



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
        <MenuItem value="" disabled>Location</MenuItem>
        <MenuItem value={"Newyork"}>Newyork</MenuItem>
        <MenuItem value={"Sedney"}>Sedney</MenuItem>
        <MenuItem value={"India"}>India</MenuItem>
      </Select>
    </FormControl>
  );
}