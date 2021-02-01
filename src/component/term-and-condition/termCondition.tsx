import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


export class termCondition extends Component {
    render() {
        return (
            <>
                {/* wrapper start */}
                <div className="wrapper homepage">

                    {/* header start */}
                    <header>
                        <div className="px-0">
                            <div className="row">
                                <div className="col">
                                    <a href={`${process.env.PUBLIC_URL}/`} className="nav-brand" title="Hubura">
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

                    <div className="main-content">
                        <div className="content-page container-xl">
                            <h4 className="ProximaNova-Bold page-title">Terms &amp; Conditions</h4>

                            <p className="pb-lg-4 pb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                            <h6 className="ProximaNova-Bold title pb-2 fs-24">1. Defination</h6>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <h6 className="ProximaNova-Bold title pb-2 fs-24">2. Data Security</h6>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            <h6 className="ProximaNova-Bold title pb-0">Following steps to achieve the solution</h6>
                            <ul className="primary-listing mb-4">
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</li>
                                <li>Dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</li>
                                <li>Dummy text of the printing and typesetting industry.</li>
                            </ul>

                            <h6 className="ProximaNova-Bold title pb-2 fs-24">3. Customer information</h6>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </div>
                    </div>

                </div>
                {/* wrapper end */}

                {/* Footer start */}
                <footer>
                    <div className="primary-footer">
                        <div className="row">
                            <div className="col-sm-auto">
                                <a href={`${process.env.PUBLIC_URL}/`} className="nav-brand" title="Hubura">
                                    <img src={require('../../assets/images/logo.svg').default} alt="" />
                                </a>
                            </div>
                            <div className="col-sm d-flex justify-content-sm-end align-items-center">
                                <ul className="footer-links">
                                    <li>
                                        <NavLink exact to={`${process.env.PUBLIC_URL}/privacy-policy`} title="Privacy Policy">Privacy Policy</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to={`${process.env.PUBLIC_URL}/term-and-condition`} title="Terms and Conditions">Terms and Conditions</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to={`${process.env.PUBLIC_URL}/`} title="Cookie Policy">Cookie Policy</NavLink>
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

export default termCondition