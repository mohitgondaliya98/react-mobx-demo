import React from 'react'
import { Button, Box, Tabs, Tab, } from '@material-ui/core';
import BasicInformation from './basicInformation';
import SkillCertification from './skillCertification';
import PreferredJob from './preferredJobs';
import { NavLink } from 'react-router-dom';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface ChipData {
    key: number;
    label: string;
}

export default function AddProfile() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

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
                                    <Button variant="outlined" color="primary">back to home</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* header end */}

                <div className="main-content">
                    <div className="add-profile-stepper-wrapper">
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            className="add-profile-stepper"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                        >
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/basic-info-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/basic-info-primary.svg').default} alt="" />
                                    </i>
                                    <p>Basic Information
                                        <span>About Yourself</span>
                                    </p>
                                </div>
                            } {...a11yProps(0)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/qualification-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/qualification-primary.svg').default} alt="" />
                                    </i>
                                    <p>Qualification
                                        <span>Education &amp; Degree</span>
                                    </p>
                                </div>
                            } {...a11yProps(1)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/skills-certifications-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/skills-certifications-primary.svg').default} alt="" />
                                    </i>
                                    <p>Skills &amp; Certifications
                                        <span>Professional Skills</span>
                                    </p>
                                </div>
                            } {...a11yProps(2)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/experience-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/experience-primary.svg').default} alt="" />
                                    </i>
                                    <p>Experience
                                        <span>Internship &amp; Jobs</span>
                                    </p>
                                </div>
                            } {...a11yProps(3)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/preferred-jobs-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/preferred-jobs-primary.svg').default} alt="" />
                                    </i>
                                    <p>Preferred Jobs
                                        <span>Job location,Timings etc</span>
                                    </p>
                                </div>
                            } {...a11yProps(4)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/additional-info-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/additional-info-primary.svg').default} alt="" />
                                    </i>
                                    <p>Additional Info
                                        <span>General Details</span>
                                    </p>
                                </div>
                            } {...a11yProps(5)} />
                        </Tabs>


                        <TabPanel value={value} index={0}>
                            <div className="add-profile-tab-content">
                                <BasicInformation />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Qualification</p>
                                    <span>Education &amp; Degree</span>
                                </div>
                                <div className="tab-main-content">

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="add-profile-tab-content">
                                <SkillCertification />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Experience</p>
                                    <span>Internship &amp; Jobs</span>
                                </div>
                                <div className="tab-main-content">

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <div className="add-profile-tab-content">
                                <PreferredJob />
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Additional Info</p>
                                    <span>General Details</span>
                                </div>
                                <div className="tab-main-content">

                                </div>
                            </div>
                        </TabPanel>
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


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

